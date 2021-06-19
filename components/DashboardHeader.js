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
  Stack
} from '@chakra-ui/react';
import Head from 'next/head';
import { FaEllo, FaSun, FaMoon, FaSearch } from 'react-icons/fa';

const DashboardHeader = () => {
  return (
    <Box backgroundColor="white" position="fixed" width="100%" zIndex="sticky" borderBottom="1px" borderColor="gray.200">
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
                focusBorderColor="blue.200"
                //   autoFocus="true"
                //   placeholder={'Search for ideas (Press "/" to focus)'}
                placeholder={'Search for ideas '}
              />
            </InputGroup>
          </Stack>
          <Box display="flex" alignItems="center">
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
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
