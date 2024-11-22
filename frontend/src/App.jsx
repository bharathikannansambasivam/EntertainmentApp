import React from "react";
import Trending from "./components/Trending";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Bookmarks from "./components/Bookmarks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import ShowItem from "./components/ShowItem";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primaryBg   text-white ">
        <Nav />
        <div className="ml-[80px]  p-5">
          <Routes>
            <Route path="/" element={<SearchBar />}></Route>

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
