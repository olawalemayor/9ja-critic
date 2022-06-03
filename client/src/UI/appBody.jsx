import React from "react";
import { Route, Routes } from "react-router-dom";
import { Blog, Home, LatestMovies, TrendingMovies } from "../routes";

export default function AppBody() {
  return (
    <div>
      <Routes>
        <Route path="blog" element={<Blog />} />
        <Route path="latest" element={<LatestMovies />} />
        <Route path="trending" element={<TrendingMovies />} />
        <Route path="" element={<Home />} />
      </Routes>
    </div>
  );
}
