import { compareDesc, parseISO } from 'date-fns';

import { db } from './firebase-admin';

export async function getAllComments(ideaId) {
  try {
    const snapshot = await db
      .collection('comments')
      .where('ideaId', '==', ideaId)
      .get();

    const comments = [];

    snapshot.forEach((doc) => {
      comments.push({ id: doc.id, ...doc.data() });
    });

    comments.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { comments };
  } catch (error) {
    return { error };
  }
}

export async function getAllSolutions(ideaId) {
  try {
    const snapshot = await db
      .collection('solutions')
      .where('ideaId', '==', ideaId)
      .get();

    const solutions = [];

    snapshot.forEach((doc) => {
      solutions.push({ id: doc.id, ...doc.data() });
    });

    solutions.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { solutions };
  } catch (error) {
    return { error };
  }
}

export async function getAnIdea(ideaId) {
  try {
    const snapshot = await db.collection('ideas').doc(ideaId).get();

    return snapshot.data();
  } catch (error) {
    return { error };
  }
}

export async function getAllIdeas() {
  try {
    const snapshot = await db.collection('ideas').get();
    const ideas = [];

    snapshot.forEach((doc) => {
      ideas.push({ id: doc.id, ...doc.data() });
    });

    return { ideas };
  } catch (error) {
    return { error };
  }
}

export async function getUserIdeas(uid) {
  try {
    const snapshot = await db
      .collection('ideas')
      .where('authorId', '==', uid)
      .get();
    const ideas = [];

    snapshot.forEach((doc) => {
      ideas.push({ id: doc.id, ...doc.data() });
    });

    return { ideas };
  } catch (error) {
    return { error };
  }
}
