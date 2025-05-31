import axios from "axios";


const API_KEY = "50356760-297b4a10951e523a88448dbdf";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Помилка при отриманні зображень:", error);
    return { hits: [], totalHits: 0 };
  }
}