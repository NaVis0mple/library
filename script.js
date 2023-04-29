const myLibrary = []

function Book (bookName, arthur, readtime, finished) {
  this.bookName = bookName
  this.arthur = arthur
  this.readtime = readtime
  this.finished = finished
}
// add book by user input to library as an object
function addBookToLibrary (bookName,arthur,readtime,finished) {
  // const bookName = document.getElementById('bookName').value
  // const arthur = document.getElementById('arthur').value
  // const readtime = document.getElementById('readtime').value
  // const finished = document.getElementById('finished').checked
  const newBook = new Book(bookName, arthur, readtime, finished)
  myLibrary.push(newBook)
}

const buttonOK = document.getElementById('ok')
const buttonSummit = buttonOK.addEventListener('click', () => {
  const bookName = document.getElementById('bookName').value
  const arthur = document.getElementById('arthur').value
  const readtime = document.getElementById('readtime').value
  const finished = document.getElementById('finished').checked
  if (bookName && arthur && readtime) {
    addBookToLibrary(bookName,arthur,readtime,finished)
    newdiv (bookName,arthur,readtime,finished)
    
    document.getElementById('bookName').value = ''
    document.getElementById('arthur').value = ''
    document.getElementById('readtime').value = ''
    document.getElementById('finished').checked = false
  }
  
})

// toggle button to add book
const button = document.getElementById('add')
const toggle = button.addEventListener('click', (e) => {
  const form = document.getElementById('form')
  if (form.className === 'hidden') {
    form.className = ''
  } else if (form.className === '') {
    form.className = 'hidden'
  }
})
// print object  printarea->div->4div
function newdiv (bookName,arthur,readtime,finished) {
  const printarea = document.getElementById('printarea')
  // div container
  const container = document.createElement('div')
  printarea.appendChild(container)
  // // 4div nameCard arthurCard readtimeCard finishedCard
  // const nameCard = document.createElement('div')  
  // container.appendChild(nameCard)
  // const content1 = document.createTextNode(bookName)  
  // nameCard.appendChild(content1)
  
  // const arthurCard = document.createElement('div')  
  // container.appendChild(arthurCard)
  // const content2 = document.createTextNode(arthur)  
  // arthurCard.appendChild(content2)
  
  // const readtimeCard = document.createElement('div')  
  // container.appendChild(readtimeCard)
  // const content3 = document.createTextNode(readtime)  
  // readtimeCard.appendChild(content3)

  // const finishedCard = document.createElement('div')  
  // container.appendChild(finishedCard)
  // const content4 = document.createTextNode(finished)  
  // finishedCard.appendChild(content4)
  const keys = [bookName, arthur, readtime, finished]
  keys.forEach(key=>{
    const element = document.createElement('div')
    const content = document.createTextNode(key)
    element.appendChild(content)
    container.appendChild(element)
  })
}
