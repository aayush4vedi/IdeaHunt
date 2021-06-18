import { getAllIdeas } from '@/lib/db-admin';
import db from '@/lib/firebase-admin';

export default async (_, res) => {
  const ideas = await getAllIdeas();

  res.status(200).json({ ideas });
};
