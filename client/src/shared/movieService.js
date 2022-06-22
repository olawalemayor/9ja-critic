import Movies from "../assets/data/movies.json"; //temporary database

//TODO: Install Axios for making http requests

//get all movies
const getMovies = () => {
  const movies = [...Movies];

  return movies;
};

//get single movie
const getMovie = (id) => {
  const movies = [...Movies];
  const movie = movies.find((movie) => movie.id === id);
  if (!movie) return console.log("Movie not found");

  return movie;
};

//get latest movie
const getLatestMovies = () => {
  const movies = [...Movies];

  const result = movies.filter((movie) =>
    movie.tag.includes("latest".toLowerCase())
  );

  if (!result) return console.log("No movies found");

  return result;
};

//get trending movies
const getTrendingMovies = () => {
  const movies = [...Movies];

  const result = movies.filter((movie) =>
    movie.tag.includes("trending".toLowerCase())
  );

  if (!result) return console.log("No movies found");

  return result;
};

//get movies that are coming soon
const getIncomingMovies = () => {
  const movies = [...Movies];

  const result = movies.filter((movie) =>
    movie.tag.includes("incoming".toLowerCase())
  );

  if (!result) return console.log("No movies found");

  return result;
};

//get highest rated movies
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
