import React from "react";
import searchIcon from "/assets/icon-search.svg";

function Search({ onSearchChange }) {
  return (
    <div className="flex  gap-2 text-xl relative   items-center text-white  ">
      <img className="absolute" src={searchIcon} alt="" />
      <input
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
        type="search"
        className="bg-primaryBg p-4 w-full  pl-12"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}

export default Search;
