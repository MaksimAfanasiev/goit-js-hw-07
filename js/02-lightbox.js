import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery")

const galleryItemsMarkup = galleryItems.map(image =>
    `
    <a class="gallery__item" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
    </a>
    `
).join("");

galleryEl.innerHTML = galleryItemsMarkup;

let lightbox = new SimpleLightbox('.gallery a',
    {captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,}
);
