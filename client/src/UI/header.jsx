import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Topbar } from "../components";
import Searchbar from "../reusable/searchbar";

export default function Header() {
  return (
    <div className="max-w-[1200px] mx-auto xl:my-4 flex flex-col-reverse xl:flex-col">
      <div className="flex flex-col xl:flex-row items-baseline">
        <div className="xl:w-[33.33%]">
          <NavLink to="" className="text-7xl font-bold">
            <span className="text-green-800">9JA</span>CRI
            <span className="text-green-800">TIC</span>
          </NavLink>
        </div>

        <div className="flex flex-col xl:flex-row justify-between xl:w-[66.67%]">
          <div className="xl:w-1/2">
            <Searchbar />
          </div>

          <div className="xl:w-1/2 mb-2">
            <Navbar />
          </div>
        </div>
      </div>

      <Topbar />
    </div>
  );
}
