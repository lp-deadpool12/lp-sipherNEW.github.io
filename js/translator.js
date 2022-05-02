const translatorBlock = document.querySelector('[data-translator-block]'); // блок с поля ввода для транслейта, открывается по клике на элемент меню translator
const translatorMenuItem = document.querySelector('[data-translator-settings-item]'); // элемент settings-menu - translator, по клику на который вкл\выкл поля ввода для транслейта
const extendIcon = document.querySelector('[data-extend-icon]'); // иконка, которая переворачивается, показывая скрыто или открыто меню ввода для translate
const inputEN = document.querySelector('[name="en-text"]'); // поле ввода\вывода английского текста
const inputRU = document.querySelector('[name="ru-text"]'); // поле ввода\вывода русского текста
const reverseLangBtn = document.querySelector('[data-reverse-lang]'); // кнопка реверса языка перевода: en->ru или ru->en
const translateBtn = document.querySelector('[data-translate-btn]'); // главная кнопка, идет запрос на API и приходит перевод

// показываем/скрываем поля ввода для транслейта при клике на єлемент settings-menu - translator
translatorMenuItem.addEventListener('click', () => {
    translatorBlock.classList.toggle('js-translator-show') // показать/скрыть блок с полями ввода для транслейта
    extendIcon.classList.toggle('js-extend-icon-rotate') // переворачивать иконку, в зависимости скрыто или открыто меню ввода для translate
})


// логика для button reverse lang
reverseLangBtn.addEventListener('click', () => {
    inputRU.parentNode.classList.toggle('js-input-reverse')
})