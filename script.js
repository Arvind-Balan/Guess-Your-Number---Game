'use strict';
//codeRefactored
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('Enter the number😊!!!');
    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    displayMessage(' ❤️👍correct Number 👌😘');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? ' Too High😥😜' : ' Too Low 🤷‍♂️🤷‍♀️😜 '
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' you Lost the Game 🫡😥😫');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start Guessing...👍😊');
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
