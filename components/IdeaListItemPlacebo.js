import {
  Box,
  Stack,
  IconButton,
  Text,
  Tag,
  TagLeftIcon,
  TagLabel,
  Heading,
  Avatar,
  Skeleton,
  SkeletonCircle,
  SkeletonText
} from '@chakra-ui/react';
import {
  FaChevronCircleUp,
  FaChevronCircleDown,
  FaLock,
  FaLockOpen
} from 'react-icons/fa';

const IdeaListItemPlacebo = () => {
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
              <Skeleton>
                <Text>42</Text>
              </Skeleton>
              <IconButton
                aria-label="icon"
                icon={<FaChevronCircleDown />}
                size="lg"
                variant="ghost"
              />
            </Stack>
          </Box>
          <Box ml={5} cursor="pointer">
            <Stack spacing={2}>
              <Box>
                <Skeleton
                  mb={2}
                  startColor="yellow.500"
                  endColor="orange.500"
                  h={4}
                  w="5rem"
                >
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
                </Skeleton>
              </Box>
              <Skeleton w="25rem">
                <Heading as="h5">Title Line Here</Heading>
              </Skeleton>
              <Box mb={5}>
                <SkeletonText w="70rem" mt="4" noOfLines={4} spacing="4" />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default IdeaListItemPlacebo;
