!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},r.parcelRequired7c6=o);var a=o("bpxeT"),i=o("1t1Wn"),u=o("2TvXO"),s=o("6JpON"),c=o("5IjG7"),l=o("ag7wj");o("dCfNN");var f=o("h3pWP"),d=o("gGuPt"),p=document.querySelector("#search-form"),y=document.querySelector(".gallery"),h=new(0,d.default)({selector:".submit-btn",hidden:!1}),g=new(0,f.default);function v(){return(v=e(a)(e(u).mark((function r(n){var t,o,a,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.fetchArticles();case 3:if(t=e.sent,o=t.hits,a=t.totalHits,!m(o.length)){e.next=8;break}return e.abrupt("return");case 8:b(a),w(o),h.enable(),(i=document.querySelector(".gallery:last-child"))&&n.observe(i),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),x(e.t0);case 18:case"end":return e.stop()}}),r,null,[[0,15]])})))).apply(this,arguments)}function b(r){e(s).Notify.success("Hooray! We found ".concat(r," images."))}function w(r){var n=r.map(l.default).join("");y.insertAdjacentHTML("beforeend",n),new(e(c))(".gallery a").refresh()}function m(r){if(0===r)return h.enable(),e(s).Notify.failure("Sorry, there are no images matching your search query. Please try again."),!0}function x(r){e(s).Notify.info("We're sorry, try ones more."),h.enable(),console.log(r)}p.addEventListener("submit",(function(r){if(r.preventDefault(),function(){y.innerHTML=""}(),g.word=r.currentTarget.elements.searchQuery.value.trim(),function(r){if(""===r)return e(s).Notify.warning("Please, enter a search query!"),!0}(g.word))return;g.resetPage(),g.resetViewedPhotoes(),h.disabled();var n=new IntersectionObserver((function(r,t){var o=e(i)(r,1)[0];o.isIntersecting&&(t.unobserve(o.target),function(e){v.apply(this,arguments)}(n),g.incrementPage())}),{threshold:1})}))}();
//# sourceMappingURL=gallery3.82abafc7.js.map
