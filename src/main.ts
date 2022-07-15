import './style.css'

let state = {
 page:'home'
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

function renderHeader(appEl: Element) {
    let headerEl = document.createElement('header')
    let homeLink = document.createElement('a')
    homeLink.textContent = 'Home'

    let girlsLink = document.createElement('a')
    girlsLink.textContent = 'Girls'

    let guysLink = document.createElement('a')
    guysLink.textContent = 'Guys'

    let saleLink = document.createElement('a')
    saleLink.textContent = 'Sale'

    headerEl.append(homeLink, girlsLink, guysLink, saleLink)
    appEl.append(headerEl)
}
function render () {
let appEl = document.querySelector<HTMLElement>('#app')
if (appEl === null) return
appEl.textContent = ''

renderHeader(appEl)

if (state.page === 'home') renderHomePage(appEl)

if (state.page === 'girls') renderGirlsPage(appEl)

if (state.page === 'guys') renderGuysPage(appEl)

if (state.page === 'sale') renderSalePage(appEl)

}
render()

window.state = state
window.render = render