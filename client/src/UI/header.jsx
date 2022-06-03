import React from "react";
import Navbar from "../components/navbar";
import Topbar from "../components/topbar";
import Searchbar from "../reusable/searchbar";

export default function Header() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col xl:flex-row items-center">
        <a href="" className="text-7xl font-bold">
          <span className="text-green-800">9JA</span>CRI
          <span className="text-green-800">TIC</span>
        </a>

        <div className="flex flex-col xl:flex-row justify-between">
          <Searchbar />

          <Navbar />
        </div>
      </div>

      <Topbar />
    </div>
  );
}
