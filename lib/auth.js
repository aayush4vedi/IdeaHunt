import React, { useState, useEffect, useContext, createContext } from 'react';
import cookie from 'js-cookie';
import Router from 'next/router';

import firebase from './firebase';
import { createUser } from './db';
const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);

      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken); //dont save token on db
      setUser(user);

      cookie.set('ideahunt-auth', true, {
        expires: 1 //day
      });

      return user;
    } else {
      Router.push('/');
      setUser(false);
      cookie.remove('ideahunt-auth');
      return false;
    }
  };

  const signinWithGithub = () => {
    Router.push('/dashboard');
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => handleUser(response.user));
  };

  const signinWithGoogle = () => {
    Router.push('/dashboard');
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => handleUser(response.user));
  };

  // const signinWithEmailAndPassword = (email, password) => {
  //   return firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((response) => {
  //       console.log('signinWithEmailAndPassword!');
  //       handleUser(response.user);
  //     });
  // };

  // const signupWithEmailAndPassword = (email, password) => {
  //   return firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((response) => {
  //       console.log('signupWithEmailAndPassword');
  //       handleUser(response.user);
  //     });
  // };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        Router.push('/');
        setUser(false);
        cookie.remove('ideahunt-auth');
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signinWithGoogle,
    // signinWithEmailAndPassword,
    // signupWithEmailAndPassword,
    signout
  };
}

const formatUser = (user) => {
  // const { token, claims } = await user.getIdTokenResult();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    // stripeRole: claims.stripeRole || "free",
    token: user.za
  };
};
