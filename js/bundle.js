!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5);!function(){function e(){return window.matchMedia("(min-width: 1280px)").matches}function t(t,n,o,c,r,i){t.addEventListener("click",(function(t){t.preventDefault();var d=e()?i:r,s=Array.from(c).some((function(e){return e.classList.contains(d)}));c.forEach((function(t){e()?t.classList.toggle(i):t.classList.toggle(r)})),n.textContent=s?"Скрыть":"Показать всё",o.style.backgroundImage=s?"url(../img/arrow-unvisible.svg)":"url(../img/arrow-visible.svg)"})),window.addEventListener("resize",(function(){var t=e();c.forEach((function(e){t?(e.classList.add(i),e.classList.remove(r)):(e.classList.add(r),e.classList.remove(i))}))}))}var n=document.querySelector(".open-brands-btn"),o=document.querySelectorAll(".hidden-md, .hidden-hd"),c=document.getElementById("btn-brand-text"),r=document.getElementById("btn-brand-img");n&&t(n,c,r,o,"hidden-md","hidden-hd");var i=document.getElementById("btn-open-tech"),d=document.querySelectorAll(".hidden-tech-md, .hidden-tech-hd"),s=document.getElementById("btn-tech-text"),a=document.getElementById("btn-tech-img");i&&t(i,s,a,d,"hidden-tech-md","hidden-tech-hd");var u=document.querySelector(".content-container__paragraph-two--hidden-xs"),l=document.querySelector(".content-container__paragraph-two--hidden-md"),m=document.querySelector(".content-container__buttn-more"),f=document.querySelector(".content-container__button-more-img"),g=document.querySelector(".content-container__button-more-text");m&&m.addEventListener("click",(function(){u.classList.toggle("opened"),l.classList.toggle("opened"),u.classList.contains("opened")||l.classList.contains("opened")?(g.textContent="Скрыть",f.style.backgroundImage="url(../img/arrow-unvisible.svg)"):(g.textContent="Читать далее",f.style.backgroundImage="url(../img/arrow-visible.svg)")}))}()},function(e,t,n){},function(e,t){document.addEventListener("DOMContentLoaded",(function(){new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:2,slidesPerGroup:1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}))},function(e,t){!function(){"use strict";var e=document.querySelector(".sidebar-container"),t=document.querySelector(".sidebar"),n=document.querySelectorAll(".navigation__list-item"),o=document.querySelectorAll(".language-change__item"),c=document.querySelectorAll(".language-change__radio");function r(){e.classList.add("closed")}document.getElementById("open-menu-btn").addEventListener("click",(function(){e.classList.remove("closed")}));var i=document.getElementById("sidebar-closed");i&&i.addEventListener("click",r),t&&e&&e.addEventListener("click",(function(e){e.target===this&&r()})),document.addEventListener("keydown",(function(t){"Escape"!==t.key||e.classList.contains("closed")||r()})),n.forEach((function(e){e.addEventListener("click",(function(){n.forEach((function(e){return e.classList.remove("active-item")})),e.classList.toggle("active-item")}))})),o.forEach((function(e,t){e.addEventListener("click",(function(){c.forEach((function(e){return e.checked=!1})),c[t].checked=!0,o.forEach((function(e){return e.classList.remove("item-changed")})),e.classList.add("item-changed")}))}))}()},function(e,t){!function(){"use strict";var e=document.querySelector(".right-container"),t=document.querySelector(".right-sidebar"),n=document.querySelector(".contacts__link-phone"),o=document.querySelector(".sidebar-container"),c=document.getElementById("button-phone"),r=document.querySelectorAll(".call_back"),i=document.querySelector(".form").querySelectorAll(".form__label"),d=document.querySelector(".header__heading");function s(){e.classList.add("closed")}function a(){o.classList.add("closed")}document.addEventListener("keydown",(function(t){"Escape"===t.key&&(e&&!e.classList.contains("closed")&&s(),o&&!o.classList.contains("closed")&&a(),i.forEach((function(e){return e.classList.remove("closed")})),d.textContent="")})),t&&e&&e.addEventListener("click",(function(e){e.target===this&&s()}));var u=document.getElementById("right-sidebar-closed");u&&u.addEventListener("click",s),c.addEventListener("click",(function(){i.forEach((function(e){return e.classList.remove("closed")})),d.textContent="Обратная связь",e.classList.remove("closed")})),n.addEventListener("click",(function(){i.forEach((function(e){return e.classList.remove("closed")})),d.textContent="Обратная связь",a(),e.classList.remove("closed")})),r.forEach((function(t){t.addEventListener("click",(function(){a(),e.classList.remove("closed"),d.textContent="Заказать звонок",i.forEach((function(e){return e.classList.add("closed")}))}))}))}()}]);
//# sourceMappingURL=bundle.js.map