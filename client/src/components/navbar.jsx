import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="flex flex-col xl:flex-row justify-evenly xl:items-center">
        <li className="list-none">
          <a href="">Trending</a>
        </li>
        <li className="list-none">
          <a href="">Latest</a>
        </li>
        <li className="list-none">
          <a href="">Blog</a>
        </li>
      </div>

      <div>
        <button className="px-4 py-2">Login</button>

        <button className="px-4 py-2 text-white bg-green-800 hover:bg-green-600 rounded-md">
          Sign up
        </button>
      </div>
    </div>
  );
}
