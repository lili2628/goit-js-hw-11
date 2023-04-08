import '../css/common.css';

async function getData() {
    const responce = await fetch('');
    const data = await responce.json();
    return data;
}

async function main() {
    const postsData = await getData();
    let currentPage = 1;
    let rows = 20;

    function displayList(arrData, rowPerPage, page) {
        const postsEl = document.querySelector('.gallery');
        postsEl.innerHTML = '';
        page -= 1;

        const start = rowPerPage * page;
        const end = start + rowPerPage;
        const paginatedData = arrData.slice(start, end);

        paginatedData.forEach((element) => {
            const postEl = document.createElement('div');
            postEl.classList.add('post');
            postEl.innerText = `${element.title}`;
            postsEl.appendChild(postEl);
        });
    }

    function displayPagination(arrData, rowPerPage) {
        const paginationEl = document.querySelector('.pagination');
        const pagesCount = Math.ceil(arrData.length / rowPerPage);
        const ulEl = document.createElement('ul');
        ulEl.classList.add('pagination__list');

        for (let i = 0; i < pagesCount; i += 1) {
            const liEl = displayPaginationBtn(i + 1);
            ulEl.appendChild(liEl);
        }

        paginationEl.appendChild(ulEl);
    }

    function displayPaginationBtn(page) {
        const liEl = document.createElement('li');
        liEl.classList.add('pagination__item');
        liEl.innerText = page;

        if (currentPage === page) {
            liEl.classList.add('pagination__item');
        }

        liEl.addEventListener('click', () => {
            currentPage = page;
            displayList(postsData, rows, currentPage);

            let currentItemLi = document.querySelector('pagination__item--select');
            currentItemLi.classList.remove('pagination__item--select');

            liEl.classList.add('pagination__item--select');
        })

        return liEl;
    }

    displayList(postsData, rows, currentPage);
    displayPagination(postsData, rows);
}

main();