"use strict";

let tabsConunter = 1;
let getTabs = document.querySelectorAll("div[data-tab]");
let getTabsContent = document.querySelectorAll("div[data-tab-content]");
const tabsContainer = document.querySelector(".tabs__body");
const tabsContentContainer = document.querySelector(".tabs__content");

function createTab() {
  let tab = document.createElement("div");
  tab.classList.add("tabs__item");
  tab.setAttribute("data-tab", tabsConunter);
  tab.innerHTML = ` untitled <div class="tab__close">✕</div>`;
  tabsContainer.insertAdjacentElement("beforeend", tab);
  tabsConunter++;
  
}
function createTabContent() {
  let tabContent = document.createElement("div");
  tabContent.classList.add("tabs__item");
  tab.setAttribute("data-tab", tabsConunter);
  tab.innerHTML = ` untitled <div class="tab__close">✕</div>`;
  tabsContainer.insertAdjacentElement("beforeend", tab);
  tabsConunter++;
}

function selectTab(clickedTab) {
  for (let i = 0; i < getTabs.length; i++) {
    const element = getTabs[i];

    element.classList.remove("tab-active");
  }
  clickedTab.classList.add("tab-active");
}

document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  const settingsMenu = document.querySelector(".settings-menu");
  const openSettingsMenuBtn = document.querySelector(".header__menu");
  const headerLangSearchMenu = document.querySelector(".header__search-lang");
  const headerLangSearchBtn = document.querySelector(".search-lang__btn");

  if (
    clickedElem == openSettingsMenuBtn ||
    clickedElem.parentNode == openSettingsMenuBtn
  ) {
    settingsMenu.classList.add("settings-menu-active");
  } else if (clickedElem.classList.contains("settings-menu__close-cross")) {
    settingsMenu.classList.remove("settings-menu-active");
  }

  if (clickedElem == headerLangSearchBtn || clickedElem == headerLangSearchMenu) {
    headerLangSearchMenu.classList.add("active");
  } else if (!e.composedPath().includes(headerLangSearchMenu)) {
    headerLangSearchMenu.classList.remove("active");
  }

  if (clickedElem.hasAttribute("data-tab-create")) {
    createTab();
    console.log(getTabs);
  } else if (clickedElem.hasAttribute("data-tab")) {
    selectTab(clickedElem);
    console.log(clickedElem.previousSibling);
  } else if (clickedElem.classList.contains("tab__close")) {
    clickedElem.parentNode.remove();
  }
});
