!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("bpxeT"),u=o("2TvXO"),a=o("6JpON"),c=o("5IjG7"),s=o("ag7wj"),l=o("dCfNN"),f=o("h3pWP"),d=o("gGuPt"),h=document.querySelector("#search-form"),p=document.querySelector(".gallery"),m=new(0,d.default)({selector:".submit-btn",hidden:!1}),g=new(0,f.default),y=0;function w(){return(w=e(i)(e(u).mark((function t(n){var r,o,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),L(),g.word=n.currentTarget.elements.searchQuery.value.trim(),!O(g.word)){e.next=5;break}return e.abrupt("return");case 5:return g.resetPage(),g.resetViewedPhotoes(),m.disabled(),e.prev=8,e.next=11,g.fetchArticles();case 11:if(r=e.sent,o=r.hits,i=r.totalHits,!T(o.length)){e.next=16;break}return e.abrupt("return");case 16:H(i),E(o),m.enable(),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(8),q(e.t0);case 24:case"end":return e.stop()}}),t,null,[[8,21]])})))).apply(this,arguments)}function b(){return v.apply(this,arguments)}function v(){return(v=e(i)(e(u).mark((function t(){var n,r,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(g.viewedPhotoes<g.perPage&&window.pageYOffset+document.documentElement.clientHeight>=M()-10)){e.next=3;break}return x(),e.abrupt("return");case 3:if(!(g.viewedPhotoes<g.perPage)){e.next=5;break}return e.abrupt("return");case 5:if(!(window.pageYOffset+document.documentElement.clientHeight>=M()-20)){e.next=23;break}return e.prev=6,e.next=9,g.fetchArticles();case 9:if(n=e.sent,r=n.hits,o=n.totalHits,E(r),P("gallery"),!(o<=g.viewedPhotoes)){e.next=18;break}return k(),window.removeEventListener("scroll",b),e.abrupt("return");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),q(e.t0);case 23:case"end":return e.stop()}}),t,null,[[6,20]])})))).apply(this,arguments)}function x(){e(a).Notify.info("We're sorry, but you've reached the end of search results.")}function H(t){e(a).Notify.success("Hooray! We found ".concat(t," images."))}function E(t){var n=t.map(s.default).join("");p.insertAdjacentHTML("beforeend",n),new(e(c))(".gallery a").refresh()}function P(e){var t=document.querySelector(".".concat(e)).firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}function k(){N()>y&&x(),y=N()}function N(){return window.pageYOffset||document.documentElement.scroll}function O(t){if(""===t)return e(a).Notify.warning("Please, enter a search query!"),!0}function T(t){if(0===t)return m.enable(),e(a).Notify.failure("Sorry, there are no images matching your search query. Please try again."),!0}function q(t){e(a).Notify.info("We're sorry, try ones more."),m.enable(),console.log(t)}function L(){p.innerHTML=""}function M(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)}h.addEventListener("submit",(function(e){return w.apply(this,arguments)})),window.addEventListener("scroll",e(l)(b,500))}();
//# sourceMappingURL=gallery2.b81bf84a.js.map
