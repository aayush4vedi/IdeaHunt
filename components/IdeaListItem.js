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

const IdeaListItem = ({ idea }) => {
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
              <Text>42</Text>
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
                <Tag
                  rounded="md"
                  variant="subtle"
                  colorScheme="red"
                  mb={2}
                  size="md"
                  // maxW="15"
                >
                  Tag name
                </Tag>
              </Box>
              <Heading as="h5">{idea.title}</Heading>
              <Box mb={5}>
                <Text noOfLines={2}>{idea.description}</Text>
              </Box>
              <Box>
                <Tag rounded="md" colorScheme="blackAlpha" mr={5}>
                  <TagLeftIcon boxSize="12px" as={FaLock} />
                  <TagLabel>Unsolved</TagLabel>
                </Tag>
              </Box>
              <Stack spacing={2} mt={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box display="flex" mr={25}>
                    <Avatar size="xs" name={''} src={''}></Avatar>
                    <Text ml={2}>
                      on {format(parseISO(idea?.createdAt), 'PPpp')}
                    </Text>
                  </Box>
                  <Box display="flex" alignItems="end" ml={25}>
                    <Text fontWeight="bold" textAlign="left" ml={5}>
                      2 Submissions
                    </Text>
                    <Text fontWeight="bold" textAlign="left" ml={5}>
                      15 Comments
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
