"use strict";
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 10;
const againButton = document.querySelector(`.again`);
let highScore = 0;

againButton.addEventListener(`click`, function () {
  score = 10;
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.message`).textContent = `Start guessing...`;

 
});

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  if (!guess) {
    document.querySelector(`.message`).textContent = `🚩No number!`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎈Correct number!!!`;

    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;
    if(score>highScore){
        highScore = score;
        document.querySelector(`.highscore`).textContent = highScore;
        
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = guess > secretNumber ? `📈number is too high`:`📉number is too low` ;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game`;
      document.querySelector(`.score`).textContent = 0;
    }
//   } else {
//     if (score > 1) {
//       document.querySelector(`.message`).textContent = `📉number is too low`;
//       score--;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `You lost the game`;
//       document.querySelector(`.score`).textContent = 0;
    // }
  }
});
