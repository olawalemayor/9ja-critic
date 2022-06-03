import React from "react";
import { searchIcon } from "../assets/icons";

export default function Searchbar() {
  return (
    <div className="border-b flex items-center">
      <button className="p-2">
        <img src={searchIcon} alt="" className="w-[20px] h-[20px]" />
      </button>
      <input
        type="text"
        placeholder="Search Movie"
        className="outline-none w-full"
      />
    </div>
  );
}
