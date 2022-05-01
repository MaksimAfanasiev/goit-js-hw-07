import { galleryItems } from './gallery-items.js';
// Change code below this line

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

  if(!event.target.classList.contains("gallery__image")) {
    return
  } else{
    const lightBoxEl = basicLightbox.create(`<img
      src="${event.target.dataset.source}"
      alt="${event.target.alt}"
    />`)

    lightBoxEl.show(() => galleryEl.addEventListener("keydown", onEscPress))

    function onEscPress(evn) {
      if(evn.code !== "Escape") {
        return
      } else{
        lightBoxEl.close(() => galleryEl.removeEventListener("keydown", onEscPress))
      }
  }
  }
};
