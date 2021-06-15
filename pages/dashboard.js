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
    <DashboardShell>
      {data ? <IdeaList ideas={data.ideas} /> : <IdeaList ideas={[]} />}
    </DashboardShell>
  );
};

export default Dashboard;
