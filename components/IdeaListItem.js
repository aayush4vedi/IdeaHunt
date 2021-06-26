import {
  Box,
  Stack,
  IconButton,
  Text,
  Tag,
  TagLeftIcon,
  TagLabel,
  Heading,
  Avatar
} from '@chakra-ui/react';
import {
  FaChevronCircleUp,
  FaChevronCircleDown,
  FaLock,
  FaLockOpen
} from 'react-icons/fa';
import { parseISO, format } from 'date-fns';

const IdeaListItem = ({ idea, noOfLines }) => {
  return (
    <Box py={4}>
      <Box
        bg="white"
        boxShadow={'md'}
        p={6}
        overflow={'hidden'}
        borderRadius="md"
      >
        <Stack spacing={2} flexDirection="row">
          <Box mr={2} display="flex" alignItems="center">
            <Stack spacing={2} alignItems="center">
              <IconButton
                aria-label="icon"
                icon={<FaChevronCircleUp />}
                size="lg"
                variant="ghost"
              />
              <Text>{idea?.upvotes}</Text>
              <IconButton
                aria-label="icon"
                icon={<FaChevronCircleDown />}
                size="lg"
                variant="ghost"
              />
            </Stack>
          </Box>
          <Box ml={5} cursor="pointer" w="100%">
            <Stack spacing={2}>
              <Box>
                {idea.tags.map((tag) => (
                  <Tag
                    rounded="md"
                    variant="subtle"
                    colorScheme="red"
                    mb={2}
                    mr={2}
                    p={(1, 0.5)}
                    size="xs"
                    fontSize="xs"
                  >
                    {tag.label}
                  </Tag>
                ))}
              </Box>
              <Heading as="h5" size="lg">
                {idea.title}
              </Heading>
              <Box mb={5}>
                <Text noOfLines={noOfLines}>{idea.description}</Text>
              </Box>
              <Box>
                <Tag rounded="md" colorScheme="blackAlpha" mr={5} mt={5}>
                  {idea?.solved ? (
                    <>
                      <TagLeftIcon boxSize="12px" as={FaLockOpen} />
                      <TagLabel>Solved</TagLabel>
                    </>
                  ) : (
                    <>
                      <TagLeftIcon boxSize="12px" as={FaLock} />
                      <TagLabel>Unsolved</TagLabel>
                    </>
                  )}
                </Tag>
              </Box>
              <Stack spacing={2} mt={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box display="flex" mr={25} alignItems="center">
                    <Avatar
                      size="xs"
                      name={''}
                      src={''}
                      name={idea?.authorName}
                      src={idea?.authorPhotoUrl}
                    />
                    <Text ml={2} fontSize="xs">
                      on {format(parseISO(idea?.createdAt), 'PPpp')}
                    </Text>
                  </Box>
                  <Box display="flex" alignItems="end" ml={25}>
                    <Text fontWeight="bold" textAlign="left" ml={5}>
                      {idea.noOfComments ? idea.noOfComments : '0'} Comments
                    </Text>
                    <Text fontWeight="bold" textAlign="left" ml={5}>
                      {idea.noOfSubmissions ? idea.noOfSubmissions : '0'} Submissions
                    </Text>
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default IdeaListItem;
