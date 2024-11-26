import React from "react";
import ShowItem from "./ShowItems";

import useFetchData from "../api/fetchShows/useFetchData";
function Movies() {
  const { show } = useFetchData();
  return (
    <div className="bg-primaryBg text-white">
      <h1>Movies</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm ">
        {show
          .filter((movies) => movies.category === "Movie")
          .map((movies) => (
            <div>
              {movies.data !== "undefined" && <ShowItem show={movies} />}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Movies;
