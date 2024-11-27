import React, { useCallback, useEffect, useRef, useState } from "react";
import spinner from "/assets/spinner.gif";

import ShowItems from "../showItems/ShowItems";
import Trending from "../layout/Trending";

import useFetchData from "../../api/fetchShows/useFetchData";
import useSearchData from "../../api/searchShows/useSearch";
import Search from "./Search";
function SearchResults() {
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
  const observer = useRef();
  const lastShow = useCallback(
    (node) => {
      if (fetchLoading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setpageNumber(pageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [fetchLoading, hasMore]
  );

  return (
    <div className="min-h-screen  scrollbar-hide text-white  ">
      <Search onSearchChange={setShowName} />
      <div className="">{showName == "" && <Trending />}</div>{" "}
      {showName ? (
        <div className="h-full bg-primaryBg grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((item, index) => (
              <ShowItems key={index} show={item} index={index} />
            ))
          ) : (
            <p>No results found for "{showName}"</p>
          )}
        </div>
      ) : (
        <div className="h-full bg-primaryBg grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {show.map((item, index) => {
            if (show.length === index + 1) {
              return (
                <div ref={lastShow} key={index}>
                  <ShowItems show={item} index={index} />
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <ShowItems show={item} index={index} />
                </div>
              );
            }
          })}
        </div>
      )}
      <p>
        {(fetchLoading || searchLoading) && (
          <div className="h-screen w-screen bg-red">
            <img
              className="flex justify-center items-center h-10 w-10"
              src={spinner}
              alt=""
            />
          </div>
        )}
      </p>
      <p>{(fetchError || searchError) && "Error.."}</p>
    </div>
  );
}

export default SearchResults;
