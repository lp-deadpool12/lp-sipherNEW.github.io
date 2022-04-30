"use strict";

var headerSearch = document.querySelector('.header__search-lang');

if (headerSearch) {
  headerSearch.addEventListener("click", function (e) {
    headerSearch.classList.toggle('active');
  });
}