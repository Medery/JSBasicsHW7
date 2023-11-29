'use strict'
const generateRandomArray = (length, n, m, type = null) => {
    let randomArray = [];
    const min = Math.min(n, m);
    const max = Math.max(n, m);
  
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomNumber);
    }
  
    if (type === 'even') {
      randomArray = randomArray.filter(number => number % 2 === 0);
    } else if (type === 'odd') {
      randomArray = randomArray.filter(number => number % 2 !== 0);
    }
  
    return randomArray;
  }
  
  const arrayLength = 10;
  const n = -10;
  const m = 10;
  const randomEvenNumbers = generateRandomArray(arrayLength, n, m, 'even');
  const randomOddNumbers = generateRandomArray(arrayLength, n, m, 'odd');
  
  console.log("Чётные числа:", randomEvenNumbers);
  console.log("Нечётные числа:", randomOddNumbers);
  