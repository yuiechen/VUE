const button1 = document.querySelector('button')
const i1 = document.querySelector('input')
const l1 = document.querySelector('ul')
function addPlan():void {
    const item = document.createElement('li')
    item.textContent = i1.value
    l1.appendChild(item)
    i1.value = ''
}
button1.addEventListener('click', addPlan)
export {}