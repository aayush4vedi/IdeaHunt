import firebase from './firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true }); //merge ensures uid is unique
}

export function createIdea(data) {
  const idea = firestore.collection('ideas').doc();
  idea.set(data);
  return idea;
}

export function updateUser(uid, data) {
  return firestore.collection('users').doc(uid).update(data);
}

export function createComemnt(data) {
  return firestore.collection('comments').add(data);
}

export function createSolution(data) {
  return firestore.collection('solutions').add(data);
}
