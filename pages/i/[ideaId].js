import { useRef, useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Comment from '@/components/Comment';
import { getAllComments, getAllIdeas, getAnIdea } from '@/lib/db-admin';
import { useAuth } from '@/lib/auth';
import { createComemnt } from '@/lib/db';
import IdeaListItem from '@/components/IdeaListItem';

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
    revalidate: 10 // In seconds
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
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxWidth="700px"
      margin="0 auto"
    >
      <Box>
        <IdeaListItem idea={thisIdeaContent}/>
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
  );
};

export default Idea;
