
const CARD_TEXT = ['1', '2', '3', '4', '5', '6', '7','8',
 '1', '2', '3', '4', '5', '6', '7', '8'];

const cardBox = document.createElement('div')
let firstCard = null;
let firstCardShirt = null;
let secondCard = null;
let secondCardShirt = null;


document.body.append(cardBox);
cardBox.classList.add('card_box');

let shuffle = function (arr) {
    for (let i = arr.length - 1; i > 0 ; i--) {
        let tmp = arr[i];
        let rnd = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[rnd];
        arr[rnd] = tmp;
    }
    return arr;
}

let randomText = shuffle(CARD_TEXT);

for (i = 0; i < randomText.length; i++) {
    const card = document.createElement('div');
    cardBox.append(card);
    card.textContent = randomText[i];
    card.classList.add('card');
    card.classList.add('shirt');
    card.id = randomText[i];

    card.addEventListener('click', (event) => {
        event.target.classList.remove('shirt');
        event.target.classList.add('disabled');
    
        setTimeout(() => {event.target.classList.remove('disabled')}, 2500);
        setTimeout(() => {event.target.classList.add('shirt')}, 2500);
    
        if (firstCard) {
            secondCard = event.target.textContent;
            secondCardShirt = event.target;  
            console.log('cards 2', secondCard)
        } else {
            firstCard = event.target.textContent;
            firstCardShirt = event.target; 
            console.log('cards 1', firstCard)
        } 
        if (firstCard && secondCard) {
            if(firstCard !== secondCard){
            setTimeout(() =>{firstCardShirt.classList.add('shirt')}, 1500);
            setTimeout(() =>{secondCardShirt.classList.add('shirt')}, 1500);
            }
            if(firstCard == secondCard){
                firstCardShirt.classList.add('open'); 
                secondCardShirt.classList.add('open');
                console.log('Они yt равны')
            } 
            cardBox.classList.add("disabled");
            firstCard = null;
            secondCard = null;
        } 
        if (!firstCard && !secondCard){
            setTimeout(() => { cardBox.classList.remove("disabled")},1500);
        }
        let newGame = document.querySelectorAll('.open');

        if (newGame.length == 16) { 
            setTimeout(() => {confirm('Начать новую игру?') ? location.reload() : ''} , 700);
                    
        }
})
}


// 
// function x () {
//     setTimeout(() => {console.log(firstCard )},4000)
// }




