import { useRef } from 'react';
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
  Textarea
} from '@chakra-ui/react';
import { createIdea } from '../lib/db';

const SubmitIdeaModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onCreateIdea = (data) => createIdea(data);

  return (
    <>
      <Button onClick={onOpen}>Sumbit An Idea</Button>

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
                {...register('title',{ required: true })}
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
                {...register('description',{ required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button
              colorScheme="teal"
              backgroundColor="teal.400"
              color="white"
              type="submit"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubmitIdeaModal;
