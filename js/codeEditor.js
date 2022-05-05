'use strict'

const settingsMenu = document.querySelector('.settings-menu')
const openSettingsMenuBtn = document.querySelector(".header__settings-menu")
const headerLangSearchMenu = document.querySelector('.header__search-lang');
const headerLangSearchBtn = document.querySelector('.header__btn-search-lang')

let tabsConunter = 1

let getTabs = document.querySelectorAll(".tabs__item")
let getTabsContent = document.querySelectorAll("tabs__code")

const tabsContainer = document.querySelector('.tabs__items') 
const tabsContentContainer = document.querySelector('.tabs__content') 
let currentTab = document.querySelector(".tab-active");
let currentTabContent = document.querySelector(".tabs__code-active");

function createTab() {
  let tab = document.createElement('div')
  tab.classList.add('tabs__item')
  tab.setAttribute('data-tab', tabsConunter)
  tab.innerHTML = ` untitled <div class="tab__close-cross">✕</div>`
  tabsContainer.insertAdjacentElement('beforeend', tab)
  createTabContent()
  tabsConunter++
}
function createTabContent() {
  let tabContent = document.createElement('div')
  tabContent.setAttribute('data-tab-content', tabsConunter)
  tabContent.classList.add('tabs__code')
  
  tabContent.innerHTML = ` content ${tabsConunter}`
  tabsContentContainer.insertAdjacentElement('beforeend', tabContent)

}
function closeTab(tab) {
   
}

function selectTab(tab) { 
   //   for (let i = 0; i < getTabs.length; i++) {
   //      const element = getTabs[i];
      
   //      element.classList.remove('tab-active')

   //   }
      

   currentTab.classList.remove('tab-active')
   currentTab = tab
   currentTab.classList.add('tab-active')
   let currentTabDataAtrr = currentTab.getAttribute('data-tab')
   currentTabContent.classList.remove('tabs__code-active')
   currentTabContent = document.querySelector(`div[data-tab-content = "${currentTabDataAtrr}"]`)
   currentTabContent.classList.add("tabs__code-active")

}



document.addEventListener('click', (e)=>{
  
  let clicedElem = e.target

  
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
   //   / createTabContent()      
   }
   else if (clicedElem.hasAttribute("data-tab")){
      selectTab(clicedElem)
      
      //console.log(clicedElem.previousSibling);
   }else if(clicedElem.classList.contains('tab__close-cross')){
      clicedElem.parentNode.remove()
   }
})