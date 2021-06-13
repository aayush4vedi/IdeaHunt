import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Skeleton,
  SkeletonCircle,
  SkeletonText
} from '@chakra-ui/react';

const IdeaListItemPlacebo = () => {
  return (
    <Center py={2}>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Stack>
          <Skeleton w={5} h={2}>
          </Skeleton>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            <Skeleton
              mb={2}
              startColor="yellow.500"
              endColor="orange.500"
              h={4}
            >
              Title
            </Skeleton>
          </Heading>
          <SkeletonText mt="4" noOfLines={4} spacing="4">
            <Text color={'gray.500'}> Veniam pariatur officia nisi amet incididunt ad officia excepteur duis consequat.</Text>
          </SkeletonText>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <SkeletonCircle>
            <Avatar src="" alt="" size="2xs" />
          </SkeletonCircle>
        </Stack>
      </Box>
    </Center>
  );
};

export default IdeaListItemPlacebo;
