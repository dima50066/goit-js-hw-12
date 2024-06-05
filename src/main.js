import './css/styles.css';
import { fetchImages } from './js/pixabay-api.js';
import {
  clearGallery,
  showLoader,
  hideLoader,
  renderImages,
  showError,
  showInfo,
} from './js/render-functions.js';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');
const loadMoreBtn = document.getElementById('load-more-btn');

let currentPage = 1;

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (query === '') {
    showError('Search query cannot be empty!');
    return;
  }

  clearGallery(gallery);
  showLoader(loader);

  try {
    const data = await fetchImages(query);
    hideLoader(loader);

    const images = data.hits;

    if (images.length === 0) {
      showInfo(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    renderImages(images, gallery);
    loadMoreBtn.style.display = 'block';
  } catch (error) {
    hideLoader(loader);
    showError('Something went wrong. Please try again later.');
    console.error(error);
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage++;
  try {
    const data = await fetchImages(searchInput.value.trim(), currentPage);
    renderImages(data.hits, gallery);

    window.scrollBy({
      top: gallery.getBoundingClientRect().height * 2,
      behavior: 'smooth',
    });

    if (data.hits.length === 0 || data.totalHits <= currentPage * perPage) {
      loadMoreBtn.style.display = 'none';
      showInfo("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    console.error(error);
  }
});
