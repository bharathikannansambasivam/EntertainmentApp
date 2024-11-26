import React from "react";

import ShowItem from "./ShowItems";
import useFetchData from "../api/fetchShows/useFetchData";

function TvShows() {
  const { show } = useFetchData();

  return (
    <div className="bg-primaryBg ">
      <h1 className="text-3xl font-bold mb-6">TvShows</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm text-white">
        {show
          .filter((movie) => movie.category === "TV Series")
          .map((movie, index) => (
            <ShowItem key={index} show={movie} />
          ))}
      </div>
    </div>
  );
}

export default TvShows;
