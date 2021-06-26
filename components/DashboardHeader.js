import {
  Box,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Link,
  Button,
  IconButton,
  InputRightElement,
  Avatar,
  Stack,
  HStack
} from '@chakra-ui/react';
import Head from 'next/head';
import { useRef } from 'react';
import {
  FaEllo,
  FaSun,
  FaMoon,
  FaGithub,
  FaGoogle,
  FaSearch
} from 'react-icons/fa';

const DashboardHeader = (props) => {
  const { onSearch, search, auth, showSearchBar, ...rest } = props;
  const inputRef = useRef();
  return (
    <Box
      backgroundColor="white"
      position="fixed"
      width="100%"
      zIndex="sticky"
      borderBottom="1px"
      borderColor="gray.200"
      {...rest}
    >
      <Box mt={2} mb={2} mr={20} ml={20}>
        <Head>
          <title>IdeaHunt | Dashboard</title>
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
          {showSearchBar === true ? (
            <Stack spacing={4} width="60%" boxShadow="md" p="1" rounded="md">
              <InputGroup size="md" borderColor="white">
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <IconButton
                      icon={<FaSearch />}
                      color="gray.400"
                      size="sm"
                      variant="ghost"
                    />
                  }
                />
                <Input
                  pr="4.5rem"
                  type="text"
                  fontWeight="bold"
                  focusBorderColor="blue.200"
                  type="text"
                  onChange={onSearch}
                  value={search}
                  ref={inputRef}
                  placeholder={'Search for ideas '}
                />
              </InputGroup>
            </Stack>
          ) : (
            <></>
          )}
          {/* <Box display="flex" alignItems="center">
            <IconButton
              aria-label="icon"
              icon={<FaSun />}
              size="md"
              isRound
              variant="ghost"
              mr={5}
              // onClick={toggleColorMode}
            />
            <Avatar size="sm" />
          </Box> */}
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
    </Box>
  );
};

export default DashboardHeader;
