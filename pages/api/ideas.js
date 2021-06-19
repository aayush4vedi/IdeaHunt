import { getAllIdeas } from '@/lib/db-admin';

export default async (_, res) => {
  const { ideas, error } = await getAllIdeas();

  if (error) {
    res.status(500).json({ error });
  }
  res.status(200).json({ ideas });
};
