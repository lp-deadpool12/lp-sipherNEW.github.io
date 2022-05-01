'use strict'
// FEEDBACK
    
    
document.addEventListener('click', (e) => {
    let clickedElem = e.target
    
    const feedbackBtn = document.querySelector('.footer__feedback');
    const feedbackBlock = document.querySelector('.footer__developers');
    
    if (clickedElem == feedbackBtn) {
        feedbackBlock.style.display = 'block'
    setTimeout(()=>{feedbackBlock.classList.add('active');}, 500)
    
    } else if (! e.composedPath().includes(document.querySelector('.developers__content'))) {
        feedbackBlock.classList.remove('active');
     }
})