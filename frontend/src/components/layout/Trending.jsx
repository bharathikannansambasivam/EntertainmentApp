import ShowItem from "../showItems/ShowItems";

import useFetchData from "../../api/fetchShows/useFetchData";

export default function Trending() {
  const { show } = useFetchData();

  return (
    <div className="bg-primaryBg p-1 text-white">
      <div className=" min-h-[300px] mb-10 p-4">
        {" "}
        <h1 className="text-white text-3xl mb-3">Trending </h1>
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
          {show.map(
            (movies, index) =>
              movies.isTrending && (
                <div
                  key={index}
                  className="flex-shrink-0 md:w-1/3 sm:w-72  w-full "
                >
                  <ShowItem show={movies} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
