import ShowItem from "./ShowItem";

import useFetchData from "../api/useFetchData";

export default function Trending() {
  const { show } = useFetchData();

  return (
    <div className="bg-primaryBg">
      <div className="bg-primaryBg min-h-[400px] mb-10 p-4">
        {" "}
        {/* Added padding */}
        <h1 className="text-3xl font-bold mb-6">Trending...</h1>
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
          {show.map(
            (movies, index) =>
              movies.isTrending && (
                <div key={index} className="flex-shrink-0 w-1/3">
                  <ShowItem show={movies} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
