'use strict'

const headerSearch = document.querySelector('.header__search-lang');
if (headerSearch) {
   headerSearch.addEventListener("click", function (e) {
      headerSearch.classList.toggle('active');
   });
}
document.addEventListener('click', (e)=>{
   let clicedElem = e.target
   const settingsMenu = document.querySelector('.settings-menu')
   const openSettingsMenuBtn = document.querySelector(".header__menu")


   if (clicedElem == openSettingsMenuBtn || clicedElem.parentNode == openSettingsMenuBtn) {
      console.log(clicedElem);
      settingsMenu.classList.add('settings-menu-active');
   }else if(clicedElem.classList.contains('settings-menu__close-cross')){
      settingsMenu.classList.remove('settings-menu-active');
   }

})

