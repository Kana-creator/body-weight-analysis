import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import SideBar from "./side-bar";
import { NavItemModel } from "./nav-item-model";
// import { UserModel } from "./user-model";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  // const [currentUser, setCurrentUser] = useState<UserModel[]>([]);
  const [links, setLinks] = useState<NavItemModel[]>([]);
  // useEffect(() => {
  //   const user: UserModel = JSON.parse(localStorage.getItem("user") as string);
  //   console.log(user.firstName);
  //   setCurrentUser([user]);
  // }, []);

  useEffect(() => {
    setLinks([
      { label: "Dashboard", link: "/dashboard", active: true },
      { label: "Users", link: "/users", active: false },
      { label: "Recommendations", link: "/recommendations", active: false },
      { label: "Activities", link: "/activities", active: false },
    ]);
  }, []);

  return (
    <div className="relative h-screen p-0 m-0">
      <Header />
      <div className="w-full h-full px-32 pt-20">
        <div className="bg-red-900 h-full flex flex-wrap relative">
          <SideBar links={links} />

          <div className="bg-blue-900 w-4/5 h-full">
            <h1>Dashboard</h1>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
