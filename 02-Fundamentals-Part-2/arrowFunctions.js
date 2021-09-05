

// Arrow function: 1 line of code
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Arrow function: multiple lines of code
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991));

const yearsUntilRetirementTwo = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirementTwo(1984, 'Maggie'));
console.log(yearsUntilRetirementTwo(1974, 'Ketil'));

//===========================Homework===============================
/*
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'
*/

const percentageOfWorld3 = population => (population/ 7900) * 100;

const populationVietNam = percentageOfWorld3(1441);
const populationGermany = percentageOfWorld3(120);
const populationJapan = percentageOfWorld3(96);
console.log(populationVietNam, populationGermany,populationJapan);