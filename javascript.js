const library = [
//    {title: "To Kill a Mockingbird", author: "Harper Lee", pages: "281", status: "Not Read Yet"},
//    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: "180", status: "Read"},
];

class Book {
    constructor(title, author, pages, status) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.status = status;
        this.id = crypto.randomUUID();
    }

    changeStatus() {
        if (this.status === "Read") {
        this.status = "Reading";
        } else if (this.status === "Reading") {
            this.status = "Not read yet";
        } else if (this.status === "Not read yet") {
            this.status = "Read";
        }
    }
}

function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status);
    library.push(newBook);
}

const container = document.querySelector(".container");

function clearDisplay() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
}

function displayBook(){
    clearDisplay();
    library.forEach((book) => {
        let card = document.createElement("div");
        container.appendChild(card);
        card.textContent = `Title: ${book.title} Author: ${book.author} Pages: ${book.pages} Status: ${book.status} `;
        let removeBtn = document.createElement("button");
        removeBtn.textContent = `Remove`;
        card.appendChild(removeBtn);
        removeBtn.dataset.id = book.id;

        removeBtn.addEventListener("click", (e) => {
            const idToRemove = e.target.dataset.id;
            const bookToRemove = library.find(book => book.id == idToRemove);
            const bookIndex = library.indexOf(bookToRemove);
            library.splice(bookIndex, 1);
            displayBook();
        })

        let statusBtn = document.createElement("button");
        statusBtn.textContent = `Change status`;
        card.appendChild(statusBtn);
        statusBtn.dataset.id = book.id;

        statusBtn.addEventListener("click", (e) => {
            const statusToChange = e.target.dataset.id;
            const bookToChange = library.find(book => book.id == statusToChange);
            bookToChange.changeStatus();
            displayBook();
        })
    })
}

const addBookBtn = document.querySelector(".add-book");
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const inputStatus = document.getElementById("status");

addBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const newTitle = inputTitle.value;
    const newAuthor = inputAuthor.value;
    const newPages = inputPages.value;
    const newStatus = inputStatus.value;

    addBookToLibrary(newTitle, newAuthor, newPages, newStatus);
    displayBook();
})