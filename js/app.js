let groupTab = document.getElementById('list-tab')
let tabContent = document.getElementById('nav-tabContent')
let links = document.querySelectorAll('.services-link')
let listItems = document.querySelectorAll('.list-group-item')
let tabPanels = document.querySelectorAll('.tab-pane')

function scrollToElement() {
   tabContent.scrollIntoView({ block: 'center', behavior: 'smooth' })
}

function hideTab() {
   for (let i = 0; i < tabPanels.length; i++) {
      tabPanels[i].classList.remove('active', 'show')
   }
}
function showTab() {
   tabPanels[value].classList.add('active', 'show')
   scrollToElement()
}

for (let i = 0; i < links.length; i++) {
   links[i].addEventListener('click', function () {
      localStorage.setItem('index', i)
   })
}
let value = +localStorage.getItem('index')

hideTab()
showTab()
localStorage.clear()
groupTab.addEventListener('click', scrollToElement)
