import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createMarkup(elements) {
	return elements.map(({preview, original, description}) => `<li class="gallery__item">
	<a class="gallery__link" href="${original}">
	<img class="gallery__image" src="${preview}" alt="${description}" />
	</a>
	</li>`).join('');
}

gallery.innerHTML = createMarkup(galleryItems);

new SimpleLightbox('.gallery a', {captionData: 'alt', captionDelay: 250});