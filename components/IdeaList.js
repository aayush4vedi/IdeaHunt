import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { compareDesc, parseISO } from 'date-fns';

import IdeaListItem from '@/components/IdeaListItem';
import IdeaListItemPlacebo from '@/components/IdeaListItemPlacebo';
import { useSearch } from '@/lib/search';
import { useAuth } from '@/lib/auth';

const IdeaList = ({ ideas }) => {
  const { user } = useAuth();
  const {
    search,
    sortBy,
    showMyPosts,
    levels,
    isSolved,
    filterTags,
    onSearch
  } = useSearch();

  const matchesSearch = (idea) =>
    idea.description.toLowerCase().includes(search.toLowerCase()) ||
    idea.description.toLowerCase().includes(search.toLowerCase());

  const showOnlyMyPosts = (idea) => idea.authorId == user.uid;
  const matchesDifficultyLevels = (idea) => levels.includes(idea.level);
  const matchesIsSolvedFilter = (idea) => isSolved.includes(idea.isSolved);

  const matchesFilterTags = (idea) => {
    const intersection = filterTags.filter((item1) =>
      idea.tags.some((item2) => item1.value === item2.value)
    );
    return intersection.length;
  };

  let toFilterOrNotToFilter = () => {
    let res = false;
    filterTags.forEach((x) => {
      if (x.value === 'all') {
        res = true; //it has 'all' hidden tag-> dont filter
      }
    });
    return res;
  };

  const allIdeas = ideas.length ? ideas : [];
  let filteredIdeas = allIdeas;
  //   .filter(matchesSearch)
  // .filter(matchesAlcoholType);

  filteredIdeas = filteredIdeas
    .filter(matchesSearch)
    .filter(matchesIsSolvedFilter)
    .filter(matchesIsSolvedFilter);

  if (toFilterOrNotToFilter() === false) {
    filteredIdeas = filteredIdeas.filter(matchesFilterTags);
  } else {
  }

  if (showMyPosts) {
    filteredIdeas = filteredIdeas.filter(showOnlyMyPosts);
  }

  if (sortBy === 'Latest') {
    filteredIdeas = filteredIdeas.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );
  } else {
    filteredIdeas = filteredIdeas.sort((a, b) =>
      compareDesc(a.upvotes, b.upvotes)
    );
  }

  return (
    <Box mb={5}>
      {filteredIdeas.length ? (
        filteredIdeas
          .filter((idea) => idea.title)
          .map((idea) => (
            <NextLink href="/i/[ideaId]" as={`/i/${idea.id}`} passHref>
              <Link cursor={'pointer'} style={{ textDecoration: 'none' }}>
                <IdeaListItem key={idea.id} idea={idea} noOfLines={2} />
              </Link>
            </NextLink>
          ))
      ) : (
        <>
          {/* <IdeaListItemPlacebo />
          <IdeaListItemPlacebo />
          <IdeaListItemPlacebo />
          <IdeaListItemPlacebo />
          <IdeaListItemPlacebo /> */}
        </>
      )}
    </Box>
  );
};

export default IdeaList;
