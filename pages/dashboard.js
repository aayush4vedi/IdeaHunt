import Head from 'next/head';
import { useColorMode, Button, Flex, Text, Code, Icon } from '@chakra-ui/react';
import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import SubmitIdeaModal from '@/components/SubmitIdeaModal';
import IdeaList from '@/components/IdeaList';
import fetcher from '@/utils/fetcher';
import DashboardShell from '@/components/DashboardShell';

const Dashboard = () => {
  const auth = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  const { data } = useSWR('/api/ideas', fetcher);
  return (
    // <>
    //   <DashboardHeader />
    //   <Flex
    //     as="main"
    //     direction="column"
    //     align="center"
    //     justify="center"
    //     // h="100vh"
    //     backgroundColor="gray.100"
    //   >
    //     <SubmitIdeaModal />
    //     {data ? <IdeaList ideas={data.ideas} /> : <IdeaList ideas={[]} />}
    //   </Flex>
    // </>
    <DashboardShell>
      {data ? <IdeaList ideas={data.ideas} /> : <IdeaList ideas={[]} />}
    </DashboardShell>
  );
};

export default Dashboard;
