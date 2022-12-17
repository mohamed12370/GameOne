'use strict';

const checck = document.querySelector('.checck');
const message = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const showScore = document.querySelector('.score span');
const angain = document.querySelector('.angain');
let score = 20;
let highScore = 0;

showScore.textContent = score;

checck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.style.color = 'red';
    message.textContent = 'No Number';
  } else if (guess === secretNumber) {
    message.style.color = 'gold';
    message.textContent = 'Correct Number';
    document.querySelector('.line span').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.high-score span').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.style.color = 'blue';
      message.textContent = guess > secretNumber ? 'too high' : 'too low';
      score--;
      showScore.textContent = score;
    } else {
      message.textContent = 'you lost the game';
      showScore.textContent = 0;
    }
  }
});

angain.addEventListener('click', function () {
  const guess = document.querySelector('.guess');
  guess.value = '';
  score = 20;
  message.textContent = 'strat guessing...';
  document.querySelector('body').style.backgroundColor = 'gray';
  document.querySelector('.line span').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
