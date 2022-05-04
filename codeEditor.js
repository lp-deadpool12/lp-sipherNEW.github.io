'use strict'
const tabsElements ={
   tabsCounter: 1,
   settingsMenu: document.querySelector('.settings-menu'),
   openSettingsMenuBtn: document.querySelector(".header__settings-menu"),
   headerLangSearchMenu: document.querySelector('.header__search-lang'),
   headerLangSearchBtn: document.querySelector('.header__btn-search-lang'),
   getTabs: document.querySelectorAll("div[data-tab]"),
   getTabsContent: document.querySelectorAll("div[data-tab-content]"),
   tabsContainer: document.querySelector('.tabs__items'),
   tabsContentContainer: document.querySelector('.tabs__content')
}
function createTab() {
   let tab = document.createElement('div')
   tab.classList.add('tabs__item')
   tab.setAttribute('data-tab', `${tabsElements.tabsCounter}`)
   tab.innerHTML = ` untitled <div class="tab__close-cross">✕</div>`
   tabsElements.tabsContainer.insertAdjacentElement('beforeend', tab)
   tabsElements.tabsCounter++
}
function selectTab() {
   for (let i = 0; i < tabsElements.getTabs.length; i++) {
      const element = tabsElements.getTabs[i];
      element.classList.remove('tab-active')
   }
}
document.addEventListener('click', (e)=>{
   let clickedElem = e.target

   if (clickedElem === tabsElements.openSettingsMenuBtn || clickedElem.parentNode === tabsElements.openSettingsMenuBtn) {
      tabsElements.settingsMenu.classList.add('settings-menu-active');
   }else if(clickedElem.classList.contains('settings-menu__close-cross')){
      tabsElements.settingsMenu.classList.remove('settings-menu-active');
   }


   if (clickedElem === tabsElements.headerLangSearchBtn || clickedElem === tabsElements.headerLangSearchMenu) {
      tabsElements.headerLangSearchMenu.classList.add('active');

   }else if (! e.composedPath().includes(tabsElements.headerLangSearchMenu)) {

      tabsElements.headerLangSearchMenu.classList.remove('active');
   }

   if (clickedElem.hasAttribute("data-tab-create")) {
      createTab()
   }

   else if (clickedElem.hasAttribute("data-tab")){
      selectTab()
      clickedElem.classList.add('tab-active')

   }else if(clickedElem.classList.contains('tab__close-cross')){
      clickedElem.parentNode.remove()
   }
})