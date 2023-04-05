import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Navigate to="/" />
    </>
  );
};

export default Logout;
