import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createMarkup(elements) {
	return elements.map(({preview, original, description}) => `<li class="gallery__item">
			<a class="gallery__link" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				data-source="${original}"
				alt="${description}"
			/>
		</a>
	</li>`).join('');
}

gallery.innerHTML = createMarkup(galleryItems);
gallery.addEventListener('click', onClick);

function onClick(e) {
	e.preventDefault();
	if (e.target.nodeName !== 'IMG') return;

	const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`);
	instance.show();

	gallery.addEventListener('keydown', (e) => {
		if (e.code === 'Escape') instance.close();
	});
}