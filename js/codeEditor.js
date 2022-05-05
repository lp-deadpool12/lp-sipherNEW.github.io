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
    return document.querySelectorAll(el)
}

class Tabs {
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
        this.tabs = tabs;
        $(`.${tabs}`).addEventListener('click', this.tabsEvents.bind(this))
    }

    // Метод для вызова событий
    tabsEvents(event) {
        const target = event.target
        const isCreateBtn = target.classList.contains('tab__create')
        const isDeleteBtn = target.classList.contains('tab__close-cross')
        if (isCreateBtn) {
            this.createTabs()
        }
        if (isDeleteBtn) {
            this.deleteTabs(event)
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
    createTabs(event) {
        const tabs = $(`.${this.tabs}`)
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
        tabs_code.innerText = 'some code'

        // Помещение нового текстового поля для кода
        this._tabsContent.insertAdjacentElement('beforeend', tabs_code)

        // Изменения табов
        this._tabsItem = tabs.querySelectorAll('.tabs__item')
        this._tabsCode = tabs.querySelectorAll('.tabs__code')
    }

    // Метод для удаление табов
    deleteTabs(event) {
        const tabs = $(`.${this.tabs}`)
        const target = event.target
        // Определение констант
        const tabs_item_on_click = target.closest('.tabs__item')
        const tabs_item_list = [...this._tabsItem]
        const tabs_code_list = [...this._tabsCode]
        const index_element = tabs_item_list.findIndex((e) => {
            return e === tabs_item_on_click
        })
        // Удаление элементов
        if (tabs_item_list.length > 1 || tabs_code_list.length > 1) {
            tabs_code_list[index_element].remove()
            tabs_item_list[index_element].remove()
        }

        // Изменения табов
        this._tabsItem = tabs.querySelectorAll('.tabs__item')
        this._tabsCode = tabs.querySelectorAll('.tabs__code')
    }

}

const tabs = new Tabs('tabs')