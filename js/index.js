//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

var element = document.createElement('div');

element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';

document.body.appendChild(element);
element.style.textAlign = 'center';
