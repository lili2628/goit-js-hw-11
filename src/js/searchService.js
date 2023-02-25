const KEY = '33857363-bdd91af921483c20a6a440946';
const BASE_URL = "https://pixabay.com/";

export default class SearchService {
    constructor() { 
        this.searchWord = '';
        this.page = 1;
        this.viewedPhotoes = 0;
        this.perPage = 101;
    }
    
    async fetchArticles() {
        const url = `${BASE_URL}/api/?key=${KEY}&q=${this.searchWord}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`;
    
        const r = await fetch(url);
        const data = await r.json();

        try {
            this.incrementPage();
            this.viewedPhotoes += data.hits.length;
            console.log(this.viewedPhotoes);

        return data;
        } catch (error) {
            console.log(error);
        }

        
        
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    resetViewedPhotoes() {
        this.viewedPhotoes = 0;
    }
    
    get word() {
        return this.searchWord;
    }

    set word(newWord) {
        this.searchWord = newWord;
    }
}



