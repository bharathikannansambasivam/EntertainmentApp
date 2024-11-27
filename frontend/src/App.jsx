import React, { useEffect } from "react";
import Nav from "./components/layout/Nav";
import SearchResults from "./components/search/SearchResults";
import Bookmarks from "./components/bookmarks/Bookmarks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/movies/Movies";
import TvShows from "./components/tvShows/TvShows";

function App() {
  useEffect(() => {}, <Nav />);
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primaryBg   text-white ">
        <Nav />
        <div className="ml-[80px]  p-5">
          <Routes>
            <Route path="/" element={<SearchResults />}></Route>

            <Route path="/bookmark" element={<Bookmarks />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/tvshows" element={<TvShows />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
