import '../css/common.css';
//import axios from "axios";
import Notiflix from 'notiflix';
import throttle from 'lodash.throttle';
import galleryCardMainTpl from './templates/gallery-main';
import SearchService from './searchService';
import LoadMoreBtn from './load-more-btn';

const searchFormEl = document.querySelector('#search-form');
const cardContainerEl = document.querySelector('.gallery');

const loadMoreBtn = new LoadMoreBtn({ selector: '.load-more', hidden: true });
const submitBtn = new LoadMoreBtn({ selector: '.submit-btn', hidden: false })
const searchService = new SearchService();

let lastScroll = 0;

searchFormEl.addEventListener('submit', onSearch);
loadMoreBtn.button.addEventListener('click', onLoadMore);
window.addEventListener('scroll', throttle(onScroll, 500));

async function onSearch(e) {
    e.preventDefault();
    clearCardcontainer();

    searchService.word = e.currentTarget.elements.searchQuery.value.trim();
    
    if (isSearchQueryAmpty(searchService.word)) {
        return;
    }; 

    searchService.resetPage();
    searchService.resetViewedPhotoes();
    submitBtn.disabled();
    loadMoreBtn.hide();

    try {
        const { hits, totalHits } = await searchService.fetchArticles();

        if (isArrayOfDataAmpty(hits.length)) {
            return;
        }

        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);

        appendPhotoCardMarkup(hits);
        submitBtn.enable();
        loadMoreBtn.show();
        loadMoreBtn.enable();

        lessPhotoesThanPerpageInTheFirstRequest(totalHits, searchService.perPage);       
        
    } catch (error) {
        onSomeError(error);
    }
}

async function onLoadMore() {
    loadMoreBtn.disabled();

    try {
        const { hits, totalHits } = await searchService.fetchArticles();
        
        loadMoreBtn.enable();
        appendPhotoCardMarkup(hits);
        endOfCollection(totalHits, searchService.viewedPhotoes, searchService.perPage);
    
    } catch (error) {
        onLoadMore(error);
    }
}

function scrollPosition() {
    return window.pageYOffset || document.documentElement.scroll;
}

function onScroll() {
    if (scrollPosition() > lastScroll) {
        if (window.pageYOffset + document.documentElement.clientHeight >= getDocHeight() - 20
        && loadMoreBtn.button.classList.contains('is-hidden')) {   
            Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
        };
    };
    lastScroll = scrollPosition(); 
}

function isSearchQueryAmpty(searchQuery) {
    if (searchQuery === '') {
        loadMoreBtn.hide();
        Notiflix.Notify.warning("Please, enter a search query!");

        return true;
    };
}

function isArrayOfDataAmpty(length) {
    if (length === 0) {
        loadMoreBtn.hide();
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

function appendPhotoCardMarkup(hits) {
    const makePhotoCards = hits
        .map(galleryCardMainTpl)
        .join('');
    
    cardContainerEl.insertAdjacentHTML('beforeend', makePhotoCards);
}

function clearCardcontainer() {
    cardContainerEl.innerHTML = '';
}

function endOfCollection(total, shown, per) {
    if (total <= shown || shown < per) {
        loadMoreBtn.hide();
        //setTimeout(() => {
         //   Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
        //}, 1000);
    }
}

function lessPhotoesThanPerpageInTheFirstRequest(total, per) {
    if (total <= per && total !== 0) {
        loadMoreBtn.hide();
    }
}

function getDocHeight() {
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
}