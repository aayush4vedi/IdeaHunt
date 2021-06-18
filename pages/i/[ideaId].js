// NextJS doc: https://nextjs.org/docs/basic-features/data-fetching

import { getAllComments, getAllIdeas } from '@/lib/db-admin';

// This also gets called at build time
export async function getStaticProps(context) {
  const ideaId = context.params.ideaId;
  const {comments} = await getAllComments(ideaId);

  // Pass post data to the page via props
  return {
    props: {
      initialComments: comments
    },
    //Incremental Static Regeneration : Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10 // In seconds
  };
}

// Generate all possible routes at build time
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

const Idea = ({ initialComments }) => {
  console.log(initialComments);
//   return <h1>Heyo</h1>
  return initialComments.map((comment) => <h1>{comment.text}</h1>);
};

export default Idea;
