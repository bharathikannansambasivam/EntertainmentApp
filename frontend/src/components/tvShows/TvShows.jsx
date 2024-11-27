import React, { useState } from "react";

import ShowItem from "../showItems/ShowItems";
import useFetchData from "../../api/fetchShows/useFetchData";
import Search from "../search/Search";

function TvShows() {
  const { show } = useFetchData();
  const [searchShow, setSearchShow] = useState("");

  const filteredTvShows = show.filter(
    (TvShows) =>
      TvShows.category === "TV Series" &&
      TvShows.title.toLowerCase().includes(searchShow.toLowerCase())
  );
  return (
    <div className="bg-primaryBg ">
      <Search onSearchChange={setSearchShow} />

      <h1 className="text-3xl font-bold mb-6">TvShows</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm text-white">
        {filteredTvShows.length > 0 ? (
          filteredTvShows.map((movie, index) => (
            <ShowItem key={index} show={movie} />
          ))
        ) : (
          <p>No TV Shows found</p>
        )}
      </div>
    </div>
  );
}

export default TvShows;
