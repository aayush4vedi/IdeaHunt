import { getAllComments } from '@/lib/db-admin';

export default async (req, res) => {
  const ideaId = req.query.ideaId;

  const { comments, error } = await getAllComments(ideaId);

  if (error) {
    res.status(500).json({ error });
  }

  res.status(200).json({ comments });
};
