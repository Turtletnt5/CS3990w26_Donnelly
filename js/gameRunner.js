import Card, { multipleChoiceCard, instantCard } from './card.js';
import { cardData } from '../data/cardData.js';

let timer;
let timerDisplay = document.getElementById('timer');

let score = [0];
let scoreDisplay = document.getElementById('score');
let stars = document.getElementById('stars');

let gameContainer = document.getElementById('gameContainer');

let interval;

let cards = [];

let startButton = document.getElementById('startButton');

function startGame() {

    startButton.disabled = true;

    //Setup Timer
    timer = 60;
    updateTimerDisplay();

    //Setup Score
    score[0] = 0;
    scoreDisplay.textContent = '0';
    updateScoreDisplay();

    //Setup Game Container
    gameContainer.style.display = 'grid';

    //Setup Cards
    loadCards();



    showCards();

    interval = setInterval(fixedUpdate, 1000);
}

window.startGame = startGame;

function updateTimerDisplay() {
    timerDisplay.textContent = timer.toString();
}

function updateScoreDisplay() {
    scoreDisplay.textContent = score.toString();
    stars.textContent = '';
    for (let i = 0; i < score[0]; i++) {
        stars.textContent += '★';
    }
}

function loadAllCards() {

    cards = [];
    cardData.forEach(card => {
        if (card.Type == 'Multiple Choice') cards.push(new multipleChoiceCard(card.Title, card.Description, card.Options, card.Answers, document.getElementById('gamespace'), score));
        if (card.Type == 'Instant Card') cards.push(new instantCard(card.Title, card.Description, card.Points, document.getElementById('gamespace'), score));

    });

}

function loadCards(){

    let randomCards = [];
    cards = [];
    for (let i = 0; i < 5; i++) {
        randomCards.push(cardData[Math.floor(Math.random() * cardData.length)])
    }

    randomCards.forEach(card => {
        if (card.Type == 'Multiple Choice') cards.push(new multipleChoiceCard(card.Title, card.Description, card.Options, card.Answers, document.getElementById('gamespace'), score));
        if (card.Type == 'Instant Card') cards.push(new instantCard(card.Title, card.Description, card.Points, document.getElementById('gamespace'), score));
    });

}


function fixedUpdate() {
    timer--;
    updateTimerDisplay();
    updateScoreDisplay();

    if (timer <= 0) {
        endGame();
    }

    if (AllCardsCompleted()) {
        endGame();
    }
}

function endGame() {
    gameContainer.style.display = 'none';
    clearInterval(interval);
    startButton.disabled = false;

}

function AllCardsCompleted(){
    let cardsCompleted = true;
    cards.forEach(card => {
        if (!card.completed) {
            cardsCompleted = false
        }
    });
    return cardsCompleted;
}

function showCards(){
    cards.forEach(card => {
        card.showCard();
    });
}