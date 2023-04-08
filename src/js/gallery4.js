import '../css/common.css';
import apiService from './apiService';

const NUMBER_PAGINATION = 5;

const cardContainerEl = document.querySelector('.gallery');
const paginationEl = document.querySelector('.pagination');



async function paginationFeach() {
    
    const { results, total_pages } = await apiService.fetchTrandingFilmDay();
    

    render(results);
    
    if (total_pages <= NUMBER_PAGINATION + 2) {
        displayPaginationSmall(total_pages);
        //document.querySelector('pagination__list').firstElementChild.classList.add('pagination__item--select');
        paginationEl.addEventListener('click', onPaginationBtnClick);
    }

    displayPaginationBig(total_pages);
    //document.querySelector('pagination__list').firstElementChild.classList.add('pagination__item--select');
    
   
    paginationEl.addEventListener('click', (e) => {
        if (!e.target.classList.contains('pagination__item')) {
            return;
        }

        const currentPage = Number(e.target.textContent);
        //const currentActiveBtn = document.querySelector('.pagination__item--select'); 
        //currentActiveBtn?.classList.remove('pagination__item--select');
        // e.target.classList.add('pagination__item--select');

        onBigPaginationBtnClickrRenderFilms(currentPage);
        onBigPaginationBtnClickrRenderPagination(total_pages, currentPage);

        
    });
    
}

async function onBigPaginationBtnClickrRenderFilms(currentPage) {
    cardContainerEl.innerHTML = '';
    apiService.pageNumber = currentPage;

    const { results } = await apiService.fetchTrandingFilmDay();

    render(results);
}

function onBigPaginationBtnClickrRenderPagination(total_pages, currentPage) {
    paginationEl.innerHTML = '';

    const n = NUMBER_PAGINATION - (Math.ceil(NUMBER_PAGINATION / 3) - 1);
    const m = total_pages - ((Math.ceil(NUMBER_PAGINATION / 3) - 1));

    if (currentPage < n) {
        displayPaginationBig(total_pages);
    } else if (currentPage >= n && currentPage <= m) {
        displayPaginationBigMiddle(total_pages, currentPage);
    } else {
        displayPaginationBigFinish(total_pages);
    }

    document.querySelector(`.js-page-${currentPage}`).classList.add('pagination__item--select');
};



function displayPaginationBig(total_pages) {
    
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');

    for (let i = 0; i < NUMBER_PAGINATION; i += 1) {
        const liEl = displayPaginationBtn(i + 1);
        ulEl.appendChild(liEl);
    }
    const dots = displayPaginationDots();
    ulEl.appendChild(dots);
    const finishPage = displayPaginationBtn(total_pages);
    ulEl.appendChild(finishPage);

    paginationEl.appendChild(ulEl);
}

function displayPaginationBigFinish(total_pages) {
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');

    const firstPage = displayPaginationBtn(1);
    ulEl.appendChild(firstPage);

    const dots = displayPaginationDots();
    ulEl.appendChild(dots);

    for (let i = total_pages - (NUMBER_PAGINATION - 1); i <= total_pages; i += 1) {
        const liEl = displayPaginationBtn(i);
        ulEl.appendChild(liEl);
    }

    paginationEl.appendChild(ulEl);
}

function displayPaginationBigMiddle(total_pages, currentPage) {
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');

    const firstPage = displayPaginationBtn(1);
    ulEl.appendChild(firstPage);

    const dotsFirst = displayPaginationDots();
    ulEl.appendChild(dotsFirst);

    for (let i = currentPage - (Math.ceil(NUMBER_PAGINATION / 2) - 1); i <= currentPage + (Math.ceil(NUMBER_PAGINATION / 2) - 1); i += 1) {
        const liEl = displayPaginationBtn(i);
        ulEl.appendChild(liEl);
    }

    const dotsLast = displayPaginationDots();
    ulEl.appendChild(dotsLast);

    const lastPage = displayPaginationBtn(total_pages);
    ulEl.appendChild(lastPage);

    paginationEl.appendChild(ulEl);
}

function displayPaginationSmall(totalPages) {
       
        const ulEl = document.createElement('ul');
        ulEl.classList.add('pagination__list');

        for (let i = 0; i < totalPages; i += 1) {
            const liEl = displayPaginationBtn(i + 1);
            ulEl.appendChild(liEl);
        }
       
        paginationEl.appendChild(ulEl);
}
    
function displayPaginationBtn(page) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item', `js-page-${page}`);
    liEl.innerText = page;

    return liEl;
}

async function onPaginationBtnClick(e) {
    if (!e.target.classList.contains('pagination__item')) {
        return;
    }

    cardContainerEl.innerHTML = '';
    apiService.pageNumber = Number(e.target.textContent);

    const { results } = await apiService.fetchTrandingFilmDay();

    render(results);
}
        

    
    
function displayPaginationDots() {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__dots');
    liEl.innerText = '...';

    return liEl;
}        


   function render(res) {
    const makePhotoCards = res
        .map(galleryTpl)
        .join('');
    
    cardContainerEl.insertAdjacentHTML('beforeend', makePhotoCards);
    }
    
    function galleryTpl(result) {
    const { original_title, poster_path, genre_ids, release_date } = result;
    
    return `
            <div class=photo-card>
                <img class=photo-card_image src=${poster_path} alt=${original_title} loading="lazy" />
                <div class=info>
                    <p class=info-item>
                    </p>
                    <p class=info-item>
                    <b> ${original_title}</b>
                    </p>
                    <p class=info-item>
                    <b>Genres ${genre_ids}</b>
                    </p>
                    <p class=info-item>
                    <b>Data ${release_date}</b>
                    </p>
                </div>
            </div>
        `;
    }

paginationFeach();