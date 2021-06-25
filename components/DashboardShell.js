import {
  Box,
  Stack,
  Button,
  Heading,
  Text,
  Center,
  Code,
  HStack
} from '@chakra-ui/react';

import Footer from '@/components/Footer';
import DashboardHeader from '@/components/DashboardHeader';
import SideNav from '@/components/SideNav';
import Filters from '@/components/Filters';

const DashboardShell = ({ children, navtype }) => {
  return (
    <Box
      backgroundColor="gray.100"
      width="100%"
      minHeight="100vh"
      // height="100vh"
    >
      <Stack
        spacing={2}
        flexDirection="column"
        // ml={20}
        // mr={20}
        minHeight="80vh"
      >
        <DashboardHeader />
        <Box>
          <SideNav display={['none', null, 'block']}>{navtype}</SideNav>
          <Box pl={[0, null, '18rem']} mt="4rem">
            <Box as="section" minHeight="calc(100vh - 4rem)">
              <Box px={10} py={10}>
                {children}
              </Box>
            </Box>
            {/* <Footer /> */}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default DashboardShell;
