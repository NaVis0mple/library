// loop to  create card
const myLibrary = []
function Book (name, arthur, readTime, finished) {
  this.name = name
  this.arthur = arthur
  this.readTime = readTime
  this.finished = finished
  this.try = function () {
    console.log(name)
  }
}
// test manually
const bookA = new Book('bookOfShadow', 'Peter', '2012', 'y')
bookA.try()
// add book by user input to library as an object 


// button to add book toggle
const button = document.getElementById('add')
const toggle = button.addEventListener('click', (e) => {
  const form = document.getElementById('form')
  if (form.className === 'hidden') {
    form.className = ''
  } else if (form.className === '') {
    form.className = 'hidden'
  }
})
