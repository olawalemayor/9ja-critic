import React, { useEffect, useState } from "react";
import { Hero, HighestRated, WhatToWatch } from "../components";
import { getHighestRated } from "../shared/movieService";

export default function Home() {
  const [highestRated, setHighestRated] = useState([]);

  useEffect(() => {
    const movies = [...getHighestRated()];

    setHighestRated(movies);
  }, [getHighestRated]);

  return (
    <div className="max-w-[1200px] mx-auto">
      <Hero />

      <div className="flex my-6">
        <div className="xl:w-[70%]">
          <HighestRated highestRated={highestRated} />
          <WhatToWatch whatToWatch={highestRated} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
