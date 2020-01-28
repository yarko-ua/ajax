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

console.log(document.querySelectorAll('.page'));
let btnList = document.querySelectorAll('.page');
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', event => {
        console.log(event, event.target, event.target.innerText);
        num = +event.target.innerText;
        getInfo();
        if (num == 1) { btnPrev.setAttribute('disabled', 'disabled') }
        if (num > 1) { btnPrev.removeAttribute('disabled', 'disabled') };
        if (num == 9) { btnNext.setAttribute('disabled', 'disabled') }
        if (num < 9) { btnNext.removeAttribute('disabled', 'disabled') };
    })
}




