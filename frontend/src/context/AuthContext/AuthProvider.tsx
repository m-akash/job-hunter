// @ts-nocheck
import React, { useEffect, useState, ReactNode } from 'react';
import AuthContext from './AuthContext';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from 'firebase/auth';
import auth from '../../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';
import { User } from '../../types';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const provider = new GoogleAuthProvider();

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const SignOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('State Captured ', currentUser?.email);
      if (currentUser?.email) {
        const user: Partial<User> = { email: currentUser.email };
        axios
          .post('https://job-hunter-vercel.vercel.app/api/auth/jwt', user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log('Sign in token: ', res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            'https://job-hunter-vercel.vercel.app/api/auth/logout',
            {},
            { withCredentials: true }
          )
          .then((res) => {
            console.log('Sign out token: ', res.data);
            setLoading(false);
          });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    SignInUser,
    SignOutUser,
    SignWithGoogle,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
