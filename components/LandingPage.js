import {
  Box,
  Stack,
  Button,
  Heading,
  Text,
  Center,
  Code
} from '@chakra-ui/react';

import { FaArrowRight } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LandingPage = ({ toggleColorMode, auth }) => (
  <Box
    backgroundColor="gray.100"
    minWidth="100%"
    minHeight="100vh"
    height="100vh"
  >
    <Stack spacing={2} flexDirection="column" ml={20} mr={20} minHeight="80vh">
      <Header auth={auth} toggleColorMode={toggleColorMode} />
      <Box>
        <Center display="flex" flexDirection="column" mt={200} mb={100}>
          <Heading
            size="2xl"
            as="h1"
            mt={5}
            mb={5}
            fontWeight="bold"
            letterSpacing="tight"
          >
            First Open Source Idea Incubator
          </Heading>
          <Text>
            Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code> |{' '}
            {auth.user?.displayName}
          </Text>
          <Text>
            A place to share ideas, have discussions & build solutions.
          </Text>
          <Button
            variant="solid"
            size="lg"
            mt={8}
            rightIcon={<FaArrowRight />}
            boxShadow="base"
            backgroundColor="red.400"
            color="white"
            colorScheme="red"
            borderRadius="full"
          >
            Get Started
          </Button>
        </Center>
      </Box>
      <Footer/>
    </Stack>
  </Box>
);

export default LandingPage;
