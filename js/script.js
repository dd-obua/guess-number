'use strict';

const select = selector => document.querySelector(selector);

const scoreElem = select('.score');
const secretNumberElem = select('.number');
const checkElem = select('.check');
const messageElem = select('.message');
const bodyElem = select('body');
const highScoreElem = select('.highscore');
const againElem = select('.again');
const guessElem = select('.guess');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const updateScore = score => (scoreElem.textContent = score);
const updateSecretNumber = num => (secretNumberElem.textContent = num);
const updateMessage = msg => (messageElem.textContent = msg);

updateScore(score);
updateSecretNumber('?');

checkElem.addEventListener('click', () => {
  const guess = Number(select('.guess').value);

  if (guess) {
    if (score <= 1) {
      updateMessage('You lost the game!');
      updateScore(0);
    } else {
      if (guess === secretNumber) {
        updateMessage('Correct number!');
        updateSecretNumber(secretNumber);
        bodyElem.style.background = '#60b347';
        secretNumberElem.style.width = '30rem';
        if (score > highScore) highScore = score;
        highScoreElem.textContent = highScore;
      } else {
        updateMessage(`Too ${guess > secretNumber ? 'high' : 'low'}!`);
        score--;
        updateScore(score);
      }
    }
  } else updateMessage('No number');
});

againElem.addEventListener('click', () => {
  score = 20;
  updateSecretNumber('?');
  updateMessage('Start guessing...');
  guessElem.value = '';
  updateScore(score);
  bodyElem.style.background = '#222';
  secretNumberElem.style.width = '15rem';
});
