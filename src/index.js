
console.log('%c HI', 'color: firebrick') //this is cool asf.
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function buildCard(imgSrc) {
    const img = document.createElement('img')

    img.style.width = '350px';
    img.style.height = '300px';
    img.style.display = 'cover';
    img.src = `${imgSrc}`
    document.querySelector('#dog-image-container').appendChild(img)
}
function getImg() {
    fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
        data.message.forEach((img) => {
            buildCard(img)
        });
    })
}

function buildList(breed) {
    const li = document.createElement('li');

    li.textContent = `${breed}`;
    li.className = `${breed}`;
    li.style.listStyle = 'none';
    li.style.cursor = 'pointer';

    document.querySelector('#dog-breeds').appendChild(li)

    li.addEventListener('click', () => li.style.color = 'Blue')
}
function getBreeds() {
    fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
        const breeds = Object.keys(data.message)
        breeds.forEach((breed) => buildList(breed))
    })
}

function sortBreeds() {
    const select = document.querySelector('select');
    select.addEventListener('change', (e) => {
        document.querySelectorAll('li').forEach((li) => {
            if (li.textContent[0] === e.target.value) {
                li.style.display = '';
            } else {
                li.style.display = 'none';
            }
        })
    })
}



function initializer() {
    getImg()
    getBreeds()
    sortBreeds()
}

document.addEventListener('DOMContentLoaded', () => initializer())