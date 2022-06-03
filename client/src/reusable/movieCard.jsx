import React from "react";
import { NavLink } from "react-router-dom";

export default function MovieCard({
  img,
  title,

  rating,
  numberOfVotes,
}) {
  return (
    <NavLink
      to=""
      className="bg-green-50 border hover:bg-green-900 rounded-md mr-2 p-2 shadow-md hover:text-green-50"
    >
      <div className="w-[150px] h-[150px] bg-gray-800">
        {img && <img src={require(img)} title={title} />}
      </div>
      <div>
        <h4 className="uppercase font-bold">{title}</h4>

        <div className="flex justify-between">
          <div className="font-bold">{rating}</div>
          <div className="italic text-green-600 text-sm">
            {numberOfVotes} votes
          </div>
        </div>
      </div>
    </NavLink>
  );
}
