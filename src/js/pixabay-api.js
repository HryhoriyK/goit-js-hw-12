import axios from "axios";


const API_KEY = "50356760-297b4a10951e523a88448dbdf";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error("Помилка при отриманні зображень:", error);
    return [];
  }
}