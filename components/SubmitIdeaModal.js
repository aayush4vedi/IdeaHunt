import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Button,
  useToast
} from '@chakra-ui/react';
import { mutate } from 'swr';

import { createIdea } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const SubmitIdeaModal = () => {
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  //set button to spinning on form submit
  const plainSubmitButton = (
    <Button
      colorScheme="teal"
      backgroundColor="teal.400"
      color="white"
      type="submit"
    >
      Submit
    </Button>
  );
  const spinningSubmitButton = (
    <Button
      isLoading
      loadingText="Submitting"
      colorScheme="teal"
      variant="solid"
    >
      Submit
    </Button>
  );
  const [submitButton, setStateOfSubmitButton] = useState(plainSubmitButton);
  const initialRef = useRef();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onCreateIdea = ({ title, description }) => {
    const newIdea = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      title,
      description
    };
    setStateOfSubmitButton(spinningSubmitButton);
    const { id } = createIdea(newIdea);
    toast({
      title: 'Idea Submitted.',
      description: 'Thanks for sharing your idea with the world!',
      status: 'success',
      duration: 5000,
      isClosable: true
    });
    //SWR-mutation
    mutate(
      ['/api/ideas', auth.user.za],
      async (data) => {
        return { ideas: [...data.ideas, { id, ...newIdea }] };
      },
      false //use 'false' to mutate w/o revalidation
    );
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="teal"
        backgroundColor="teal.400"
        color="white"
        mt={5}
        _active={{
          bg: 'teal.500',
          transform: 'scale(0.95)'
        }}
      >
        + Sumbit An Idea
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateIdea)}>
          <ModalHeader fontWeight="bold">Submit Your Idea</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Enter title for your idea"
                // defaultValue="title"
                {...register('title', { required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Summary</FormLabel>
              <Input
                as="Textarea"
                placeholder="Write your description here"
                size="md"
                // defaultValue="description"
                {...register('description', { required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            {submitButton}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubmitIdeaModal;
