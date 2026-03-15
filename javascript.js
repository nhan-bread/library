const library = [
    {author: "Harper Lee", title: "To Kill a Mockingbird", pages: "281", status: "Not Read Yet"},
    {author: "F. Scott Fitzgerald", title: "The Great Gatsby", pages: "180", status: "Read"},
];

function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
    id = crypto.randomUUID();
    this.id = id;
}

function addBookToLibrary(author, title, pages, status) {
    const newBook = new Book(author, title, pages, status);
    library.push(newBook);
}

const container = document.querySelector(".container");

function displayBook(){
    library.forEach((book) => {
        let card = document.createElement("div");
        container.appendChild(card);
        card.textContent = `Title: ${book.title} Author: ${book.author} Pages: ${book.pages} Status: ${book.status}`;
    })
}

// addBookToLibrary("J.R.R. Tolkien", "The Hobbit", "295", "Not Read Yet");
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
})

