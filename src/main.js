import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let query = "";
let page = 1;
const PER_PAGE = 15;

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  query = event.target.elements["search-text"].value.trim();

  if (!query) {
    iziToast.error({ message: "Please enter a search term!" });
    return;
  }

  page = 1;
  showLoader();
  clearGallery();
  hideLoadMoreButton();

  const data = await getImagesByQuery(query, page);
  hideLoader();

  if (data.hits.length === 0) {
    iziToast.error({
      title: "Error",
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "topRight",
      timeout: 5000,
      backgroundColor: "#f70303",
      color: "#fafafb",
      titleSize: "18px",
      messageSize: "16px",
      titleColor: "#ffffff",
      messageColor: "#ffffff",
      width: "322px"
    });
  } else {
    createGallery(data.hits);
    if (data.totalHits > PER_PAGE) {
      showLoadMoreButton();
    }
  }
});

loadMoreBtn.addEventListener("click", async () => {
  try {
    page += 1;
    showLoader();
    const data = await getImagesByQuery(query, page);
    hideLoader();
    createGallery(data.hits);
    smoothScroll();

    if (page * PER_PAGE >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
    }
  } catch (error) {
    console.error("Помилка при завантаженні нових зображень:", error);
    iziToast.error({ message: "Error loading images. Try again later!" });
  }
});

function smoothScroll() {
  const galleryItem = document.querySelector(".gallery li");
  if (galleryItem) {
    const itemHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: itemHeight * 2,
      behavior: "smooth"
    });
  }
}



