let input = document.getElementById('userSearch');
let button = document.getElementById('btnSearch');
let div = document.getElementById('result');
let btnPrev = document.getElementById('prev');
let btnNext = document.getElementById('next');
let select = document.querySelector('select');
let target = 'value';
console.log(target);

let num = 1;


function findTarget() {
    target = select.value;
    return target;
}


button.addEventListener('click', () => {
    showAll();
});

function showAll() {
    findTarget();
    console.log(target);
    // let name = input.value;
    let URL = `https://swapi.co/api/${target}/?page=${num}`;   //в залежностід від вибраного таргету має бути запрос на різні категорії
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            console.log(data);
            let arr = [];
            for (let i = 0; i < data.results.length; i++) {
                arr.push(`<p>${i + 1}. ${data.results[i].name}</p>`);
            }
            div.innerHTML = arr.join('');
        });
}
function show() {
    findTarget();
    console.log(target);
    // let name = input.value;
    let URL = `https://swapi.co/api/${target}/?search=${input.value}`;   //в залежностід від вибраного таргету має бути запрос на різні категорії
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            console.log(data);
            div.innerHTML = ' ';
            for (key in data.results[0]) {
                div.innerHTML += key + ': '[key];
            };
        });
}

btnNext.addEventListener('click', () => {
    num++;
    show();
    if (num == 9) { btnNext.setAttribute('disabled', 'disabled') }
    if (num < 9) { btnNext.removeAttribute('disabled', 'disabled') };
    if (num == 1) { btnPrev.setAttribute('disabled', 'disabled') }
    if (num > 1) { btnPrev.removeAttribute('disabled', 'disabled') };
})

btnPrev.addEventListener('click', () => {
    num--;
    show();
    if (num == 1) { btnPrev.setAttribute('disabled', 'disabled') }
    if (num > 1) { btnPrev.removeAttribute('disabled', 'disabled') };
    if (num == 9) { btnNext.setAttribute('disabled', 'disabled') }
    if (num < 9) { btnNext.removeAttribute('disabled', 'disabled') };
})

let btnList = document.querySelectorAll('.page');
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', event => {
        console.log(event, event.target, event.target.innerText);
        num = +event.target.innerText;
        show();
        if (num == 1) { btnPrev.setAttribute('disabled', 'disabled') }
        if (num > 1) { btnPrev.removeAttribute('disabled', 'disabled') };
        if (num == 9) { btnNext.setAttribute('disabled', 'disabled') }
        if (num < 9) { btnNext.removeAttribute('disabled', 'disabled') };
    })
}

let par = document.querySelectorAll('p');
let modal = document.querySelector('.modal')
for (let i = 0; i < par.length; i++) {
    par[i].addEventListener('click', () => {
        modal.style.display = "flex";
    })
}

