import { Box, Flex } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import SubmitIdeaModal from '@/components/SubmitIdeaModal';
import Filters from '@/components/Filters';

const SideNav = (props) => {
  return (
    <Box
      position="fixed"
      left="0"
      width="100%"
      height="100%"
      top="4rem"
      right="0"
      backgroundColor="white"
      {...props}
    >
      <Box top={2} position="relative" overflowY="auto" borderRightWidth="1px">
        <Box>
          <Flex
            justify="space-between"
            direction="column"
            height="calc(100vh - 5rem)"
            fontSize="sm"
            p="6"
          >
            <Filters />
            <SubmitIdeaModal />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default SideNav;
