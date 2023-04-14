'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let maxScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.msg').textContent = 'No number!';
  } else if (guess < 1 || guess > 20) {
    document.querySelector('.msg').textContent = 'Out of range (1 to 20)';
  } else if (guess === secretNumber) {
    document.querySelector('.result').textContent = guess;
    document.querySelector('.msg').textContent = 'Correct number!';
    if (score > maxScore) maxScore = score;
    document.querySelector('.highest-score').textContent = maxScore;

    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.guess').style.background = '#60b347';
    document.querySelector('.result').style.fontSize = '80px';
    document.querySelector('.result').style.padding = '24px 48px';
    document.querySelector('.result').style.borderRadius = '100px';
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.msg').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.msg').textContent = 'You lost the game';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } else {
    if (score > 1) {
      document.querySelector('.msg').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.msg').textContent = 'You lost the game';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  document.querySelector('body').style.background = '#333';
  document.querySelector('.result').style.fontSize = '60px';
  document.querySelector('.result').style.padding = '8px 36px';
  document.querySelector('.result').style.borderRadius = '0';
  document.querySelector('.guess').style.background = '#333';

  document.querySelector('.result').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.msg').textContent = 'Start guessing ...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highest-score').textContent = maxScore;
});
