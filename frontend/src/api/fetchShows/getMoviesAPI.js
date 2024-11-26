import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getMoviesAPI = async (pageNumber) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getAllMovies?page=${pageNumber}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
