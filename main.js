let input = document.getElementById('userSearch');
let button = document.getElementById('btnSearch');
let div = document.getElementById('result');
let btnPrev = document.getElementById('prev');
let btnNext = document.getElementById('next');
let num = 1;


button.addEventListener('click', getInfo);

function getInfo() {
    let name = input.value;
    const URL = `https://swapi.co/api/people/?page=${num}`;
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
    btnPrev.setAttribute('disabled', 'disabled');
}

btnNext.addEventListener('click', () => {
    num++;
    getInfo();
    if (num == 9) { btnNext.setAttribute('disabled', 'disabled') }
    if (num < 9) { btnNext.removeAttribute('disabled', 'disabled') };
    if (num == 1) { btnPrev.setAttribute('disabled', 'disabled') }
    if (num > 1) { btnPrev.removeAttribute('disabled', 'disabled') };
})

btnPrev.addEventListener('click', () => {
    num--;
    getInfo();
    if (num == 1) { btnPrev.setAttribute('disabled', 'disabled') }
    if (num > 1) { btnPrev.removeAttribute('disabled', 'disabled') };
    if (num == 9) { btnNext.setAttribute('disabled', 'disabled') }
    if (num < 9) { btnNext.removeAttribute('disabled', 'disabled') };
})

// document.querySelector('#b1').addEventListener('click', () => {
//     num = 1;
//     getInfo();
// })
// document.querySelector('#b2').addEventListener('click', () => {
//     num = 2;
//     getInfo();
// })
// document.querySelector('#b3').addEventListener('click', () => {
//     num = 3;
//     getInfo();
// })
// document.querySelector('#b4').addEventListener('click', () => {
//     num = 4;
//     getInfo();
// })
// document.querySelector('#b5').addEventListener('click', () => {
//     num = 5;
//     getInfo();
// })
// document.querySelector('#b6').addEventListener('click', () => {
//     num = 6;
//     getInfo();
// })
// document.querySelector('#b7').addEventListener('click', () => {
//     num = 7;
//     getInfo();
// })
// document.querySelector('#b8').addEventListener('click', () => {
//     num = 8;
//     getInfo();
// })
// document.querySelector('#b9').addEventListener('click', () => {
//     num = 9;
//     getInfo();
//})
console.log(document.querySelectorAll('.page'));
let btnList = document.querySelectorAll('.page');
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', event => {
        console.log(event, event.target);
        num = i + 1;
        getInfo();
    })
}


