function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i,u=r("7Y9D8"),c=r("fZKcF"),f=r("hDK3b"),a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,d=/^0o[0-7]+$/i,m=parseInt,y="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,g=y||h||Function("return this")(),v=Object.prototype.toString,p=Math.max,w=Math.min,b=function(){return g.Date.now()};function E(e,t,n){var o,r,i,u,c,f,a=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=o,i=r;return o=r=void 0,a=t,u=e.apply(i,n)}function y(e){return a=e,c=setTimeout(g,t),l?m(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-a>=i}function g(){var e=b();if(h(e))return v(e);c=setTimeout(g,function(e){var n=t-(e-f);return s?w(n,i-(e-a)):n}(e))}function v(e){return c=void 0,d&&o?m(e):(o=r=void 0,u)}function E(){var e=b(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===c)return y(f);if(s)return c=setTimeout(g,t),m(f)}return void 0===c&&(c=setTimeout(g,t)),u}return t=H(t)||0,x(n)&&(l=!!n.leading,i=(s="maxWait"in n)?p(H(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),E.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=f=r=c=void 0},E.flush=function(){return void 0===c?u:v(b())},E}function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||d.test(e)?m(e.slice(2),n?2:8):l.test(e)?NaN:+e}i=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return x(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),E(e,t,{leading:o,maxWait:t,trailing:r})};var O=r("aYq7L"),T=r("2cvPU");const j=document.querySelector("#search-form"),N=document.querySelector(".gallery"),P=new(0,T.default)({selector:".submit-btn",hidden:!1}),q=new(0,O.default);let L=0;function M(){e(u).Notify.info("We're sorry, but you've reached the end of search results.")}function D(t){const n=t.map(f.default).join("");N.insertAdjacentHTML("beforeend",n),new(e(c))(".gallery a").refresh()}function S(){return window.pageYOffset||document.documentElement.scroll}function W(t){e(u).Notify.info("We're sorry, try ones more."),P.enable(),console.log(t)}function $(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)}j.addEventListener("submit",(async function(t){if(t.preventDefault(),function(){N.innerHTML=""}(),q.word=t.currentTarget.elements.searchQuery.value.trim(),function(t){if(""===t)return e(u).Notify.warning("Please, enter a search query!"),!0}(q.word))return;q.resetPage(),q.resetViewedPhotoes(),P.disabled();try{const{hits:t,totalHits:n}=await q.fetchArticles();if(function(t){if(0===t)return P.enable(),e(u).Notify.failure("Sorry, there are no images matching your search query. Please try again."),!0}(t.length))return;!function(t){e(u).Notify.success(`Hooray! We found ${t} images.`)}(n),D(t),P.enable()}catch(e){W(e)}})),window.addEventListener("scroll",e(i)((async function e(){if(q.viewedPhotoes<q.perPage&&window.pageYOffset+document.documentElement.clientHeight>=$()-10)return void M();if(q.viewedPhotoes<q.perPage)return;if(window.pageYOffset+document.documentElement.clientHeight>=$()-20)try{const{hits:t,totalHits:n}=await q.fetchArticles();if(D(t),function(e){const{height:t}=document.querySelector(`.${e}`).firstElementChild.getBoundingClientRect();window.scrollBy({top:2*t,behavior:"smooth"})}("gallery"),n<=q.viewedPhotoes)return function(){S()>L&&M();L=S()}(),void window.removeEventListener("scroll",e)}catch(e){W(e)}}),500));
//# sourceMappingURL=gallery2.d18b2347.js.map