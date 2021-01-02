let myLibrary = ['A Little Life', 'Just Kids', 'Hamilton', 'Salt Fat Acid Heat', 'Testing if the word break thing works'];
let container = document.getElementById('container');
let add = document.querySelector('#add');
let formDiv = document.getElementById('form');
let submit = document.getElementById('submit');


function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

Book.prototype.addBookToLibrary = (book) => {
    myLibrary.push(book);
}

function displayBook(){
    for (i=0; i < myLibrary.length; i++){
        const div = document.createElement('div');
        const removeButton = document.createElement('button');
        div.classList.add('book');
        div.textContent = myLibrary[i];
        container.appendChild(div);
        removeButton.setAttribute('class', 'remove');
        removeButton.textContent = 'Remove Book';
        div.appendChild(removeButton);
        removeButton.addEventListener('click', function(){
            alert('hello');
        })
    }
}
let rmv = document.querySelector('.remove');
displayBook();

//event listeners
add.addEventListener('click', function(){
    formDiv.style.display = 'block';
});

submit.addEventListener('click', function(){
    formDiv.style.display = 'none';
});


