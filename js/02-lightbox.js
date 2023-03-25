import {galleryItems} from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");


galleryListEl.innerHTML = makeGallery(galleryItems);
galleryListEl.addEventListener("click", onImgClick);

function makeGallery(params) {
  return params
    .map((param) => {
      return `<li class="gallery__item">
          <a class="gallery__link" href="${param.original}">
           <img
              class="gallery__image"
              src="${param.preview}"              
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
  const modal = new SimpleLightbox(`.gallery .gallery__link`, {
    captionsData: "alt",
    captionDelay: 250,
  });
  console.log(modal);
  modal.open();
}

console.log(galleryItems);
