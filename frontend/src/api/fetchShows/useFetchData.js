import { useEffect, useState } from "react";
import { getMoviesAPI } from "./getMoviesAPI";

function useFetchData(pageNumber) {
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setaHasMore] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        setError(false);
        console.log("pageNumberpageNumber", pageNumber);
        const data = await getMoviesAPI(pageNumber);
        setShow([...show, ...data]);
        setaHasMore(data.length > 0);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, [pageNumber]);

  return { show, error, loading, hasMore };
}

export default useFetchData;
