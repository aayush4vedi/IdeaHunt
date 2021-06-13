import Head from 'next/head';
import { useColorMode, Button, Flex, Text, Code, Icon } from '@chakra-ui/react';

import { useAuth } from '../lib/auth';
import SubmitIdeaModal from '../components/SubmitIdeaModal';

const Dashboard = () => {
  const auth = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
      >
        <SubmitIdeaModal/>
      </Flex>
    </>
  );
};

export default Dashboard;
