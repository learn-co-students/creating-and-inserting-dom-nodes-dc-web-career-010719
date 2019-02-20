//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
console.log('connected')

function createList (title) {
  //create parent element and assign innerHTML
  const divEL = document.createElement('div')
  divEL.innerHTML = title
  divEL.style.backgroundColor = '#f9f9f9'
  divEL.style.textAlign = 'center'
  
  //create first child list element
  const ul = document.createElement('ul')
  ul.style.textAlign = 'left'
  
  //append div to body and ul to the div do both appear in te browser
  document.body.appendChild(divEL)
  divEL.appendChild(ul)
  
  return function (listEl) {
    
    for (let i = 0; i < listEl; i++) {
      let li = document.createElement('li')
      li.innerHTML = `This is element number: ${(i + 1).toString()}.`
      ul.appendChild(li)
    }
    
  }
}

createList("Hello DOM!")(4)
