!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequired7c6=i);var a=i("bpxeT"),o=i("2TvXO");function c(){return s.apply(this,arguments)}function s(){return(s=e(a)(e(o).mark((function n(){var t,r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function u(){return(u=e(a)(e(o).mark((function n(){var t,r,i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e,n,t){var r=document.querySelector(".gallery");r.innerHTML="";var i=n*(t-=1),a=i+n;e.slice(i,a).forEach((function(e){var n=document.createElement("div");n.classList.add("post"),n.innerText="".concat(e.title),r.appendChild(n)}))},s=function(e,n){var t=document.querySelector(".pagination"),r=Math.ceil(e.length/n),i=document.createElement("ul");i.classList.add("pagination__list");for(var a=0;a<r;a+=1){var o=u(a+1);i.appendChild(o)}t.appendChild(i)},u=function(e){var n=document.createElement("li");return n.classList.add("pagination__item"),n.innerText=e,r===e&&n.classList.add("pagination__item"),n.addEventListener("click",(function(){a(t,i,r=e),document.querySelector("pagination__item--select").classList.remove("pagination__item--select"),n.classList.add("pagination__item--select")})),n},e.next=5,c();case 5:t=e.sent,a(t,i=20,r=1),s(t,i);case 13:case"end":return e.stop()}}),n)})))).apply(this,arguments)}!function(){u.apply(this,arguments)}()}();
//# sourceMappingURL=gallery5.999fcb17.js.map
