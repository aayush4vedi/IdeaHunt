import { useRef, useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  PinInput
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Comment from '@/components/Comment';
import { getAllComments, getAllIdeas, getAnIdea } from '@/lib/db-admin';
import { useAuth } from '@/lib/auth';
import { createComemnt } from '@/lib/db';
import IdeaListItem from '@/components/IdeaListItem';
import IdeaListItemPlacebo from '@/components/IdeaListItemPlacebo';

export async function getStaticProps(context) {
  console.log('---------> context.params : ', context.params);

  // const ideaId = context.params.ideaId;

  let ideaId = context.params.ideaId;
  if (ideaId === undefined) {
    ideaId = null;
  }
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
  try {
    let { ideas } = await getAllIdeas();
    console.log('>> ideas#1: ', ideas);

    if (ideas === undefined) {
      ideas = [
        {
          id: '2KbiKu3OrSxIcMrEgNtS',
          createdAt: '2021-06-19T21:29:52.777Z',
          title: 'Eurekea',
          authorId: 'RYIkEgEJFec6adsAf9HrZ6J84BX2',
          description: 'sighhhh'
        },
        {
          id: 'H1lqUQkwko3C5T4nCiJs',
          createdAt: '2021-06-19T21:12:14.221Z',
          authorId: 'RYIkEgEJFec6adsAf9HrZ6J84BX2',
          description: 'the first!!',
          title: 'FirstOne'
        },
        {
          id: 'UbI9SpgjIpLANh3GtqMJ',
          createdAt: '2021-06-19T21:34:42.691Z',
          description: 'Being human is so boarrring',
          title: 'Dehumaniator',
          authorId: 'RYIkEgEJFec6adsAf9HrZ6J84BX2'
        }
      ];
    }
    console.log('>> ideas#1: ', ideas);

    // const { ideas } = await getAllIdeas();
    // const paths = [
    //   {
    //     params: {
    //       ideaId: 'H1lqUQkwko3C5T4nCiJs'
    //     }
    //   } // See the "paths" section below
    // ];

    const paths = ideas.map((idea) => ({
      params: {
        ideaId: idea.id.toString()
      }
    }));

    return {
      paths,
      fallback: false //if false, all other pages will go 404
    };
  } catch (error) {
    console.log('err: ', error);
  }
}

// const Idea = ({ thisIdeaContent, initialComments }) => {
const Idea = (props) => {
  const auth = useAuth();
  const router = useRouter();
  const inputEl = useRef(null);

  const [allComments, setAllComments] = useState(props?.initialComments);

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
        {props?.thisIdeaContent ? (
          <IdeaListItem idea={props.thisIdeaContent} />
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
  );
};

export default Idea;
