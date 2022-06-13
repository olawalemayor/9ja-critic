import React, { useEffect, useState } from "react";
import { getIncomingMovies } from "../shared/movieService";
import HeroTile from "../reusable/heroTile";
import axios from "axios";

export default function Hero() {
  const [movies, setMovies] = useState([]);
  // const [featuredVideo, setFeaturedVideo] = useState();

  // const featuredURL = `https://www.youtube.com/playlist?list=${
  //   import.meta.env.VITE_YT_PLAYLIST_ID
  // }`;

  // useEffect(() => {
  //   const getFeatured = async () => {
  //     const result = await axios.get(featuredURL);
  //     console.log(result.data);
  //   };

  //   getFeatured();
  // }, []);

  useEffect(() => {
    const movies = [...getIncomingMovies()];
    setMovies(movies);
  }, [getIncomingMovies]);

  // console.log(featuredVideo);
  return (
    <div className="flex flex-col lg:flex-row hero lg:mx-2 xl:mx-0">
      <div className="lg:w-[60%]">
        <div className="youtube-vid bg-slate-800 w-full lg:w-[600px] xl:w-[700px] h-[300px] sm:h-[500px] lg:h-[500px]">
          {/* <video src={featuredVideo}></video> */}
        </div>
      </div>
      <div className="lg:w-[40%] mx-2 lg:mx-0 mt-5 lg:mt-0">
        <h2 className="font-bold text-2xl text-green-800">COMING SOOON</h2>
        {movies.slice(0, 4).map(({ cast, description, title }, index) => (
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
