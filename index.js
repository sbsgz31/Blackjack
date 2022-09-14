
let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let player = {
   chips: 200,
   name: "Per",
}

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips





function getRamdomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1
  if (randomCard === 1) {
    return 11
  } else if (randomCard > 10){
    return 10
  } else {
    return randomCard
  }
}

function startGame() {
  isalive = true
  let firstCard = getRamdomCard()
  let secondCard = getRamdomCard()
  cards =[firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for ( let i = 0; i < cards.length; i++ ) {
    cardsEl.textContent += cards [i] + "  "
  }

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
    isAlive = true
  } else if ( sum === 21) {
    message = "Wohoo! You've got Blackjack"
    hasBlackJack = true
  } else {
    message = "You're out the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if( isAlive === true && hasBlackJack === false) {
  let card = getRamdomCard()
  sum += card
  cards.push(card)
  renderGame();
}
}


// let castle = {
//   isFree: false,
//   title: "Castle in the hills",
//   price: 140,
//   features: ["4 guests", "1 bedroom", "2 beds" ]
// }
//
// console.log(castle.title);
