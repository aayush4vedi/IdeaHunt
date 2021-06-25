import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import IdeaListItem from '@/components/IdeaListItem';
import IdeaListItemPlacebo from '@/components/IdeaListItemPlacebo';

const IdeaList = ({ ideas }) => {
  const ideaList = [];
  ideas?.map((idea) => {
    ideaList.push(
      <NextLink href="/i/[ideaId]" as={`/i/${idea.id}`} passHref>
        <Link cursor={'pointer'} style={{ textDecoration: 'none' }}>
          <IdeaListItem idea={idea} noOfLines={2} />
        </Link>
      </NextLink>
    );
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
