'use strict'



document.addEventListener('click', (e)=>{
   let clicedElem = e.target
   const settingsMenu = document.querySelector('.settings-menu')
   const openSettingsMenuBtn = document.querySelector(".header__menu")
   const headerLangSearchMenu = document.querySelector('.header__search-lang');
   const headerLangSearchBtn = document.querySelector('.search-lang__btn')

   console.log(clicedElem);

   if (clicedElem == openSettingsMenuBtn || clicedElem.parentNode == openSettingsMenuBtn) {
      console.log(clicedElem);
      settingsMenu.classList.add('settings-menu-active');
   }else if(clicedElem.classList.contains('settings-menu__close-cross')){
      settingsMenu.classList.remove('settings-menu-active');
   }



   if (clicedElem == headerLangSearchBtn || clicedElem == headerLangSearchMenu) {
      console.log(headerLangSearchMenu);
      headerLangSearchMenu.classList.add('active');
   }else if (! e.composedPath().includes(headerLangSearchMenu)) {
      headerLangSearchMenu.classList.remove('active');
   }
})

