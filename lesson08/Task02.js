'use strict'

const generateRandomArray = (length, n, m) => {
    let randomArray = [];
    const min = Math.min(n, m);
    const max = Math.max(n, m);
  
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomNumber);
    }
  
    return randomArray;
  }
  
  const arrayLength = 10; 
  const n = -10; 
  const m = 10; 
  const randomNumbers = generateRandomArray(arrayLength, n, m);
  
  console.log(randomNumbers);
  