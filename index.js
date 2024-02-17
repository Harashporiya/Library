const form = document.getElementById('form')
form.style.display = 'none';

const add = document.getElementById('add')


const body = document.getElementById('black');
body.style.display = 'none';

const body1 = document.body;



add.addEventListener('click', function () {
    form.style.display = 'block';
    body.style.display = 'block';
    body1.style.overflow = 'hidden';
   
});


const form_2 = document.getElementById('form_2')
form_2.style.display='none'
const login = document.getElementById('login')
login.addEventListener('click',function(){
    form_2.style.display='block'
    black.style.display = 'block'
    body1.style.overflow = 'hidden';
})

body.onclick = function () {
    form.style.display = 'none'
    black.style.display = 'none'
    form_2.style.display = 'none'
    body1.style.overflow = 'auto';
}
const imgInput = document.getElementById('img_url');


class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
       
        this.isRead = false;
    }

    displayDetails() {
      
        const imageUrl = imgInput.value;
        const bookDetails = `
            <p class="title"><b>Title: ${this.title}</b></p>
            <p class="title"><b>Author: ${this.author}</b></p>
            <p class="title"><b>Pages: ${this.pages}</b></p>
            <button id="readBtn"> Not read</button>
            <button id="remove">Remove</button>
        `;
    
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-item');
        bookDiv.innerHTML = bookDetails;
        
        bookDiv.style.backgroundImage = `url('${imageUrl}')`;
         document.getElementById('book_library').appendChild(bookDiv);

        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);

        const readBtn = bookDiv.querySelector('#readBtn');
        readBtn.addEventListener('click', () => {
            if (this.isRead) {
                this.isRead = false;
                readBtn.textContent = 'Not Read';
                readBtn.style.backgroundColor='rgb(0, 255, 17)'
                readBtn.style.color="black"

            } else {
                this.isRead = true;
                readBtn.textContent = 'Read';
                readBtn.style.backgroundColor=' rgb(100, 70, 883)'
                readBtn.style.color="white"

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
            const index = bookLibrary.indexOf(this);
            if (index !== -1) {
                bookLibrary.splice(index, 1);
            }
             console.log(index)
        });
    }

}


const bookLibrary = [];

const button = document.getElementById('button')
button.addEventListener('click', function (event) {
    event.preventDefault();
    form.style.display='none'
    body.style.display='none'
    body1.style.overflow = 'auto';

    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('page').value;
    const imgInput = document.getElementById('img_url').value;

    const newBook = new Book(title, author, pages, imgInput);
    newBook.displayDetails();
    bookLibrary.push(newBook);

    
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('page').value = '';
    document.getElementById('img_url').value = '';

    document.getElementById('form').style.display = 'none';
    document.getElementById('black').style.display = 'none';

});
function displayLibraryDetails() {
    bookLibrary.forEach(book => {
        book.displayDetails();
    });
}





