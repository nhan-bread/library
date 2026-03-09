const library = [
    
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