import React from "react";
import { NavLink } from "react-router-dom";

export default function HeroTile({ title, description, cast }) {
  return (
    <NavLink
      to=""
      className="flex my-2 items-center border-b hover:bg-slate-200"
    >
      <div className="xl: w-[20%] m-2">
        <div className="w-[90px] h-[90px] bg-slate-900 mx-auto"></div>
      </div>
      <div className="xl:w-[80%]">
        <h3 className="font-bold capitalize">{title}</h3>
        <p className="max-h-10 overflow-hidden text-sm">{description}</p>
        <div className="text-neutral-500 text-sm">
          <span className="font-bold text-black">Cast: </span> {cast}.
        </div>
      </div>
    </NavLink>
  );
}
