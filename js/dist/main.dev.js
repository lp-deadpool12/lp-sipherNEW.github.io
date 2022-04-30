'use strict'; // FEEDBACK

var feedbackBtn = document.querySelector('.footer__feedback');
var feedbackBlock = document.querySelector('.footer__developers');
feedbackBtn.addEventListener("click", function (e) {
  feedbackBlock.classList.add('active');
});