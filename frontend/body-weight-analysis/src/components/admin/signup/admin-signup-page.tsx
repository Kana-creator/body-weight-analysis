import React from "react";
import SignupForm from "./signup-form";

interface Props {}

const AdminSignupPage: React.FC<Props> = () => {
  return (
    <div className="h-screen bg-red-800 bg-opacity-40  flex flex-wrap justify-center items-center p-10 ">
      <div className="bg-[url('images/5147A5iKE3L.png')] bg-cover bg-center w-1/2 h-full hidden lg:block ">
        <div className="bg-red-800 bg-opacity-40 w-full h-full"></div>
      </div>
      <div className="lg:w-1/2 sm:w-full lg:px-40">
        <SignupForm />
      </div>
    </div>
  );
};

export default AdminSignupPage;
