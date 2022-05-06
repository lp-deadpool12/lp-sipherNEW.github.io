/*
Приблизительная структура табов:
--tabs
----tabs__body
------tabs__items
--------tabs__item
----------tab__close-cross
--------tab__create
----tabs__content
------tabs__code
*/
function $(el) {
    return document.querySelector(el)
}

function $$(el) {
    return document.querySelector(el)
}

class Tabs {
    // Для подсчета tabs__code
    _temp = 1
    _tabsBody
    _tabsContent
    _tabsItems
    _tabsItem
    _tabClose
    _tabCreate
    _tabsCode

    constructor(tabs) {
        this.tabErrorCheck(tabs)
        this.takeTabsElements($(`.${tabs}`))
        this.tabs = $(`.${tabs}`);
        this.tabs.addEventListener('click', this.tabsEvents.bind(this))
    }

    // Метод для вызова событий
    tabsEvents(event) {
        const target = event.target
        const isCreateBtn = target.classList.contains('tab__create')
        const isDeleteBtn = target.classList.contains('tab__close-cross')
        const isChooseBtn = target.classList.contains('tabs__item') || !!target.closest('.tabs__item') && !target.classList.contains('tab__close-cross')
        if (isCreateBtn) {
            this.createTabs()
        }
        if (isDeleteBtn) {
            this.deleteTabs(event)
        }
        if (isChooseBtn) {
            this.chooseTabs(event)
        }
    }

    // Определяет элементы табов внуть свойств
    takeTabsElements(tabs) {
        const tabs_body = tabs.querySelector('.tabs__body')
        const tabs_content = tabs.querySelector('.tabs__content')
        const tabs_items = tabs.querySelector('.tabs__items')
        const tabs_item_all = tabs.querySelectorAll('.tabs__item')
        const tab_close = tabs.querySelector('.tab__close-cross')
        const tab_create = tabs.querySelector('.tab__create')
        const tabs_code_all = tabs.querySelectorAll('.tabs__code')
        if (!tabs_body) {
            throw new TypeError('Tabs: tabs__body not exist')
        }
        if (!tabs_content) {
            throw new TypeError('Tabs: tabs_content not exist')
        }
        if (!tabs_items) {
            throw new TypeError('Tabs: tabs_items not exist')
        }
        if (!tabs_item_all) {
            throw new TypeError('Tabs: tabs_item not exist')
        }
        if (!tab_close) {
            throw new TypeError('Tabs: tab_close not exist')
        }
        if (!tab_create) {
            throw new TypeError('Tabs: tab_create not exist')
        }
        if (!tabs_code_all) {
            throw new TypeError('Tabs: tabs_code not exist')
        }
        this._tabsBody = tabs_body
        this._tabsContent = tabs_content
        this._tabsItems = tabs_items
        this._tabsItem = tabs_item_all
        this._tabClose = tab_close
        this._tabCreate = tab_create
        this._tabsCode = tabs_code_all

    }

    // Метод проверяет на правильность аргумента экземпляра класса для табов. Выражение \\\ const tabs = new Tabs('tabs')
    tabErrorCheck(potentialError) {
        let checkElement = $(`.${potentialError}`)
        if (typeof potentialError !== 'string') {
            throw new TypeError('Tabs: argument must be a string')
        }
        if (!checkElement) {
            throw new TypeError('Tabs: element not found')
        }
        if (potentialError.includes('.')) {
            throw new TypeError('Tabs: element must be without \'.\' use \'tabs\' instead of \'.tabs\'')
        }
    }

