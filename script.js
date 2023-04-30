const myLibrary = []

function Book (bookName, arthur, readtime, finished) {
  this.bookName = bookName
  this.arthur = arthur
  this.readtime = readtime
  this.finished = finished
}
// add book by user input to library as an object
function addBookToLibrary (bookName, arthur, readtime, finished) {
  const newBook = new Book(bookName, arthur, readtime, finished)
  myLibrary.push(newBook)
}

const buttonOK = document.getElementById('ok')
const buttonSummit = buttonOK.addEventListener('click', () => {
  const bookName = document.getElementById('bookName').value
  const arthur = document.getElementById('arthur').value
  const readtime = document.getElementById('readtime').value
  const finished = document.getElementById('finished').checked.toString()
  if (bookName && arthur && readtime) {
    addBookToLibrary(bookName, arthur, readtime, finished)
    newdiv(bookName, arthur, readtime, finished)

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
function newdiv (bookName, arthur, readtime, finished) {
  const printarea = document.getElementById('printarea')
  // div container
  const container = document.createElement('div')
  printarea.appendChild(container)
  // // 4div nameCard arthurCard readtimeCard finishedCard
  const title = [bookName, arthur, readtime, finished]
  const keys = ['bookName', 'arthur', 'readtime', 'finished']
  keys.forEach((key, index) => {
    const element = document.createElement('div')
    const content = document.createTextNode(title[index])
    element.classList.add(key)
    element.appendChild(content)
    container.appendChild(element)
    finishedtoggle()
  })
}
// add true false eventlistener toggle to about finished
function finishedtoggle () {
  const finishedevent = document.querySelectorAll('.finished')
  finishedevent.forEach((element) => {
    element.addEventListener('click', (e) => {
      if (element.innerHTML === 'true') {
        element.innerHTML = 'false'
        backFinishedValue()
      } else if (element.innerHTML === 'false') {
        element.innerHTML = 'true'  
        backFinishedValue()
      }
      
    })
  })
}

// to set the value back to mylibrary object
function backFinishedValue() {
  const finishedDivs = document.querySelectorAll('.finished')
  myLibrary.forEach((book, index) => {
    book.finished = finishedDivs[index].innerHTML
  })
}