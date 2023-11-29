'use strict'

const getLeapYears = (n, m) => {
    const startYear = Math.min(n, m);
    const endYear = Math.max(n, m);
    let leapYears = [];
  
    for (let year = startYear; year <= endYear; year++) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapYears.push(year);
      }
    }
  
    return leapYears;
  }
  
  const leapYears = getLeapYears(2000, 2020);
  console.log(leapYears);
  