import { Box } from '@chakra-ui/react';

import IdeaListItem from '@/components/IdeaListItem';
import IdeaListItemPlacebo from '@/components/IdeaListItemPlacebo';

const IdeaList = ({ ideas }) => {
  const ideaList = [];
  ideas?.map((idea) => {
    ideaList.push(<IdeaListItem idea={idea} />);
  });
  return ideaList.length == 0 ? (
    <Box mb={5}>
      <IdeaListItemPlacebo />
      <IdeaListItemPlacebo />
      <IdeaListItemPlacebo />
    </Box>
  ) : (
    <Box mb={5}>{ideaList}</Box>
  );
};

export default IdeaList;
