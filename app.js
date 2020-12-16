let myLibrary = [];
let container = document.querySelectorAll('#container');
let div = document.createElement('div');


function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBook(book){
    for (i=0; i < myLibrary.length; i++){

    }
}
