import React from "react";
import PasswordResetForm from "./password-reset-form";

const PasswordResetPage = () => {
  return (
    <div className="h-screen bg-red-800 bg-opacity-40  flex flex-wrap justify-center items-center p-10 ">
      <div className="bg-[url('images/health-fitness-and-nutrition-for-senior-citizens-removebg-preview.png')] bg-cover bg-center w-1/2 h-full hidden lg:block">
        <div className="bg-red-800 bg-opacity-40 w-full h-full"></div>
      </div>
      <div className="lg:w-1/2 sm:w-full lg:px-36">
        <PasswordResetForm />
      </div>
    </div>
  );
};

export default PasswordResetPage;
