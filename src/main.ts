import './style.css'

type State = {
    page: "hollixton" | "girls" | "guys" | "sale"
    modal: 'search' | 'bag' | ''

}
let state: State = {
 page:'sale',
 modal:'bag'
}

function renderHeader(appEl: Element) {
    let headerEl = document.createElement('header')

    let hollixtonLink = document.createElement('a')
    hollixtonLink.textContent = 'Hollixton'
    hollixtonLink.addEventListener('click', function () {
        state.page = 'hollixton'
        render()
    })

    let girlsLink = document.createElement('a')
    girlsLink.textContent = 'Girls'
    girlsLink.addEventListener('click', function () {
        state.page = 'girls'
        render()
    })


    let guysLink = document.createElement('a')
    guysLink.textContent = 'Guys'
    guysLink.addEventListener('click', function () {
        state.page = 'guys'
        render()
    })


    let saleLink = document.createElement('a')
    saleLink.textContent = 'Sale'
    saleLink.addEventListener('click', function () {
        state.page = 'sale'
        render()
    })


    headerEl.append(hollixtonLink, girlsLink, guysLink, saleLink)
    appEl.append(headerEl)
}

function renderHomePage(appEl:Element) {
    let mainEl = document.createElement('main')

    let titleEl = document.createElement('h1')
    titleEl.textContent = 'Hollixton'

    let subtitleEl = document.createElement('h2')
    subtitleEl.textContent ='Hope you enjoy our site!'

    mainEl.append(titleEl, subtitleEl) 
    appEl.append(mainEl) 
}

function renderGirlsPage(appEl:Element) {
    let mainEl = document.createElement('main')

    let titleEl = document.createElement('h1')
    titleEl.textContent = 'Girls'

    mainEl.append(titleEl) 
    appEl.append(mainEl) 
}

function renderGuysPage(appEl:Element) {
    let mainEl = document.createElement('main')

    let titleEl = document.createElement('h1')
    titleEl.textContent = 'Guys'

    mainEl.append(titleEl) 
    appEl.append(mainEl)
}

function renderSalePage(appEl:Element) {
    let mainEl = document.createElement('main')

    let titleEl = document.createElement('h1')
    titleEl.textContent = 'Sale'

    mainEl.append(titleEl)
    appEl.append(mainEl)
}
function renderSearchModal(appEl:Element) {
    let wrapperEl = document.createElement('div')
    wrapperEl.className = 'modal-wrapper'

let containerEl = document.createElement('div')
containerEl.className = 'modal-container'

let closeButton = document.createElement('button')
closeButton.textContent = 'X'


let titleEl = document.createElement('h2')
titleEl.textContent = 'Search'

let formEl = document.createElement('form')

let inputEl = document.createElement('input')
formEl.append(inputEl)

containerEl.append(closeButton, titleEl, formEl)
wrapperEl.append(containerEl)
appEl.append(wrapperEl)
}
function renderBaghModal() {
    
}

function render () {
let appEl = document.querySelector<HTMLElement>('#app')
if (appEl === null) return
appEl.textContent = ''

renderHeader(appEl)

if (state.page === 'hollixton') renderHomePage(appEl)

if (state.page === 'girls') renderGirlsPage(appEl)

if (state.page === 'guys') renderGuysPage(appEl)

if (state.page === 'sale') renderSalePage(appEl)

renderSearchModal(appEl)

}
render()

