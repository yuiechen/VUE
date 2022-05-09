const i1 = document.querySelector('input')
const l1 = document.querySelector('ul')
function addPlan() {
    const value = i1.value
    const item = document.createElement('li')
    item.textContent = value
    l1.appendChild(item)
    i1.value = ''
}
const b1 = document.querySelector('button')
b1.addEventListener('click', addPlan)
