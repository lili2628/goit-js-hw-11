function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},t.parcelRequired7c6=n);var i=n("7Y9D8");function r(e){const{webformatURL:t,largeImageURL:o,tags:s,likes:n,views:i,comments:r,downloads:a}=e;return`\n            <div class=photo-card>\n                <img class=photo-card_image src=${t} alt=${s} loading="lazy" />\n                <div class=info>\n                    <p class=info-item>\n                    <b>Likes ${n}</b>\n                    </p>\n                    <p class=info-item>\n                    <b>Views ${i}</b>\n                    </p>\n                    <p class=info-item>\n                    <b>Comments ${r}</b>\n                    </p>\n                    <p class=info-item>\n                    <b>Downloads ${a}</b>\n                    </p>\n                </div>\n            </div>\n        `}class a{enable(){this.button.disabled=!1}disabled(){this.button.disabled=!0}show(){this.button.classList.remove("is-hidden")}hide(){this.button.classList.add("is-hidden")}constructor({selector:e,hidden:t=!1}){this.button=document.querySelector(e),t&&this.hide()}}const c=document.querySelector("#search-form"),d=document.querySelector(".gallery"),l=new a({selector:".load-more",hidden:!0}),h=new a({selector:".submit-btn",hidden:!1}),u=new class{async fetchArticles(){const e=`https://pixabay.com//api/?key=33857363-bdd91af921483c20a6a440946&q=${this.searchWord}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`,t=await fetch(e),o=await t.json();try{return this.incrementPage(),this.viewedPhotoes+=o.hits.length,console.log(this.viewedPhotoes),o}catch(e){console.log(e)}}incrementPage(){this.page+=1}resetPage(){this.page=1}resetViewedPhotoes(){this.viewedPhotoes=0}get word(){return this.searchWord}set word(e){this.searchWord=e}constructor(){this.searchWord="",this.page=1,this.viewedPhotoes=0,this.perPage=101}};function f(e){const t=e.map(r).join("");d.insertAdjacentHTML("beforeend",t)}c.addEventListener("submit",(async function(t){if(t.preventDefault(),function(){d.innerHTML=""}(),u.word=t.currentTarget.elements.searchQuery.value.trim(),""===u.word)return e(i).Notify.info("Please, enter a search query!");u.resetPage(),u.resetViewedPhotoes(),h.disabled(),l.hide();try{const{hits:t,totalHits:o}=await u.fetchArticles();if(0===t.length)return l.hide(),h.enable(),e(i).Notify.failure("Sorry, there are no images matching your search query. Please try again.");f(t),h.enable(),l.show(),l.enable()}catch(t){e(i).Notify.info("We're sorry, try ones more."),console.log(t)}})),l.button.addEventListener("click",(async function(){l.disabled();try{const{hits:n,totalHits:r}=await u.fetchArticles();f(n),l.enable(),console.log(r,u.viewedPhotoes,u.perPage),t=r,o=u.viewedPhotoes,s=u.perPage,(t<=o||o<s)&&(l.hide(),e(i).Notify.info("We're sorry, but you've reached the end of search results."))}catch(t){e(i).Notify.info("We're sorry, try the query ones more."),console.log(t)}var t,o,s}));
//# sourceMappingURL=gallery1.d0d5f401.js.map
