import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://backend-omega-beryl.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { SignOutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught in interceptors", error);
        if (error.status === 401 || error.status === 403) {
          console.log("need to logout the user");
          SignOutUser()
            .then(() => {
              console.log("Logged out user");
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
        return Promise.reject(error);
      }
    );
  }, [SignOutUser, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
