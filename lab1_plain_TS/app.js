"use strict";
exports.__esModule = true;
var button1 = document.querySelector('button');
var i1 = document.querySelector('input');
var l1 = document.querySelector('ul');
function addPlan() {
    var item = document.createElement('li');
    item.textContent = i1.value;
    l1.appendChild(item);
    i1.value = '';
}
button1.addEventListener('click', addPlan);
