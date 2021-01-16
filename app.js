let myLibrary = [
    {
        title: 'A Little Life',
        author: 'Hanya Yanagihara',
        read: 'yes'
    },
    {
        title: 'Just Kids',
        author: 'Patti Smith',
        read: 'yes'
    },
    {
        title: 'Hamilton',
        author: 'Ron Chernow',
        read: 'yes'
    },
    {
        title: 'Salt Fat Acid Heat',
        author: 'Samin Nosrat',
        read: 'currently reading'
    }
    ];
let container = document.getElementById('container');
let add = document.querySelector('#add');
let formDiv = document.getElementById('form');
let submit = document.getElementById('submit');


function Book(title, author, read){
    this.title = title,
    this.author = author,
    this.read = read
}

Book.prototype = {
    addBookToLibrary() {
        myLibrary.push(book);
    }
}

function parseForm(){
    let userTitle = document.getElementById('inputTitle').value;
    let userAuthor = document.getElementById('inputAuthor').value;
    let userReadYes = document.getElementById('inputReadYes').value;
    let userReadNo = document.getElementById('inputReadNo').value;
    let userReadCurrent = document.getElementById('inputReadCurrentlyReading').value;
    
    let newBook = new Book()
}

function displayBook(){
    for (i=0; i < myLibrary.length; i++){
        const div = document.createElement('div');
        const removeButton = document.createElement('button');
        const titleNode = document.createTextNode(myLibrary[i].title)
        const by = document.createTextNode('by');
        const authorNode = document.createTextNode(myLibrary[i].author);
        div.classList.add('book');
        div.id = "slot" + i;
        div.setAttribute('data-position', i);
        container.appendChild(div);
        div.appendChild(titleNode);
        div.appendChild(document.createElement('br'));
        div.appendChild(by);
        div.appendChild(document.createElement('br'));
        div.appendChild(authorNode);

        removeButton.setAttribute('class', 'remove');
        removeButton.textContent = 'Remove Book';
        div.appendChild(removeButton);
    }
}
displayBook();
let rmv = document.querySelector('.remove');

function removeBook(){
    //select the div
    //find what to hook up to the div
    //take the div out of the array. arr.pop, arr.slice?
}

//event listeners
add.addEventListener('click', function(){
    formDiv.style.display = 'block';
});

submit.addEventListener('click', function(){
    formDiv.style.display = 'none';
    parseForm();
});

rmv.addEventListener('click', function(){
    alert('test');
})


