let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

function findMonth(expencesExamples) {
    let months = []; 
    expencesExamples.forEach((element) => {
        element.yearlyExpences.forEach((expences, index) => {
            if (expences <= 1000) {
                let monthName = new Date(2024, index).toLocaleString('default', { month: 'long' });
                months.push(monthName); 
            }
        });
    });
    return months; 
}

console.log(findMonth(expencesExamples));



