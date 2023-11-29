'use strict'

 const generateRandomArray = (length) => {
    let randomArray = [];
  
    for (let i = 0; i < length; i++) {
      randomArray.push(Math.floor(Math.random() * 100) + 1);
    }
  
    return randomArray;
  }
  
  const arrayLength = 10; 
  const randomNumbers = generateRandomArray(arrayLength);
  
  console.log(randomNumbers);
  