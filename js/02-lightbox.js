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
gallery.addEventListener('click', onClick);

function onClick(e) {
	e.preventDefault();
	if (e.target.nodeName !== 'IMG') return;

	gallery.addEventListener('keydown', (e) => {
		if (e.code === 'Escape') gallery.close();
	});

//TODO дальше нужно или думать, или спать...)
	const lightbox = new SimpleLightbox('.gallery a', {captionType: 'alt', captionDelay: 250});
}