import { Box, Flex } from '@chakra-ui/react';
import SubmitIdeaModal from '@/components/SubmitIdeaModal';


const SideNav = ({props, children}) => {
  return (
    <Box
      position="fixed"
      left="0"
      width="18%"
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
            {children}
            <SubmitIdeaModal />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default SideNav;
