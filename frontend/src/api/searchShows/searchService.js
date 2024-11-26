import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const searchService = async (word) => {
  try {
    const response = await axios.get(`${BASE_URL}/search?title=${word}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
