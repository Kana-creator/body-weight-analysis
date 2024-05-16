import React from "react";
import SignupForm from "./signup-form";

interface Props {}

const SignupPage: React.FC<Props> = () => {
  return (
    <div className="h-screen bg-red-800 bg-opacity-80 flex flex-wrap justify-center items-center">
      <SignupForm />
    </div>
  );
};

export default SignupPage;
