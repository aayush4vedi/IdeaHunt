import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue
} from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';

const IdeaListItem = ({ idea }) => {
  return (
    <Center py={2}>
      <Box
        maxW="100%"
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            Tag
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {idea.title}
          </Heading>
          <Text color={'gray.500'}>{idea.description}</Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src="" alt="" size="2xs" />
          {idea ? (
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>{idea?.authorId}</Text>
              <Text color={'gray.500'}>
                {format(parseISO(idea?.createdAt), 'PPpp')}
              </Text>
            </Stack>
          ) : null}
        </Stack>
      </Box>
    </Center>
  );
};

export default IdeaListItem;
