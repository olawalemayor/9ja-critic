import React from "react";
import { NavLink } from "react-router-dom";
import MovieCard from "../reusable/movieCard";

export default function HighestRated({ highestRated }) {
  return (
    <>
      <h2 className="font-bold text-2xl text-green-800 mx-2 xl:mx-0">
        HIGHEST RATED
      </h2>

      <div className="flex w-[100vw] xl:w-auto overflow-x-scroll xl:overflow-x-visible my-3 pl-2 xl:pl-0">
        {highestRated.map(({ id, title, category, rating, numberOfVotes }) => (
          <MovieCard
            category={category}
            img=""
            numberOfVotes={numberOfVotes}
            rating={rating}
            title={title}
            key={id}
          />
        ))}
      </div>

      <div className="flex justify-end px-2 mb-3">
        <NavLink to="trending" className="underline">
          See more...
        </NavLink>
      </div>
    </>
  );
}
