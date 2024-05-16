import React from "react";
import LoginForm from "./login-form";

interface Props {}
const LoginPage: React.FC<Props> = () => {
  return (
    <div className="h-screen bg-red-800 bg-opacity-80 flex flex-wrap justify-center items-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
