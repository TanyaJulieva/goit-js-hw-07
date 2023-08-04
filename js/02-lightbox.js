import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')

function createMarkup(arr) {
    return arr.map(({preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`).join("");

}

gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems))

gallery.addEventListener('click', handlerGalleryItemClick)

function handlerGalleryItemClick(evt){
    evt.preventDefault();

    if(evt.target === evt.currentTarget) {
        return
    }
    
    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

};


console.log(galleryItems);
