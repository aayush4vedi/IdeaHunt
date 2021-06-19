import { auth } from '@/lib/firebase-admin';
import { getUserIdeas, getAllIdeas } from '@/lib/db-admin';

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);

    // const { ideas } = await getUserIdeas(uid);   //TODO: enable for switch
    const { ideas } = await getAllIdeas();

    res.status(200).json({ ideas });
  } catch (error) {
    res.status(500).json({ error });
  }
};
