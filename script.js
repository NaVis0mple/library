const myLibrary = []

function Book (bookName, arthur, readtime, finished) {
  this.bookName = bookName
  this.arthur = arthur
  this.readtime = readtime
  this.finished = finished
}
// add book by input to library as an object
function addBookToLibrary (bookName, arthur, readtime, finished) {
  const newBook = new Book(bookName, arthur, readtime, finished)
  myLibrary.push(newBook)
  newdiv()
}

const buttonOK = document.getElementById('ok')
buttonOK.addEventListener('click', () => {
  const bookName = document.getElementById('bookName').value
  const arthur = document.getElementById('arthur').value
  const readtime = document.getElementById('readtime').value
  const finished = document.getElementById('finished').checked.toString()
  if (bookName && arthur && readtime) {
    addBookToLibrary(bookName, arthur, readtime, finished)
    document.getElementById('bookName').value = ''
    document.getElementById('arthur').value = ''
    document.getElementById('readtime').value = ''
    document.getElementById('finished').checked = false
  }
})
// toggle button to add book
const button = document.getElementById('add')
button.addEventListener('click', (e) => {
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
  printarea.innerHTML = ''
  // // 4div nameCard arthurCard readtimeCard finishedCard
  myLibrary.forEach((book) => {
    const container = document.createElement('div')
    printarea.appendChild(container)

    const keys = ['bookName', 'arthur', 'readtime', 'finished']
    keys.forEach((key) => {
      const element = document.createElement('div')
      const content = document.createTextNode(book[key])
      element.classList.add(key)
      element.appendChild(content)
      container.appendChild(element)
    })
  })
  finishedtoggle()
  booklist()
}
// add true false eventlistener toggle to about finished
function finishedtoggle () {
  const finishedevent = document.querySelectorAll('.finished')
  finishedevent.forEach((element) => {
    if (element.innerHTML === 'true') {
      element.classList.add('green')
    } else if (element.innerHTML === 'false') {
      element.classList.add('red')
    }
    element.addEventListener('click', () => {
      if (element.innerHTML === 'true') {
        element.innerHTML = 'false'
        element.classList.add('red')
        element.classList.remove('green')
        backFinishedValue()
      } else if (element.innerHTML === 'false') {
        element.innerHTML = 'true'
        element.classList.add('green')
        element.classList.remove('red')
        backFinishedValue()
      }
    })
  })
}
// to set the value back to mylibrary object
function backFinishedValue () {
  const finishedDivs = document.querySelectorAll('.finished')
  myLibrary.forEach((book, index) => {
    book.finished = finishedDivs[index].innerHTML
  })
}

// list of bookname
function booklist () {
  const list = document.getElementById('list')
  list.innerHTML = ''
  const nametitle = myLibrary.map((item) => {
    return item.bookName
  })
  nametitle.forEach((name, index) => {
    const li = document.createElement('li')
    const liname = document.createTextNode(`${index + 1}. ${name}`)
    li.classList.add(index)
    list.appendChild(li)
    li.appendChild(liname)
  })
  deletefunction()
}
// delete function toggle
const buttonDelete = document.getElementById('delete')
buttonDelete.addEventListener('click', () => {
  buttonDelete.classList.toggle('deleteon')
  if (buttonDelete.innerHTML === 'DeleteOff') {
    buttonDelete.innerHTML = 'DeleteOn'
  } else {
    buttonDelete.innerHTML = 'DeleteOff'
  }
})

// delete function
function deletefunction () {
  const allli = document.querySelectorAll('li')
  allli.forEach((li, index) => {
    li.addEventListener('click', () => {
      if (buttonDelete.className === 'deleteon') {
        console.log(index)
        myLibrary.splice(index, 1)
        booklist()
        newdiv()
      }
    })
  })
}
