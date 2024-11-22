import { useEffect, useState } from "react";
import axios from "axios";

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
        const response = await axios.get(
          `http://localhost:3000/getAllMovies?page=${pageNumber}`
        );

        setShow([...show, ...response.data]);
        setaHasMore(response.data.length > 0);
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
