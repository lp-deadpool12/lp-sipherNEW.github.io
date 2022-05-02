const translatorBlock = document.querySelector('[data-translator-block]'); // блок с поля ввода для транслейта, открывается по клике на элемент меню translator
const translatorMenuItem = document.querySelector('[data-translator-settings-item]'); // элемент settings-menu - translator, по клику на который вкл\выкл поля ввода для транслейта
const extendIcon = document.querySelector('[data-extend-icon]'); // иконка, которая переворачивается, показывая скрыто или открыто меню ввода для translate
const inputEN = document.querySelector('[name="en"]'); // поле ввода\вывода английского текста
const inputRU = document.querySelector('[name="ru"]'); // поле ввода\вывода русского текста
const reverseLangBtn = document.querySelector('[data-reverse-lang]'); // кнопка реверса языка перевода: en->ru или ru->en
const translateBtn = document.querySelector('[data-translate-btn]'); // главная кнопка, идет запрос на API и приходит перевод

// показываем/скрываем поля ввода для транслейта при клике на єлемент settings-menu - translator
translatorMenuItem.addEventListener('click', () => {
    translatorBlock.classList.toggle('js-translator-show') // показать/скрыть блок с полями ввода для транслейта
    extendIcon.classList.toggle('js-extend-icon-rotate') // переворачивать иконку, в зависимости скрыто или открыто меню ввода для translate
})


// логика для button reverse lang
let requestInput = inputEN; // переменная, хранящая инпут для запроса на перевод, по-умолчанию назначен inputEN
let resultInput = inputRU; // переменная, хранящая инпут для результата перевода, по-умолчанию назначен inputRU 
reverseLangBtn.addEventListener('click', () => {
    inputRU.parentNode.classList.toggle('js-input-reverse') //  делает реверс инпутов в html-разметке
    // меняем роли инпутов
    if (inputEN.dataset.role === 'request') { // проверяем значение атрибута data-role, возможны 2 значения: request или result
        inputEN.dataset.role = 'result'; // меняем значание атрибута data-role у inputEN на result
        inputRU.dataset.role = 'request'; // меняем значание атрибута data-role у inputRU на request
        resultInput = inputEN; // инпутом для результата перевода назначаем inputEN
        requestInput = inputRU; // инпутом для запроса на перевод назначаем inputRU
    } else {
        inputEN.dataset.role = 'request'; // меняем значание атрибута data-role у inputEN на request
        inputRU.dataset.role = 'result'; // меняем значание атрибута data-role у inputRU на result
        resultInput = inputRU; // инпутом для результата перевода назначаем inputRU
        requestInput = inputEN; // инпутом для запроса на перевод назначаем inputEN
    }
})

// работа с API переводчика --------------------------------
// получаем результат перевода по клику на кнопку Translate
translateBtn.addEventListener('click', () => {

    /// ----- MyMemor Translated API---------
    // асинхронная функция для получения данных по API 
    const fetchTranslate = async () => {
        try {
            // Шаблон строки запроса с документации: https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it
            // на основе шаблона API делаю запрос, подставляя необходимые значения из переменных
            const res = await fetch(`https://api.mymemory.translated.net/get?q=${requestInput.value}&langpair=${requestInput.name}|${resultInput.name}`);
            return await res.json(); // парсим полученые данные в JSON-формате
        } catch (error) {
            console.log(error.message);
        }
    }
    // вызываем функцию и передаём результат (перевод) в инпут с результатом
    fetchTranslate().then(data => { resultInput.value = data.responseData.translatedText });
})