import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';

export function clearGallery(galleryElement) {
  galleryElement.innerHTML = '';
}

export function showLoader(loaderElement) {
  loaderElement.style.display = 'block';
}

export function hideLoader(loaderElement) {
  loaderElement.style.display = 'none';
}

export function renderImages(images, galleryElement) {
  const markup = images
    .map(image => {
      return `
      <a href="${image.largeImageURL}" class="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}">
        <div>
          <p>Likes: ${image.likes}</p>
          <p>Views: ${image.views}</p>
          <p>Comments: ${image.comments}</p>
          <p>Downloads: ${image.downloads}</p>
        </div>
      </a>
    `;
    })
    .join('');

  galleryElement.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

export function showError(message) {
  iziToast.error({ title: 'Error', message });
}

export function showInfo(message) {
  iziToast.info({ title: 'Info', message });
}
