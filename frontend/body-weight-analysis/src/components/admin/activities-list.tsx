import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import SideBar from "./side-bar";
import { NavItemModel } from "./nav-item-model";
import Activities from "./activities";
import { UserModel } from "./user-model";

interface Props {}

const ActivitiesList: React.FC<Props> = () => {
  const [links, setLinks] = useState<NavItemModel[]>([]);

  useEffect(() => {
    setLinks([
      { label: "Dashboard", link: "/dashboard", active: false },
      { label: "Users", link: "/users", active: false },
      { label: "Recommendations", link: "/recommendations", active: false },
      { label: "Activities", link: "/activities", active: true },
    ]);
  }, []);

  const [currentUser, setCurrentUser] = useState<UserModel[]>([]);

  useEffect(() => {
    const user: UserModel = JSON.parse(localStorage.getItem("user") as string);
    console.log(user.firstName);
    setCurrentUser([user]);
  }, []);

  return (
    <div className="relative h-screen p-0 m-0">
      <Header />
      <div className="w-full h-full px-32 pt-20">
        <div className="min-h-full flex flex-wrap relative">
          <SideBar links={links} />

          <div className="w-4/5 h-full p-5">
            <Activities />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesList;
