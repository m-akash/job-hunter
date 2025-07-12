// @ts-nocheck
import axios, { AxiosInstance } from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://job-hunter-vercel.vercel.app',
  withCredentials: true,
});

const useAxiosSecure = (): AxiosInstance => {
  const auth = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log('error caught in interceptors', error);
        if (error.status === 401 || error.status === 403) {
          console.log('need to logout the user');
          if (auth?.SignOutUser) {
            auth.SignOutUser()
              .then(() => {
                console.log('Logged out user');
                navigate('/login');
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
        return Promise.reject(error);
      }
    );
  }, [auth, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
