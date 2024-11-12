import { useEffect, useState } from "react";
import axios from "axios";

function useSearchData(word) {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!word) return;

    const searchMovies = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await axios.get(
          `http://localhost:3000/search?title=${word}`
        );

        setSearchResults(response.data);
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
