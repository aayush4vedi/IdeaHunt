import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import IdeaList from '@/components/IdeaList';
import fetcher from '@/utils/fetcher';
import DashboardShell from '@/components/DashboardShell';

const Dashboard = () => {
  const {user} = useAuth();

  const { data } = useSWR(user ? ['/api/ideas', user.za] : null, fetcher);
  return (
    <DashboardShell>
      {data ? <IdeaList ideas={data.ideas} /> : <IdeaList ideas={[]} />}
    </DashboardShell>
  );
};

export default Dashboard;
