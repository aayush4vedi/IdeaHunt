import firebase from './firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true }); //merge ensures uid is unique
}

export function updateUser(uid, data) {
  return firestore.collection('users').doc(uid).update(data);
}