import axios from "axios";

const API_KEY = "a9xVQSY4IxrO0AQm_9CzqvpP-rPa6qNBiJxNsxrzuPM";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);
  console.log(data);
  return data;
};
