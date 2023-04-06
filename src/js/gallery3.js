import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/common.css';
import galleryCardAdditionalTpl from './templates/gallery-additional';
//import throttle from 'lodash.throttle';
import SearchService from './searchService';
import LoadMoreBtn from './load-more-btn';

const searchFormEl = document.querySelector('#search-form');
const cardContainerEl = document.querySelector('.gallery');

const submitBtn = new LoadMoreBtn({ selector: '.submit-btn', hidden: false })
const searchService = new SearchService();

searchFormEl.addEventListener('submit', onSearch);

async function onSearch(e) {
    e.preventDefault();
    clearCardcontainer();

    const lastPhoto = document.querySelector('.endPage');
    observer.unobserve(lastPhoto);

    searchService.word = e.currentTarget.elements.searchQuery.value.trim();
    
    if (isSearchQueryAmpty(searchService.word)) {
        return;
    }; 

    searchService.resetPage();
    searchService.resetViewedPhotoes();
    submitBtn.disabled();

    try {
        const { hits, totalHits } = await searchService.fetchArticles();

         if (isArrayOfDataAmpty(hits.length)) {
            return;
        }

        totalFoundPicturesMessage(totalHits);
        appendPhotoCardMarkup(hits);
        submitBtn.enable();
        observer.observe(lastPhoto);
       // return;

    } catch (error) {
        onSomeError(error);
    };
}



const onloadPhotoes = async entries => {
    entries.forEach(async entry => {
        try {
            if (searchService.totalHits <= searchService.viewedPhotoes) {
            endOfResultsMessage();
            return;
        }

            if (entry.isIntersecting
                && searchService.totalHits > searchService.viewedPhotoe
                && searchService.word !== '') {
            const { hits } = await searchService.fetchArticles();
            appendPhotoCardMarkup(hits);
            smoothScroll();
        }
        } catch (error) {
            onSomeError(error);
        }
        
    });
};

const observer = new IntersectionObserver(onloadPhotoes, {
    rootMargin: '200px',
});

function endOfResultsMessage() {
    Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
}

function totalFoundPicturesMessage(totalHits) {
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
}

function appendPhotoCardMarkup(hits) {
    const makePhotoCards = hits
        .map(galleryCardAdditionalTpl)
        .join('');
    
    cardContainerEl.insertAdjacentHTML('beforeend', makePhotoCards);

    let gallery = new SimpleLightbox('.gallery a');
    gallery.refresh();
}

function smoothScroll(className) {
    const { height: cardHeight } = document.querySelector(`.${className}`).firstElementChild.getBoundingClientRect();

    window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
    });
}

function isSearchQueryAmpty(searchQuery) {
    if (searchQuery === '') {
        Notiflix.Notify.warning("Please, enter a search query!");

        return true;
    };
}

function isArrayOfDataAmpty(length) {
    if (length === 0) {
        submitBtn.enable();
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        
        return true;
    };
}

function onSomeError(error) {
    Notiflix.Notify.info("We're sorry, try ones more.");
    submitBtn.enable();
    console.log(error);
}

function clearCardcontainer() {
    cardContainerEl.innerHTML = '';
}



