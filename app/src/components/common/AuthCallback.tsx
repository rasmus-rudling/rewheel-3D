import React, { Component, useEffect } from "react";
import { useHistory } from "react-router";
import auth from "../../utility/auth";

const AuthCallback = () => {
  const history = useHistory();

  useEffect(() => {
    async () => {
      await auth.handleAuthentication();
      history.push("/");
    };
  }, []);

  return (
    <div className="absolute flex justify-center h-screen w-screen top-0 bottom-0 left-0 right-0 margin-auto bg-white">
      loading...
    </div>
  );
};

export default AuthCallback;
