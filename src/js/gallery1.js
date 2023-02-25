import '../css/common.css';
import axios from "axios";
import Notiflix from 'notiflix';
import galleryCardMainTpl from './templates/gallery-main';
import SearchService from './searchService';
import LoadMoreBtn from './load-more-btn';

const searchFormEl = document.querySelector('#search-form');
const cardContainerEl = document.querySelector('.gallery');

const loadMoreBtn = new LoadMoreBtn({ selector: '.load-more', hidden: true });
const submitBtn = new LoadMoreBtn({ selector: '.submit-btn', hidden: false })
const searchService = new SearchService();

searchFormEl.addEventListener('submit', onSearch);
loadMoreBtn.button.addEventListener('click', onLoadMore);

async function onSearch(e) {
    e.preventDefault();
    clearCardcontainer();

    searchService.word = e.currentTarget.elements.searchQuery.value.trim();
    
    if (searchService.word === '') {
        return Notiflix.Notify.info("Please, enter a search query!");
    }

    searchService.resetPage();
    searchService.resetViewedPhotoes();
    submitBtn.disabled();
    loadMoreBtn.hide();

    try {
        const { hits, totalHits } = await searchService.fetchArticles();

        if (hits.length === 0) {
            loadMoreBtn.hide();
            submitBtn.enable();

            
            return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        }

        appendPhotoCardMarkup(hits);
        submitBtn.enable();
        loadMoreBtn.show();
        loadMoreBtn.enable();

       // endOfCollection(totalHits, searchService.viewedPhotoes, searchService.perPage);
        
    } catch (error) {
        Notiflix.Notify.info("We're sorry, try ones more.");
        console.log(error);
    }

    
    
}

async function onLoadMore() {
    loadMoreBtn.disabled();

    try {
        const { hits, totalHits } = await searchService.fetchArticles();
        
        appendPhotoCardMarkup(hits);
        loadMoreBtn.enable();

        console.log(totalHits, searchService.viewedPhotoes, searchService.perPage);
        endOfCollection(totalHits, searchService.viewedPhotoes, searchService.perPage);
    } catch (error) {
        Notiflix.Notify.info("We're sorry, try the query ones more.");
        console.log(error);
    }
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
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
    }
}