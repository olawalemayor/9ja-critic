import Movies from "../assets/data/movies.json";

const getMovies = () => {
  const movies = [...Movies];

  return movies;
};

const getMovie = (id) => {
  const movies = [...Movies];
  const movie = movies.find((movie) => movie.id === id);
  if (!movie) return console.log("Movie not found");

  return movie;
};

const getLatestMovies = () => {
  const movies = [...Movies];

  const result = movies.filter((movie) =>
    movie.tag.includes("latest".toLowerCase())
  );

  if (!result) return console.log("No movies found");

  return result;
};

const getTrendingMovies = () => {
  const movies = [...Movies];

  const result = movies.filter((movie) =>
    movie.tag.includes("trending".toLowerCase())
  );

  if (!result) return console.log("No movies found");

  return result;
};

const getIncomingMovies = () => {
  const movies = [...Movies];

  const result = movies.filter((movie) =>
    movie.tag.includes("incoming".toLowerCase())
  );

  if (!result) return console.log("No movies found");

  return result;
};

const getHighestRated = () => {
  const movies = [...Movies];

  const result = movies.sort((a, b) => a.rating - b.rating).slice(0, 5);

  if (!result) return console.log("No movies found");

  return result;
};

export {
  getIncomingMovies,
  getLatestMovies,
  getMovie,
  getMovies,
  getTrendingMovies,
  getHighestRated,
};
