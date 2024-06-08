import React, { useEffect, useState } from "react";
import { UserModel } from "./user-model";
import { useNavigate } from "react-router-dom";

interface Props {}
const Header: React.FC<Props> = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<UserModel | undefined>();

  useEffect(() => {
    const user: UserModel = JSON.parse(localStorage.getItem("user") as string);
    setCurrentUser(user);
  }, []);

  const UserLogOut = (role: string | undefined) => {
    localStorage.clear();

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="bg-red-900 p-5 px-20 z-50 flex flex-wrap justify-between items-center fixed w-full text-white">
      <div className="">Logo</div>
      <div className="">
        <h1>info@bodyweightanalysis.com / 08002839382</h1>
      </div>
      <div className="cursor-pointer hover:bg-red-800">
        <details className="px-3 py-1 min-w-32">
          <summary>
            <span>{currentUser?.firstName}</span>
          </summary>
          {/* <p className="btn btn-secondary px-2 py-2 col-12 mt-3">Profile</p> */}
          <p
            className="p-2 bg-red-700 my-5 cursor-pointer hover:bg-red-800"
            onClick={() => UserLogOut(currentUser?.role)}
          >
            Logout
          </p>
        </details>
      </div>
    </div>
  );
};

export default Header;
