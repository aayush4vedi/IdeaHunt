import { useRef, useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  HStack
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

import Comment from '@/components/Comment';
import { getAllComments, getAllIdeas, getAnIdea } from '@/lib/db-admin';
import { useAuth } from '@/lib/auth';
import { createComemnt } from '@/lib/db';
import IdeaListItem from '@/components/IdeaListItem';
import IdeaListItemPlacebo from '@/components/IdeaListItemPlacebo';
import DashboardShell from '@/components/DashboardShell';

export async function getStaticProps(context) {
  const ideaId = context.params.ideaId;
  const { comments } = await getAllComments(ideaId);
  const thisIdeaContent = await getAnIdea(ideaId);

  return {
    props: {
      initialComments: comments,
      thisIdeaContent: thisIdeaContent
    },
    //Incremental Static Regeneration : Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10 // In seconds note: dont use 'unstable_validate' here
  };
}

export async function getStaticPaths() {
  const { ideas } = await getAllIdeas();
  const paths = ideas.map((idea) => ({
    params: {
      ideaId: idea.id.toString()
    }
  }));

  return {
    paths,
    fallback: true //if false, all other pages will go 404
  };
}

const Idea = ({ thisIdeaContent, initialComments }) => {
  const auth = useAuth();
  const router = useRouter();
  const inputEl = useRef(null);
  const [allComments, setAllComments] = useState(initialComments);

  const onsubmitfn = (e) => {
    e.preventDefault();

    const newComment = {
      author: auth.user.displayName,
      authorId: auth.user.uid,
      authorPhotoUrl: auth.user.photoURL,
      ideaId: router.query.ideaId,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      upvotes: 0
      // status: 'pending'
    };

    setAllComments([newComment, ...allComments]);
    createComemnt(newComment);
    e.target.reset(); //empty form after submit
  };

  const goBackButton = (
    <HStack alignSelf="flex-start">
      <Button
        variant="ghost"
        size="md"
        colorScheme="whiteAlpha"
        mr={2}
        color="black"
        fontSize="md"
        fontWeight="bold"
        as="a"
        href="/dashboard"
        leftIcon={<FaArrowLeft />}
      >
        Go Back
      </Button>
    </HStack>
  );

  return (
    <DashboardShell navtype={goBackButton}>
      <Box
        display="flex"
        flexDirection="column"
        width="full"
        // maxWidth="700px"
        // margin="0 auto"
      >
        <Box>
          {thisIdeaContent ? (
            <IdeaListItem idea={thisIdeaContent} />
          ) : (
            <IdeaListItemPlacebo />
          )}
        </Box>
        <Box as="Form" onSubmit={onsubmitfn}>
          <FormControl my={8}>
            <FormLabel htmlFor="comment">Comment</FormLabel>
            <Input ref={inputEl} type="comment" placeholder="Leave a comment" />
            <Button mt={4} type="submit" fontWeight="medium">
              Add Comment
            </Button>
          </FormControl>
        </Box>
        <Box>
          {allComments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </Box>
      </Box>
    </DashboardShell>
  );
};

export default Idea;
