import { Box } from '@chakra-ui/react';
import IdeaListItem from '@/components/IdeaListItem';
import IdeaListItemPlacebo from './IdeaListItemPlacebo';

const IdeaList = ({ ideas }) => {
  const ideaList = [];
  ideas.map((idea) => {
    ideaList.push(<IdeaListItem idea={idea} />);
  });
  return ideaList.length == 0 ? (
    <>
      {' '}
      <IdeaListItemPlacebo />
      <IdeaListItemPlacebo />
      <IdeaListItemPlacebo />{' '}
    </>
  ) : (
    <Box>{ideaList}</Box>
  );
};

export default IdeaList;
