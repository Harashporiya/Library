const form = document.getElementById('form')
form.style.display = 'none';

const add = document.getElementById('add')

add.addEventListener('click', function () {
    form.style.display = 'block';
    black.style.display = 'block'
})

const body = document.getElementById('black');
black.style.display = 'none'

body.onclick = function () {
    form.style.display = 'none'
    black.style.display = 'none'
}

// class Library {
//     constructor(title, author, pages) {
//         this.title = ' ';
//         this.author = '';
//         this.pages = '';
//     }
// }
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        // this.checked = checked;
        this.isRead = false;
    }

    displayDetails() {

        const bookDetails = `
            <p>Title: ${this.title}</p>
            <p>Author: ${this.author}</p>
            <p>Pages: ${this.pages}</p>
            <button id="readBtn"> Not read</button>
            <button id="remove">Remove</button>
        `;
        // document.getElementById('book_library').innerHTML = bookDetails;

        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-item');
        bookDiv.innerHTML = bookDetails;
        document.getElementById('book_library').appendChild(bookDiv);

        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);

        const readBtn = bookDiv.querySelector('#readBtn');
        readBtn.addEventListener('click', () => {
            if (this.isRead) {
                this.isRead = false;
                readBtn.textContent = 'Not Read';

            } else {
                this.isRead = true;
                readBtn.textContent = 'Read';

            }

        });


        const checkbox = document.querySelector('#checkbox');
        const readBtn1 = document.querySelector('#readBtn');

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                readBtn1.textContent = 'Read';
            } else {
                readBtn1.textContent = 'Not Read';
            }
        });

        const remove = bookDiv.querySelector('#remove');
        remove.addEventListener('click', () => {
            bookDiv.remove();

        });
    }

}




const button = document.getElementById('button')
button.addEventListener('click', function (event) {
    event.preventDefault();
 
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('page').value;

    const newBook = new Book(title, author, pages);
    newBook.displayDetails();

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('page').value = '';

    document.getElementById('form').style.display = 'none';
    document.getElementById('black').style.display = 'none';

});






