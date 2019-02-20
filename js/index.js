// create a new element and style it
let element = document.createElement('div')
element.innerHTML = 'Hello, DOM!'
element.style.backgroundColor = '#f9f9f9'

// assign it a parent and more styling
document.body.appendChild(element)
element.style.textAlign = 'center'

// new elements and assignment to parents
let ul = document.createElement('ul')
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}
element.appendChild(ul)
ul.style.textAlign = 'left'

// if I wanted to remove anything
// remove one item
ul.removeChild(ul.querySelector('li:nth-child(2)'))
// remove whole list, this is a METHOD
ul.remove() // <--- remember the parentheses
