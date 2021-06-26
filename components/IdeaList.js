import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { compareDesc, parseISO } from 'date-fns';

import IdeaListItem from '@/components/IdeaListItem';
import IdeaListItemPlacebo from '@/components/IdeaListItemPlacebo';

const IdeaList = ({ ideas, sortby }) => {
  const ideaList = [];

  let sortedIdeas;

  if (ideas) {
    if (sortby === 'Latest') {
      sortedIdeas = ideas.sort((a, b) =>
        compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
      );
    } else {
      sortedIdeas = ideas.sort((a, b) => compareDesc(a.upvotes, b.upvotes));
    }
  }

  sortedIdeas?.map((idea) => {
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
      <IdeaListItemPlacebo />
      <IdeaListItemPlacebo />
    </Box>
  ) : (
    <Box mb={5}>{ideaList}</Box>
  );
};

export default IdeaList;
