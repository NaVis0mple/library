const myLibrary = []

function Book (bookName, arthur, readtime, finished) {
  this.bookName = bookName
  this.arthur = arthur
  this.readtime = readtime
  this.finished = finished
  this.try = function () {
    console.log(bookName)
  }
}
// add book by user input to library as an object
function addBookToLibrary () {
  const bookName = document.getElementById('bookName').value
  const arthur = document.getElementById('arthur').value
  const readtime = document.getElementById('readtime').value
  const finished = document.getElementById('finished').checked
  const newBook = new Book(bookName, arthur, readtime, finished)
  myLibrary.push(newBook)
}

const buttonOK = document.getElementById('ok')
const buttonSummit = buttonOK.addEventListener('click', () => {
  const bookName = document.getElementById('bookName').value
  const arthur = document.getElementById('arthur').value
  const readtime = document.getElementById('readtime').value
  if (bookName && arthur && readtime) {
    addBookToLibrary()
    newdiv()
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
function newdiv () {
  const printarea = document.getElementById('printarea')
  const newcard = document.createElement('div')
  printarea.appendChild(newcard)
  for (let i = 0; i < 4; i++) {
    const titleInCard = document.createElement('div')
    newcard.appendChild(titleInCard)
  }
}
