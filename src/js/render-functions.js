import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
let lightbox = new SimpleLightbox(".gallery a");

export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <div class="image-container">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}">
        </a>
        </div>
        <div class="info">
          <div class="info-items">
          <p class="info-item">Likes</p>
          <p class="info-value">${likes}</p>
          </div class="info-items">
          <div>
          <p class="info-item">Views</p>
          <p class="info-value">${views}</p>
          </div>
          <div class="info-items">
          <p class="info-item">Comments</p>
          <p class="info-value">${comments}</p>
          </div>
          <div class="info-items">
          <p class="info-item">Downloads</p>
          <p class="info-value">${downloads}</p>
          </div>
        </div>
      </li>
    `
    )
    .join("");
  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = "";
}

export function showLoader() {
  const loaderElement = document.querySelector(".loader");
  if (loaderElement) loaderElement.style.display = "block";
}

export function hideLoader() {
  const loaderElement = document.querySelector(".loader");
  if (loaderElement) loaderElement.style.display = "none";
}

export function showLoadMoreButton() {
  const loadMoreBtn = document.querySelector(".load-more");
  if (loadMoreBtn) loadMoreBtn.style.display = "block";
}

export function hideLoadMoreButton() {
  const loadMoreBtn = document.querySelector(".load-more");
  if (loadMoreBtn) {
    loadMoreBtn.style.display = "none";
  }
}
