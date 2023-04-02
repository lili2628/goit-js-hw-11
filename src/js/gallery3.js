import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/common.css';
import galleryCardAdditionalTpl from './templates/gallery-additional';
import throttle from 'lodash.throttle';
import SearchService from './searchService';
import LoadMoreBtn from './load-more-btn';

const searchFormEl = document.querySelector('#search-form');
const cardContainerEl = document.querySelector('.gallery');

const submitBtn = new LoadMoreBtn({ selector: '.submit-btn', hidden: false })
const searchService = new SearchService();

let lastScroll = 0;

searchFormEl.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();
    clearCardcontainer();

    searchService.word = e.currentTarget.elements.searchQuery.value.trim();
    
    if (isSearchQueryAmpty(searchService.word)) {
        return;
    }; 

    searchService.resetPage();
    searchService.resetViewedPhotoes();
    submitBtn.disabled();

    let infiniteObserver = new IntersectionObserver(([entry], observer) => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);

            loadPhotoes(infiniteObserver);
            searchService.incrementPage();
        }
    }, {
        threshold: 1,
    });
}

async function loadPhotoes (obs) {
        try {
        const { hits, totalHits } = await searchService.fetchArticles();

        if (isArrayOfDataAmpty(hits.length)) {
            return;
        }

        totalFoundPicturesMessage(totalHits);
        appendPhotoCardMarkup(hits);
        submitBtn.enable();  
        
        const lastPhoto = document.querySelector('.gallery:last-child');
         
        if (lastPhoto) {
            obs.observe(lastPhoto);
        }
        
    } catch (error) {
        onSomeError(error);
    };  
}



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



