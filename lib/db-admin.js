import { compareDesc, parseISO } from 'date-fns';

import firebase from './firebase-admin';

export async function getAllComments(ideaId) {
  try {
    const snapshot = await firebase
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
      const snapshot = await firebase
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

export async function getAllIdeas() {
  try {
    const snapshot = await firebase.collection('ideas').get();
    const ideas = [];

    snapshot.forEach((doc) => {
        ideas.push({ id: doc.id, ...doc.data() });
    });

    return { ideas };
  } catch (error) {
    return { error };
  }
}
