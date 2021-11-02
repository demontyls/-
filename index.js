
const cardBox = document.createElement('div')
let firstCard = null;
let firstCardShirt = null;
let secondCard = null;
let secondCardShirt = null;
let rts = null;

let boxForm = document.createElement('div');
let form = document.createElement('form');
let text = document.createElement('p')
let input = document.createElement('input');
let btnStartGame = document.createElement('button');
let counter = document.createElement('p')
let btnNewGame = document.createElement('button');
document.body.append(boxForm);

boxForm.append(text)
boxForm.append(form);
form.append(input);
form.append(btnStartGame);
boxForm.append(counter);

boxForm.classList.add('box-form');
text.classList.add('form-text');
form.classList.add('form');
input.classList.add('input');
btnStartGame.classList.add('btn-start');
counter.classList.add('counter');

text.textContent = 'Введите количество карт по вертикал и горизонтали';
btnStartGame.textContent = 'Начать игру';
btnNewGame.textContent = 'Сыграть еще раз';

document.body.append(cardBox);
document.body.append(btnNewGame);
btnNewGame.classList.add('btn_new-game');
cardBox.classList.add('card_box');

btnStartGame.addEventListener('click', (e)=> {
    e.preventDefault();
    
    rts = input.value;
    console.log(rts) 
    if(rts%2 !== 0 || rts > 10) {
        rts = 4;
    }

    setTimeout(()=> cardBox.style.visibility = 'visible', 300);
    
    let intr;
    let startInterval = () => {
        counter.textContent = '60';
        clearInterval(intr);
        intr = setInterval(interval, 1000); 
    };

    let interval = () => (counter.textContent != 0) ? counter.textContent-- : "";
    startInterval();
    setTimeout(() => (confirm('Время вышло!')) ? location.reload() : "", 60500);
///!!!
let shuffle = function (arr) {
    for (let i = arr.length - 1; i > 0 ; i--) {
        let tmp = arr[i];
        let rnd = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[rnd];
        arr[rnd] = tmp;
    }
    return arr;
}

function addBtnNewGame () {

    btnNewGame.style.visibility = 'visible';
    btnNewGame.addEventListener('click', () => location.reload())
}

let foo = [];
let inX = rts;
let x = inX * inX/ 2;
    
for (var i = 1; i <= x; i++) {
       foo.push(i);
    }

let q = foo.concat(foo);
let randomText = shuffle(q);

for (i = 0; i < randomText.length; i++) {
    const card = document.createElement('div');
    cardBox.append(card);
    card.textContent = randomText[i];
    card.classList.add('card');
    card.classList.add('shirt');
    card.id = randomText[i];

    if (randomText.length == 36){
        card.classList.add('card-arr-36');
        cardBox.classList.add('arr-36');
    }
    if (randomText.length == 64){
        card.classList.add('card-arr-64');
        cardBox.classList.add('arr-64');
    }
    if (randomText.length == 100){
        card.classList.add('card-arr-100');
        cardBox.classList.add('arr-100');
    }

    card.addEventListener('click', (event) => {
        event.target.classList.remove('shirt');
        event.target.classList.add('disabled');
    
        setTimeout(() => {event.target.classList.remove('disabled')}, 2500);
        setTimeout(() => {event.target.classList.add('shirt')}, 2500);
    
        if (firstCard) {
            secondCard = event.target.textContent;
            secondCardShirt = event.target;  
            console.log('cards 2', secondCard);
        } else {
            firstCard = event.target.textContent;
            firstCardShirt = event.target; 
            console.log('cards 1', firstCard);
        } 
        if (firstCard && secondCard) {
            if(firstCard !== secondCard){
            setTimeout(() =>{firstCardShirt.classList.add('shirt')}, 1500);
            setTimeout(() =>{secondCardShirt.classList.add('shirt')}, 1500);
            }
            if(firstCard == secondCard){
                firstCardShirt.classList.add('open'); 
                secondCardShirt.classList.add('open');
                console.log('Они yt равны');
            } 
            cardBox.classList.add("disabled");
            firstCard = null;
            secondCard = null;
        } 
        if (!firstCard && !secondCard){
            setTimeout(() => { cardBox.classList.remove("disabled")},1500);
        }
        let newGame = document.querySelectorAll('.open');

        if (newGame.length == randomText.length) { 
            setTimeout( addBtnNewGame, 700);      
        }
})
}
})