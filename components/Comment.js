import {
  Box,
  Stack,
  Avatar,
  Text,
  Divider,
  IconButton
} from '@chakra-ui/react';
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

import { format, parseISO } from 'date-fns';

const Comment = ({ author, createdAt, text, upvotes, authorPhotoUrl }) => {
  return (
    <Box>
      <Stack spacing={2} flexDirection="row" alignItems="stretch">
        <Box p={2}>
          <Avatar
            size="xs"
            mt={2}
            name={author}
            src={authorPhotoUrl}
          />
        </Box>
        <Box>
          <Stack spacing={2}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              pl={3}
            >
              <Text fontWeight="bold">{author}</Text>
              <Text color="gray.500" fontSize="xs" ml={5}>
                {format(parseISO(createdAt), 'PPpp')}
              </Text>
            </Box>
            <Box pl={3}>
              <Text color="gray.800">{text}</Text>
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
              <Text ml={2}>{upvotes}</Text>
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

export default Comment;
