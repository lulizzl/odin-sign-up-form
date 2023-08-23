const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const book1 = new Book('Les Miserables', 'Victor Hugo', 1194, 'read')
const book2 = new Book('Knulp', 'Herman Hesse', 114, 'read')
const book3 = new Book('The Great Pianists', 'Harold C. Schonberg', 430, 'not read')
const book4 = new Book('The Number Devil', 'Hans Magnus Enzensberger', 293, 'not read')
addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)


const container = document.querySelector('.container')
const books = document.createElement('div')
container.appendChild(books)
books.classList.add('books')

function displayBook(Book) {
    var book = document.createElement('div')
        book.classList.add('book')
        book.setAttribute('id', myLibrary.indexOf(Book))
            books.appendChild(book)
            var titleDisplay = document.createElement('p')
            titleDisplay.textContent = Book.title
            titleDisplay.classList.add('title')
            var authorDisplay = document.createElement('p')
            authorDisplay.textContent = Book.author
            var pagesDisplay = document.createElement('p')
            pagesDisplay.textContent = Book.pages + ' pages'
            pagesDisplay.classList.add('pages')
            var readDisplay = document.createElement('p')
            var remove = document.createElement('button')
            remove.classList.add(myLibrary.indexOf(Book))
            remove.classList.add('removeButton')
            remove.addEventListener('click', function(e) {
                removeBook(myLibrary.indexOf(Book))
            })
            var readButton = document.createElement('button')
            readButton.classList.add(myLibrary.indexOf(Book),'readButton')
            readButton.textContent = Book.read
            if (readButton.textContent === 'read') readButton.classList.add('read')
            book.appendChild(titleDisplay)
            book.appendChild(authorDisplay)
            book.appendChild(pagesDisplay)
            book.appendChild(readDisplay)
            book.appendChild(remove)
            book.appendChild(readButton)
            readButton.addEventListener('click', function(event) {
                console.log(this.textContent)
                if (this.textContent === 'read') {
                    this.innerHTML = 'not read'
                    this.classList.remove('read')
                }
                else if (this.textContent === 'not read') {
                    this.innerHTML = 'read'
                    this.classList.add('read')
                }
            })
}

function removeBook(index) {
    document.getElementById(index).remove()
}




function displayBooks() {
    for (i in myLibrary) {
        displayBook(myLibrary[i])
    }
}

displayBooks()

button = document.createElement('button')
header = document.querySelector('.header')
header.appendChild(button)
button.textContent = 'Add Book'

const bookDialog = document.getElementById('newbook')

button.addEventListener('click', () => {
    bookDialog.showModal()
})

bookForm = document.getElementById('bookForm')

bookForm.querySelector("button.submit").addEventListener("click", function(event){
    event.preventDefault();
    let newTitle = document.getElementById('title')
    let newAuthor = document.getElementById('author')
    let newPages = document.getElementById('pages')
    let checkbox = document.getElementById('read')
    newRead = checkbox.checked
    newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newRead)
    addBookToLibrary(newBook)
    displayBook(newBook)
    bookForm.reset()
    bookDialog.close()
})










