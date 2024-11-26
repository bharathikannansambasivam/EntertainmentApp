import { useEffect, useReducer, useState } from "react";

import { searchService } from "./searchService";

function useSearchData(word) {
  // const [state, dispatch] = useReducer(reducerFn, {
  //   searchResults: [],
  //   loading: false,
  //   error: false,
  // });
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!word) return;

    const searchMovies = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await searchService(word);
        setSearchResults(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    searchMovies();
  }, [word]);

  return { searchResults, loading, error };
}

export default useSearchData;