    // Метод для создания нового таба и текстового поля для кода
    createTabs() {
        // Создание новой вкладки
        const tabs_item = document.createElement('div')
        tabs_item.className = 'tabs__item'

        const span = document.createElement('span')
        span.innerText = 'untitled'

        const tabs_close = document.createElement('button')
        tabs_close.className = 'tab__close-cross'
        tabs_close.innerText = '✕'

        tabs_item.insertAdjacentElement('afterbegin', span)
        tabs_item.insertAdjacentElement('beforeend', tabs_close)

        // Помещение новой вкладки ко всем вкладкам
        this._tabsItems.insertAdjacentElement('beforeend', tabs_item)

        // =====================================================================

        // Создание нового текстового поля для кода
        const tabs_code = document.createElement('div')
        tabs_code.className = 'tabs__code'
        tabs_code.innerText = `some code ${this._temp}`
        this._temp++

        // Помещение нового текстового поля для кода
        this._tabsContent.insertAdjacentElement('beforeend', tabs_code)

        // Изменения табов
        this._tabsItem = this.tabs.querySelectorAll('.tabs__item')
        this._tabsCode = this.tabs.querySelectorAll('.tabs__code')
    }

    // Метод для удаление табов
    deleteTabs(event) {
        const target = event.target
        // Определение констант
        const tabs_item_on_click = target.closest('.tabs__item')
        const tabs_item_list = [...this._tabsItem]
        const tabs_code_list = [...this._tabsCode]
        const index_element = +tabs_item_list.findIndex((e) => {
            return e === tabs_item_on_click
        })
        // Удаление элементов
        if (tabs_item_list.length > 1 || tabs_code_list.length > 1) {
            tabs_code_list[index_element].remove()
            tabs_item_list[index_element].remove()
        }

        // Изменения табов
        this._tabsItem = this.tabs.querySelectorAll('.tabs__item')
        this._tabsCode = this.tabs.querySelectorAll('.tabs__code')
    }

    //Метод для переключение табов
    chooseTabs(event) {
        const target = event.target

        // Элемент на который нажали
        const tabs_item_on_click = target.closest('.tabs__item')

        // Получение элементов tabsItem и tabsCode
        const tabs_item_list = [...this._tabsItem]
        const tabs_code_list = [...this._tabsCode]

        // Получение иднекса активного элемента
        const index_element = +tabs_item_list.findIndex((e) => {
            return e === tabs_item_on_click
        })

        // Удаление активного класса у активного элемента
        tabs_item_list.forEach((e) => {
            if (e.classList.contains('tab-active')) {
                e.classList.remove('tab-active')
            }
        })
        tabs_code_list.forEach((e) => {
            if (e.classList.contains('tabs__code-active')) {
                e.classList.remove('tabs__code-active')
            }
        })

        // Добавление активного класса
        tabs_item_list[index_element].classList.add('tab-active')
        tabs_code_list[index_element].classList.add('tabs__code-active')
    }


}

const tabs = new Tabs('tabs')

function showLang() {
    // Константы
    const lang_btn = document.querySelector('.header__btn-search-lang')
    const lang_container = document.querySelector('.header__search-lang')
    document.body.addEventListener('click', function (e) {
        // Удаление класса не по клику на элементы search-lang
        if (!(e.target.classList.contains('header__search-lang') || e.target.classList.contains('header__btn-search-lang') || e.target.classList.contains('header__block-search-lang') || e.target.classList.contains('header__input-search-lang') || e.target.classList.contains('header__list-search-lang') || e.target.classList.contains('header__lang') || e.target.classList.contains('header__current-lang'))) {
            lang_container.classList.remove('active')
        }
        // Добавление класса
        if (e.target === lang_btn) {
            lang_container.classList.add('active')
        }
    })
}

function selectLang() {
    // Константы
    const current_lang_container = document.querySelector('.header__btn-search-lang')
    const lang_list = [...document.querySelectorAll('.header__lang')]
    const lang__container = document.querySelector('.header__search-lang')
    const current_lang_hint = document.querySelector('.header__current-lang')

    // Обработчик события на каждый элемент
    lang_list.forEach((e) =>{
        e.addEventListener('click', function (ev){
            // Изменение текста
            current_lang_container.innerText = ev.target.innerText
            current_lang_hint.innerText = `current ${ev.target.innerText}`
            // Закрытие всплывашки
            if (lang__container.classList.contains('active')){
                lang__container.classList.remove('active')
            }
            // Убираем у всех элементов из списка hidden
            lang_list.forEach((elem) =>{
                if (elem.hidden){
                    elem.hidden = false
                }
            })
            // Добавляем hidden
            ev.target.hidden = true
        })
    })
}

selectLang()
showLang()