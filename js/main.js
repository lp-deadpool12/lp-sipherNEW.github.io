'use strict'
// FEEDBACK
const feedbackBtn = document.querySelector('.footer__feedback');
const feedbackBlock = document.querySelector('.footer__developers');
feedbackBtn.addEventListener("click", function (e){
    feedbackBlock.classList.add('active');
})
