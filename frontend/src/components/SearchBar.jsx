import React, { useCallback, useEffect, useRef, useState } from "react";
import searchIcon from "/assets/icon-search.svg";
import ShowItem from "./ShowItem";
import Trending from "./Trending";

import useFetchData from "../api/useFetchData";
import useSearchData from "../api/useSearch";

function SearchBar() {
  const [showName, setShowName] = useState("");
  const [pageNumber, setpageNumber] = useState(1);

  const {
    searchResults,
    error: searchError,
    loading: searchLoading,
  } = useSearchData(showName);
  const {
    show,
    error: fetchError,
    loading: fetchLoading,
    hasMore,
  } = useFetchData(pageNumber);
  useSearchData(showName);
  const observer = useRef();
  const lastShow = useCallback(
    (node) => {
      if (fetchLoading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("Visiblee");
          setpageNumber(pageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);

      console.log(node);
    },
    [fetchLoading, hasMore]
  );

  return (
    <div className="min-h-screen  scrollbar-hide   ">
      <div className="flex  gap-2 text-xl relative   items-center  ">
        <img className="absolute" src={searchIcon} alt="" />
        <input
          onChange={(e) => {
            setShowName(e.target.value);
          }}
          type="search"
          className="bg-primaryBg p-4 w-full  pl-12"
          placeholder="Search for movies or TV series"
        />
      </div>
      <div className="">{showName == "" && <Trending />}</div>{" "}
      {showName ? (
        <div className="h-full bg-primaryBg grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {searchResults.map((item, index) => (
            <ShowItem key={index} show={item} index={index} />
          ))}
        </div>
      ) : (
        <div className="h-full bg-primaryBg grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {show.map((item, index) => {
            if (show.length === index + 1) {
              return (
                <div ref={lastShow} key={index}>
                  <ShowItem show={item} index={index} />
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <ShowItem show={item} index={index} />
                </div>
              );
            }
          })}
        </div>
      )}
      <p>
        {(fetchLoading || searchLoading) && (
          <div className="bg-red-600 h-32 w-32">loading..</div>
        )}
      </p>
      <p>{(fetchError || searchError) && "Error.."}</p>
    </div>
  );
}

export default SearchBar;
