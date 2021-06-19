import {
  Box,
  Stack,
  Avatar,
  Text,
  Divider,
  IconButton,
  Skeleton,
  SkeletonCircle,
  SkeletonText
} from '@chakra-ui/react';
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

const CommentPlacebo = () => {
  return (
    <Box>
      <Stack spacing={2} flexDirection="row" alignItems="stretch">
        <Box p={2}>
          <Avatar size="xs" mt={2} />
        </Box>
        <Box>
          <Stack spacing={2}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              pl={3}
            >
              <Skeleton>
                <Text fontWeight="bold">Author Name</Text>
              </Skeleton>
              <Skeleton>
                <Text color="gray.500" fontSize="xs" ml={5}>
                  Date Submitted
                </Text>
              </Skeleton>
            </Box>
            <Box pl={3}>
              <Skeleton mt="4" noOfLines={2} spacing="2">
                <Text color="gray.800">lorem impusm</Text>
              </Skeleton>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              t={0}
            >
              <IconButton
                aria-label="icon"
                icon={<FaChevronCircleUp />}
                size="lg"
                variant="ghost"
              />
              <Skeleton>
                <Text ml={2}>42</Text>
              </Skeleton>
              <IconButton
                aria-label="icon"
                icon={<FaChevronCircleDown />}
                size="lg"
                variant="ghost"
                ml={2}
                color="blackAlpha.500"
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Divider
        borderColor="gray.200"
        backgroundColor="gray.200"
        mt={2}
        mb={2}
      />
    </Box>
  );
};

export default CommentPlacebo;
