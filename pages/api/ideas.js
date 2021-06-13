import db from '@/lib/firebase-admin';

export default async (_, res) => {
  const snapshot = await db.collection('ideas').get();
  const ideas = [];
  if (snapshot.empty) {
    console.log('No matching documents.');
    res.status(500).json("Something Went Wrong!");
  } else {
    snapshot.forEach((doc) => {
      ideas.push({ id: doc.id, ...doc.data() });
    });
  }

  res.status(200).json({ ideas });
};
