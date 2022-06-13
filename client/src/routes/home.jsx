import React, { useEffect, useState } from "react";
import { Hero, HighestRated, WhatToWatch } from "../components";
import NewsSidebar from "../components/newsSidebar";
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

      <div className="flex flex-col xl:flex-row my-6">
        <div className="xl:w-[74%]">
          <HighestRated highestRated={highestRated} />
          <WhatToWatch whatToWatch={highestRated} />
        </div>
        <div className="mx-2 xl:mx-0 xl:w-[26%]">
          <NewsSidebar />
        </div>
      </div>
    </div>
  );
}
