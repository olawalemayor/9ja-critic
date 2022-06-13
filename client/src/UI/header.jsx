import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Topbar } from "../components";
import Searchbar from "../reusable/searchbar";
import { closeMenuIcon, openMenuIcon } from "../assets/icons";

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="max-w-[1200px] mx-auto xl:my-4 flex flex-col-reverse xl:flex-col">
      <div className="flex flex-col xl:flex-row items-baseline">
        <div className="w-full xl:w-[33.33%]">
          <NavLink to="" className="text-7xl font-bold">
            <span className="text-green-800">9JA</span>CRI
            <span className="text-green-800">TIC</span>
          </NavLink>
        </div>

        <div className="flex flex-col xl:flex-row justify-between w-full xl:w-[66.67%] sticky top-0">
          <div className="xl:w-1/2 flex items-center xl:block justify-between mx-2 xl:mx-0">
            <div className="w-[70%] xl:w-full">
              <Searchbar />
            </div>

            <div onClick={() => setIsToggled(!isToggled)} className="xl:hidden">
              <img
                src={isToggled ? closeMenuIcon : openMenuIcon}
                alt=""
                className="w-[25px] h-[25px]"
              />
            </div>
          </div>

          <div className="relative xl:block xl:w-1/2 mb-2">
            <Navbar isToggled={isToggled} />
          </div>
        </div>
      </div>

      <Topbar />
    </div>
  );
}
