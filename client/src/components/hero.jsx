import React, { useEffect, useState } from "react";
import newMovies from "../assets/data/newMovies.json";
import HeroTile from "../reusable/heroTile";

export default function Hero() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = [...newMovies];
    setMovies(movies);
  }, [newMovies]);

  return (
    <div className="flex flex-col xl:flex-row hero">
      <div className="xl:w-[60%] px-2 xl:px-0">
        <div className="youtube-vid bg-slate-800 w-full xl:w-[700px] h-[300px] xl:h-[500px]"></div>
      </div>
      <div className="xl:w-[40%] mx-2 xl:mx-0 mt-5 xl:mt-0">
        <h2 className="font-bold text-2xl text-green-800">COMING SOOON</h2>
        {newMovies.map(({ cast, description, title }, index) => (
          <HeroTile
            key={index}
            cast={cast}
            description={description}
            title={title}
          />
        ))}
      </div>
    </div>
  );
}
