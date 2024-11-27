import movieIcon from "/assets/icon-category-movie.svg";
import React, { useCallback, useEffect, useRef, useState } from "react";
import tvIcon from "/assets/icon-category-tv.svg";
import bookmark from "/assets/icon-bookmark-empty.svg";
import bookmarked from "/assets/icon-bookmark-full.svg";
function ShowItems({ show }) {
  const [isBookmark, setIsBookmark] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    const isAlreadyBookmarked = bookmarks.some((item) => show._id === item._id);
    setIsBookmark(isAlreadyBookmarked);
  }, [show]);
  const toggle = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    const isAlreadyBookmarked = bookmarks.some((item) => show._id === item._id);
    let updatedBookmarks;
    if (isAlreadyBookmarked) {
      updatedBookmarks = bookmarks.filter((item) => show._id !== item._id);
      setIsBookmark(false);
    } else {
      updatedBookmarks = [...bookmarks, show];
      setIsBookmark(true);
    }
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <>
      <div>
        <div className="relative ">
          <img
            className="rounded-lg w-full"
            src={
              show.thumbnail?.regular.medium
                ? show.thumbnail.regular.medium
                : show.imageURL
            }
            alt={show.title}
          />

          <div
            onClick={toggle}
            className="absolute h-8 w-8 flex justify-center rounded-full items-center bg-slate-700 top-5 right-6"
          >
            {isBookmark ? (
              <img src={bookmarked} alt="Bookmark" />
            ) : (
              <img src={bookmark} alt="Bookmark" />
            )}{" "}
          </div>
          <div className="my-3">
            <ul className="flex font-extralight gap-2 items-center">
              <li>{show.year}</li>
              <li className="font-bold">•</li>
              <li className="flex gap-2">
                {show.category === "Movie" ? (
                  <img className="h-5 w-5" src={movieIcon} alt="Movie Icon" />
                ) : (
                  <img className="h-5 w-5" src={tvIcon} alt="TV Icon" />
                )}
                {show.category}
              </li>
              <li className="font-bold">•</li>
              <li>{show.rating}</li>
            </ul>
          </div>
          <p className="font-extrabold mb-3">{show.title}</p>
        </div>
      </div>
    </>
  );
}

export default ShowItems;
