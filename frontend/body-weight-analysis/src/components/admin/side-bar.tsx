import React from "react";
import { NavItemModel } from "./nav-item-model";
import { NavLink } from "react-router-dom";

interface Props {
  links: NavItemModel[];
}
const SideBar: React.FC<Props> = ({ links }) => {
  return (
    <div className="w-1/5 h-full bg-white  px-5">
      <div className="w-full flex flex-wrap items-center">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.link}
            className={`w-full my-1 h-fit font-bold ${
              link.active ? "bg-red-200 text-red-950" : "bg-red-900 text-white"
            } p-2 `}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
