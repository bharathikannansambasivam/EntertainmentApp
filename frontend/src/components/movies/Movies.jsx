import React, { useState } from "react";
import ShowItem from "../showItems/ShowItems";
import useFetchData from "../../api/fetchShows/useFetchData";
import Search from "../search/Search";
function Movies() {
  const { show } = useFetchData();
  const [searchShow, setSearchShow] = useState("");

  const filteredShows = show.filter(
    (movies) =>
      movies.category === "Movie" &&
      movies.title.toLowerCase().includes(searchShow.toLowerCase())
  );

  return (
    <div className="bg-primaryBg text-white  ">
      <Search onSearchChange={setSearchShow} />
      <h1 className=" text-3xl mb-2">Movies</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm ">
        {filteredShows.length > 0 ? (
          filteredShows.map((movies) => (
            <div key={movies.id}>
              {" "}
              {movies.data !== "undefined" && <ShowItem show={movies} />}
            </div>
          ))
        ) : (
          <p>No movies found .</p>
        )}
      </div>
    </div>
  );
}

export default Movies;
