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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const showScore = score => (scoreElem.textContent = score);
const showSecretNumber = num => (secretNumberElem.textContent = num);
const showMessage = msg => (messageElem.textContent = msg);

showScore(score);
showSecretNumber('?');

checkElem.addEventListener('click', () => {
  const guess = Number(select('.guess').value);

  if (guess) {
    if (guess < 1 || guess > 20) showMessage('Out of range (1-20)');
    else {
      if (score <= 1) {
        showMessage('You lost the game!');
        showScore(0);
      } else {
        if (guess === secretNumber) {
          showMessage('Correct number!');
          showSecretNumber(secretNumber);
          bodyElem.style.background = '#60b347';
          secretNumberElem.style.width = '30rem';
          if (score > highScore) highScore = score;
          highScoreElem.textContent = highScore;
        } else {
          showMessage(`Too ${guess > secretNumber ? 'high' : 'low'}!`);
          score--;
          showScore(score);
        }
      }
    }
  } else showMessage('No number');
});

againElem.addEventListener('click', () => {
  score = 20;
  showSecretNumber('?');
  showMessage('Start guessing...');
  guessElem.value = '';
  showScore(score);
  bodyElem.style.background = '#222';
  secretNumberElem.style.width = '15rem';
});
