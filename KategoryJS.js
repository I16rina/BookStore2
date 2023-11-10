const category = document.querySelectorAll('.section-nav-a');
let dot = document.querySelector('.section-div-svg');

let nextLoadCat;

// смена категории

function switchCategory() {
    category.forEach(item => {
        item.addEventListener('click', () => {
            removeActiveCategory();
            item.classList.add('active');
            nextLoadCat = item.innerHTML;
        });
    });
}

function removeActiveCategory() {
     document.querySelector('.section-nav-a.active').classList.remove('active')
}

switchCategory();

// API    
const apiKey = 'AIzaSyCUNVqBXn0JOvvj9vDPWXeEkUUpuSTsuRo'; 
let startIndex = 0; 
const maxResults = 6; 
let currentCategory = 'architecture';


function fetchBook(category) {
    const bookList = document.querySelector('.section-books'); // контейнер с книгами
    const book = document.querySelector('.books'); // контейнер с одной книгой
    const url = `https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`

    fetch (url)
    .then (response => response.json())
    .then(data => {
        // console.log(data);
        data.items.forEach(book => {
            const bookDiv = document.querySelector('.books');
            bookDiv.innerHTML = `
            <p class="div-autor">${book.volumeInfo.title}</p>`
        })
    })
    .catch(error => console.error(error));
}

fetchBook();