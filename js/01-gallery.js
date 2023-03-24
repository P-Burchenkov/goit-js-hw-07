import {galleryItems} from "./gallery-items.js";

const galleryListEl = document.querySelector(".gallery");
let modal = {};

galleryListEl.addEventListener("click", onImgClick);
galleryListEl.innerHTML = makeGallery(galleryItems);
document.addEventListener("keydown", onModalClose);

function makeGallery(params) {
  return params
    .map((param) => {
      return `<li class="gallery__item">
          <a class="gallery__link" href="${param.original}">
           <img
              class="gallery__image"
              src="${param.preview}"
              data-source="${param.original}"
              alt="${param.description}"
           />
          </a>
        </li>`;
    })
    .join("");
}
function onImgClick(event) {
  if (event.target.className !== "gallery__image") {
    return;
  }
  event.preventDefault();
  modal = basicLightbox.create(
    ` <img
    class="gallery__image"
    src="${event.target.dataset.source}"    
    alt="${event.target.alt}"
  />`
  );
  modal.show();
}
function onModalClose(event) {
  if (!basicLightbox.visible()) {
    return;
  }
  if (event.code === "Escape") {
    modal.close();
  }
}

console.log(galleryItems);
