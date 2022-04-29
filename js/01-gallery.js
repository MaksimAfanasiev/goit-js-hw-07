import { galleryItems } from './gallery-items.js';
// Change code below this line



// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems.map(image =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </div>`
).join("");

galleryEl.innerHTML = galleryItemsMarkup

galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
    event.preventDefault()
    console.log(event.target.dataset.source)
}

