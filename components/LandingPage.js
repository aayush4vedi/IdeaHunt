import {
  ChakraProvider,
  Box,
  Stack,
  Button,
  Icon,
  Heading,
  Text,
  Center,
  Link,
  IconButton,
  Code
} from '@chakra-ui/react';

import { FaEllo, FaSun, FaMoon, FaArrowRight } from 'react-icons/fa';

const LandingPage = ({ toggleColorMode, auth }) => (
  <Box
    backgroundColor="gray.100"
    minWidth="100%"
    minHeight="100vh"
    height="100vh"
  >
    <Stack spacing={2} flexDirection="column" ml={20} mr={20} minHeight="80vh">
      <Box mt={4}>
        <Stack
          spacing={2}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <IconButton
              icon={<FaEllo />}
              size="xl"
              isRound
              variant="ghost"
              mr={5}
            />
            <Link
              href="#"
              isExternal
              fontWeight="bold"
              textAlign="left"
              fontSize="lg"
              ml={5}
            >
              IdeaHunt
            </Link>
          </Box>
          <Box>
            <IconButton
              aria-label="icon"
              icon={<FaSun />}
              size="md"
              isRound
              variant="ghost"
              mr={5}
              onClick={toggleColorMode}
            />
            {auth.user ? (
              <Button
                variant="solid"
                size="md"
                ml={2}
                backgroundColor="teal.400"
                color="white"
                colorScheme="green"
                onClick={(e) => auth.signout()}
              >
                LogOut
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="md"
                  colorScheme="whiteAlpha"
                  mr={2}
                  backgroundColor="gray.100"
                  color="black"
                  onClick={(e) => auth.signinWithGoogle()}
                >
                  Google
                </Button>
                <Button
                  variant="solid"
                  size="md"
                  ml={2}
                  backgroundColor="teal.400"
                  color="white"
                  colorScheme="green"
                  onClick={(e) => auth.signinWithGithub()}
                >
                  Github
                </Button>
              </>
            )}
          </Box>
        </Stack>
      </Box>
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
            Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
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
    </Stack>
    <Box ml={60} mr={60}>
      <Stack spacing={2}>
        <Stack
          spacing={20}
          flexDirection="row"
          justifyContent="space-between"
          display="flex"
          alignItems="flex-end"
          ml={80}
          mr={80}
        >
          <Link href="#" color="gray.500" fontSize="xs">
            Home
          </Link>
          <Link href="#" color="gray.500" fontSize="xs">
            Privacy
          </Link>
          <Link href="#" color="gray.500" fontSize="xs">
            Terms
          </Link>
        </Stack>
        <Text
          display="flex"
          flexDirection="row"
          justifyContent="center"
          color="gray.500"
          fontSize="xs"
        >
          Made by @aayush.4vedi
        </Text>
      </Stack>
    </Box>
  </Box>
);

export default LandingPage;
