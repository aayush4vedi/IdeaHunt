import Head from 'next/head';
import { useColorMode, Button, Flex, Text, Code, Icon } from '@chakra-ui/react';

import { useAuth } from '../lib/auth';
import SubmitIdeaModal from '../components/SubmitIdeaModal';
import IdeaList from '@/components/IdeaList';

const Dashboard = () => {
  const auth = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  const fakeIdeas = [
    {
      id: 'Dz16Vr1E5Ba0gwJHBpwh',
      authorId: 'RQzIf39Qt4OrroZ3dAktntvp9Za2',
      createdAt: '2021-06-13T15:58:13.422Z',
      title: 'fsfs',
      description: 'fsafdsf'
    },
    {
      id: 'NuvBI08jnP7h8sUxiwCZ',
      description: 'yayyyyyyyyyy',
      authorId: 'RQzIf39Qt4OrroZ3dAktntvp9Za2',
      createdAt: '2021-06-13T16:09:19.649Z',
      title: 'LoadingButton'
    },
    {
      id: 'O3sDa69neUQovNSxmVBV',
      title: 'fdasfwerewr',
      createdAt: '2021-06-13T16:02:57.095Z',
      description: 'fafagf',
      authorId: 'RQzIf39Qt4OrroZ3dAktntvp9Za2'
    },
    {
      id: 'eFxwU4B4GXbgdkvWhsfS',
      title: 'fsfsfsf',
      createdAt: '2021-06-13T15:58:28.803Z',
      authorId: 'RQzIf39Qt4OrroZ3dAktntvp9Za2',
      description: 'fsafdsf'
    },
    {
      id: 'wwbW3mnDDFhJzEKmiMgU',
      title: 'TabTwist',
      authorId: 'RQzIf39Qt4OrroZ3dAktntvp9Za2',
      description: 'Twist your tabs like never belore',
      createdAt: '2021-06-13T15:55:41.147Z'
    }
  ];

  return (
    <>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        // h="100vh"
        backgroundColor="gray.100"
      >
        <SubmitIdeaModal />

        <IdeaList ideas={fakeIdeas} />
      </Flex>
    </>
  );
};

export default Dashboard;
