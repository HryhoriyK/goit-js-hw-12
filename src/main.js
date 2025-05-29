import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = event.target.elements["search-text"].value.trim();

  if (!query) {
    iziToast.error({ message: "Please enter a search term!" });
    return;
  }

  showLoader();
  clearGallery();

  const images = await getImagesByQuery(query);
  hideLoader();

  if (images.length === 0) {
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
    createGallery(images);
  }
});

