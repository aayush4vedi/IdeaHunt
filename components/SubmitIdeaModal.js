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
  Radio,
  Textarea,
  RadioGroup,
  HStack,
  useDisclosure,
  Button,
  FormHelperText,
  Select,
  Tag,
  Box,
  useToast
} from '@chakra-ui/react';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';

import { mutate } from 'swr';

import { createIdea } from '@/lib/db';
import { useAuth } from '@/lib/auth';

//TODO: fetch these tags from db
const tags = [
  { value: 'robotics', label: 'Robotics' },
  { value: 'physics', label: 'Physics' },
  { value: 'chemistry', label: 'Chemistry' },
  { value: 'artificial-intelligence', label: 'AI' },
  { value: 'machine-learning', label: 'Machine Learning' },
  { value: 'data-science', label: 'Data Science' },
  { value: 'business', label: 'Business' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'e-commerce', label: 'E-Commerce' },
  { value: 'food', label: 'Food' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'software', label: 'Software' },
  { value: 'app', label: 'App' },
  { value: 'space', label: 'Space' },
  { value: 'productivity', label: 'Productivity' }
];

const SubmitIdeaModal = () => {
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [pickerItems, setPickerItems] = useState(tags);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

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

  const onCreateIdea = ({ title, description, level }) => {
    const newIdea = {
      authorId: auth.user.uid,
      authorName: auth.user.displayName,
      authorPhotoUrl: auth.user.photoURL,
      createdAt: new Date().toISOString(),
      title,
      description,
      level,
      tags: selectedItems,
      upvotes: 0,
      solved: false,
      noOfComments: 0,
      noOfSubmissions: 0
    };

    console.log(newIdea);

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

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateIdea)}>
          <ModalHeader fontWeight="bold">Submit Your Idea</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} as="form">
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Enter title for your idea"
                {...register('title', { required: true }, { min: 50 })}
              />
              {errors.exampleRequired && (
                <span>Atleast 50 words are required.</span>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Select Difficulty Level</FormLabel>
              <RadioGroup defaultValue="medium" name="level">
                <HStack spacing="24px">
                  <Radio value="easy" {...register('level')}>
                    Easy
                  </Radio>
                  <Radio value="medium" {...register('level')}>
                    Medium
                  </Radio>
                  <Radio value="hard" {...register('level')}>
                    Hard
                  </Radio>
                </HStack>
              </RadioGroup>
              {/* <FormHelperText fontSize="xs">Difficulty level helps people find ideas of their level.</FormHelperText> */}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Write your description here"
                minH={40}
                {...register('description', { required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </FormControl>

            <Box mt={4}>
              <CUIAutoComplete
                label="Select Tags"
                placeholder="Start typing..."
                onCreateItem={handleCreateItem}
                items={pickerItems}
                tagStyleProps={{
                  rounded: 'full',
                  fontSize: 'xs'
                }}
                selectedItems={selectedItems}
                onSelectedItemsChange={(changes) =>
                  handleSelectedItemsChange(changes.selectedItems)
                }
              />
            </Box>
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
