import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-900 h-fit p-10 w-4/5 absolute right-0 bottom-0 text-center text-white">
      <h1>&copy; Body weight analysis {new Date().getFullYear()}</h1>
    </div>
  );
};

export default Footer;
