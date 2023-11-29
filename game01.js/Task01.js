'use strict'

const guessTheNumber = () => {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess;
  
    while (true) {
      guess = prompt("Угадай число от 1 до 100:");
  
      if (guess === null) {
        alert("Игра окончена");
        break;
      }
  
      guess = Number(guess);
  
      if (isNaN(guess)) {
        alert("Введи число!");
        continue;
      }
  
      if (guess > secretNumber) {
        alert("Меньше!");
      } else if (guess < secretNumber) {
        alert("Больше!");
      } else {
        alert("Правильно!");
        break;
      }
    }
  }
  
  guessTheNumber();
  