import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-col xl:flex-row justify-between w-full">
      <div className="flex flex-col xl:flex-row justify-evenly xl:items-center xl:w-[55%]">
        <li className="list-none">
          <NavLink to="trending" className="hover:text-green-600">
            Trending
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink to="latest" className="hover:text-green-600">
            Latest
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink to="blog" className="hover:text-green-600">
            Blog
          </NavLink>
        </li>
      </div>

      <div className="">
        <button className="mx-4 my-2 hover:text-green-600">Login</button>

        <button className="px-4 py-2 text-white bg-green-800 hover:bg-green-700 rounded-md">
          Sign up
        </button>
      </div>
    </div>
  );
}
