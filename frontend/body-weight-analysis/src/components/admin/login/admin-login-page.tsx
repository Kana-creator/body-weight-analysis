import React from "react";
import LoginForm from "./login-form";

interface Props {}
const AdminLoginPage: React.FC<Props> = () => {
  return (
    <div className="h-screen bg-red-800 bg-opacity-40  flex flex-wrap justify-center items-center p-10 ">
      <div className="bg-[url('images/FNC-4.webp')] bg-cover bg-center w-1/2 h-full hidden lg:block ">
        <div className="bg-red-800 bg-opacity-40 w-full h-full"></div>
      </div>
      <div className="lg:w-1/2 sm:w-full lg:px-40">
        <LoginForm />
      </div>
    </div>
  );
};

export default AdminLoginPage;
