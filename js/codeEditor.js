'use strict'

document.addEventListener('click', (e)=>{
   let clicedElem = e.target
   const settingsMenu = document.querySelector('.settings-menu')
   const openSettingsMenuBtn = document.querySelector(".header__menu")
   const headerLangSearchMenu = document.querySelector('.header__search-lang');
   const headerLangSearchBtn = document.querySelector('.search-lang__btn')
   
   let tabsConunter = 1
   let getTabs = document.querySelectorAll("div[data-tab]")
   let getTabsContent = document.querySelectorAll("div[data-tab-content]")
   const tabsContainer = document.querySelector('.tabs__body') 
   const tabsContentContainer = document.querySelector('.tabs__content') 


   function createTab() {
      let tab = document.createElement('div')
      tab.classList.add('tabs__item')
      tab.setAttribute('data-tab', tabsConunter)
      tab.innerHTML = ` untitled <div class="tab__close">✕</div>`
      tabsContainer.insertAdjacentElement('beforeend', tab)
      tabsConunter++
   }

   function selectTab() {
      for (let i = 0; i < getTabs.length; i++) {
         const element = getTabs[i];
         
         element.classList.remove('tab-active')

      }
   }

   if (clicedElem == openSettingsMenuBtn || clicedElem.parentNode == openSettingsMenuBtn) {
      settingsMenu.classList.add('settings-menu-active');
   }else if(clicedElem.classList.contains('settings-menu__close-cross')){
      settingsMenu.classList.remove('settings-menu-active');
   }


   if (clicedElem == headerLangSearchBtn || clicedElem == headerLangSearchMenu) {

      headerLangSearchMenu.classList.add('active');
   }else if (! e.composedPath().includes(headerLangSearchMenu)) {
      headerLangSearchMenu.classList.remove('active');
   }

   if (clicedElem.hasAttribute("data-tab-create")) {
      createTab()
   }
   else if (clicedElem.hasAttribute("data-tab")){
      selectTab()
      clicedElem.classList.add('tab-active')
      console.log(clicedElem.previousSibling);
   }else if(clicedElem.classList.contains('tab__close')){
      clicedElem.parentNode.remove()
   }
})