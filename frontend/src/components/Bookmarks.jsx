import React, { useEffect } from "react";
import ShowItems from "./ShowItems";
function Bookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  console.log(bookmarks);

  return (
    <>
      <h1 className="text-5xl mb-6 text-white">BookMarks</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm">
        {bookmarks.map((movie, index) => (
          <ShowItems show={movie} key={index} />
        ))}
      </div>
    </>
  );
}

export default Bookmarks;
