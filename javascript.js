const library = [
//    {title: "To Kill a Mockingbird", author: "Harper Lee", pages: "281", status: "Not Read Yet"},
//    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: "180", status: "Read"},
];

function Book(title, author, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
    id = crypto.randomUUID();
    this.id = id;
}

function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status);
    library.push(newBook);
}

const container = document.querySelector(".container");

function displayBook(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    library.forEach((book) => {
        let card = document.createElement("div");
        container.appendChild(card);
        card.textContent = `Title: ${book.title} Author: ${book.author} Pages: ${book.pages} Status: ${book.status}`;
    })
}

// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "Not Read Yet");
// displayBook();

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
