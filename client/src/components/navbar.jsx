import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import "../extra/menu-slide.css";
import HeaderContext from "../context/headerContext";

export default function Navbar() {
  const { isToggled, onLogin, setOnLogin, onSignUp, setOnSignUp } =
    useContext(HeaderContext);

  const handleLoginClick = () => {
    setOnSignUp(false);
    setOnLogin(!onLogin);
  };

  const handleSignUpClick = () => {
    setOnLogin(false);
    setOnSignUp(!onSignUp);
  };

  return (
    <div
      className={`absolute  w-full xl:relative bg-white ${
        isToggled ? "slide-in" : "slide-out"
      }`}
    >
      <div className="flex flex-col xl:flex-row justify-between w-full">
        <div className="flex flex-col xl:flex-row justify-evenly items-center xl:w-[55%]">
          <li className="list-none mt-6 xl:my-0">
            <NavLink to="trending" className="hover:text-green-600">
              Trending
            </NavLink>
          </li>
          <li className="list-none mt-6 xl:my-0">
            <NavLink to="latest" className="hover:text-green-600">
              Latest
            </NavLink>
          </li>
          <li className="list-none mt-6 xl:my-0">
            <NavLink to="blog" className="hover:text-green-600">
              Blog
            </NavLink>
          </li>
        </div>

        <div className="mx-auto mt-6 mb-3 xl:my-0">
          <button
            className="mx-4 mt-2 mb-6 xl:my-0 hover:text-green-600 block xl:inline"
            onClick={() => handleLoginClick()}
          >
            Login
          </button>

          <button
            className="px-4 py-2 mb-6 xl:my-0 text-white bg-green-800 hover:bg-green-700 rounded-md"
            onClick={() => handleSignUpClick()}
          >
            Sign up
          </button>
        </div>
      </div>
      {onLogin && (
        <div className="absolute right-0 w-full z-30">
          <Login />
        </div>
      )}
      {onSignUp && (
        <div className="absolute right-0 w-full z-40">
          <Register />
        </div>
      )}
    </div>
  );
}
