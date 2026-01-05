import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AuthLoading from "../Loading/AuthLoading";
import API from "../../Api/api";
import API_ROUTES from "../../Api/ROUTE";
import useStore from "../../zustand/zustand";

const AuthLayer = () => {
  const [isPermitted, setIsPermitted] = useState(false);
  const { setUser } = useStore();
  useEffect(() => {
    const authenticateAPI = async () => {
      try {
        const response = await API.get(API_ROUTES.AUTH.GET_USER);
        console.log(response);
        if (response.status == 200) {
          setIsPermitted(true);
          setUser(response.data.user);
        }
      } catch (err) {
        console.error(err);
      }
    };
    authenticateAPI();
  }, []);
  return <>{isPermitted ? <Outlet /> : <AuthLoading />}</>;
};

export default AuthLayer;
