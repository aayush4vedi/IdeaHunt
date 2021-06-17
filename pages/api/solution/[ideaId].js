import { getAllSolutions } from '@/lib/db-admin';

export default async (req, res) => {
  const ideaId = req.query.ideaId;

  const { solutions, error } = await getAllSolutions(ideaId);

  if (error) {
    res.status(500).json({ error });
  }

  res.status(200).json({ solutions });
};
