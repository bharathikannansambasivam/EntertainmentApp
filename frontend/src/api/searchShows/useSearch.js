import { useEffect, useReducer, useState } from "react";

import { searchService } from "./searchService";
const reducerFn = (state, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {
        ...state,
        error: true,
        loading: false,
      };
    case "SET_LOADING":
      return { ...state, loading: true, error: false };

    case "SET_RESULTS":
      return {
        ...state,
        searchResults: action.payload,

        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
function useSearchData(word) {
  const [state, dispatch] = useReducer(reducerFn, {
    searchResults: [],
    loading: false,
    error: false,
  });

  useEffect(() => {
    if (!word) return;

    const searchMovies = async () => {
      dispatch({ type: "SET_LOADING" });

      try {
        const data = await searchService(word);
        dispatch({ type: "SET_RESULTS", payload: data });
      } catch (error) {
        dispatch({ type: "SET_ERROR" });
      }
    };

    searchMovies();
  }, [word]);

  return state;
}

export default useSearchData;
