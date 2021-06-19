import { useAuth } from '@/lib/auth';
import {
  Box,
  Stack,
  Button,
  Link,
  IconButton,
  Avatar,
  HStack
} from '@chakra-ui/react';
import Head from 'next/head';

import { FaEllo, FaSun, FaMoon, FaGithub, FaGoogle } from 'react-icons/fa';

const Header = () => {
  const auth = useAuth()
  return (
    <Box mt={4}>
      <Head>
        <title>Idea Hunt</title>
      </Head>
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
            mr={2}
            as="a"
            href="/"
          />
          <Link
            href="/"
            // isExternal
            fontWeight="bold"
            textAlign="left"
            fontSize="lg"
            ml={2}
          >
            IdeaHunt
          </Link>
        </Box>
        <HStack>
          <IconButton
            aria-label="icon"
            icon={<FaSun />}
            size="md"
            isRound
            variant="ghost"
            mr={5}
          />
          {auth?.user ? (
            <HStack alignItems="center">
              <Avatar
                size="sm"
                name={auth.user.displayName}
                src={auth.user.photoURL}
                mr={2}
              />
              <Button
                variant="solid"
                size="md"
                ml={2}
                backgroundColor="teal.400"
                color="white"
                colorScheme="teal"
                onClick={(e) => auth.signout()}
              >
                LogOut
              </Button>
            </HStack>
          ) : (
            <>
              <Button
                variant="ghost"
                size="md"
                colorScheme="whiteAlpha"
                mr={2}
                backgroundColor="gray.100"
                color="black"
                leftIcon={<FaGoogle />}
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
                leftIcon={<FaGithub />}
                onClick={(e) => auth.signinWithGithub()}
              >
                Github
              </Button>
            </>
          )}
        </HStack>
      </Stack>
    </Box>
  );
};

export default Header;
