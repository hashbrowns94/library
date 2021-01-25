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
    addBookToLibrary(title, author, read) {
        myLibrary.push({
            title: title, 
            author: author,
            read: read});
        console.log(myLibrary);
    }
}

function parseForm(){
    let userTitle = document.getElementById('inputTitle').value;
    let userAuthor = document.getElementById('inputAuthor').value;
    let userReadYes = document.getElementById('inputReadYes').value;
    if(!userTitle || !userAuthor){
        throw new Error(alert("Please fill out all fields"));
    }
    
    let newBook = new Book(userTitle, userAuthor);
    newBook.addBookToLibrary(userTitle, userAuthor);
    displayBook(newBook);
}

function displayBook(){
    for (i=0; i < myLibrary.length; i++){
        const div = document.createElement('div');
        const removeButton = document.createElement('button');
        const titleNode = document.createTextNode(myLibrary[i].title)
        const bylineDiv = document.createElement('div');
        const by = document.createTextNode('by');
        const authorNode = document.createTextNode(myLibrary[i].author);
        const readDiv = document.createElement('div');
        const readNode = document.createTextNode('Read');
        const checked = document.createElement('input');
        const slider = document.createElement('label');

        div.classList.add('book');
        bylineDiv.classList.add('byline');
        div.id = ('book' + i)
        console.log(div.id);
        div.setAttribute('data-position', i);
        readDiv.classList.add('read');

        checked.type = 'checkbox';
        checked.classList.add('readStatus');
        slider.classList.add('switch');
        slider.htmlFor = 'switch';

        container.appendChild(div);
        div.appendChild(titleNode);
        div.appendChild(document.createElement('br'));
        div.appendChild(bylineDiv);
        bylineDiv.appendChild(by);
        div.appendChild(authorNode);
        div.appendChild(document.createElement('br'));
        div.appendChild(readDiv)
        readDiv.appendChild(readNode);
        readDiv.appendChild(checked);
        readDiv.appendChild(slider);

        removeButton.setAttribute('class', 'remove');
        removeButton.textContent = 'Remove Book';
        div.appendChild(removeButton);
        
    }
}
displayBook()

//event listeners
add.addEventListener('click', function(){
    formDiv.style.display = 'block';
});

submit.addEventListener('click', function(){
    formDiv.style.display = 'none';
    parseForm();
});

function removeBook(){
    for (var i = 0; i < myLibrary.length; i++){
        let rmv = document.querySelector('.remove');
        let div = document.getElementById('book' + i);
        rmv.addEventListener('click', function(){
            div.remove(myLibrary[i]);
        });
        }
}
removeBook(myLibrary[i])


