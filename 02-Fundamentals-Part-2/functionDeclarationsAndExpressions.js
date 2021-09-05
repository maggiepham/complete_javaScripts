


// Function declaration: with the name
const age1 = calcAge1(1991); // Can call function declaration before it's defined 
function calcAge1(birthYear){
    return 2037 - birthYear;
}

// Function expression: without the name
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991); // CANNOT call function expression before it's defined

console.log(age1, age2);

//=============================Homework=====================================
/*
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' 
   which receives a 'population' value, and returns the percentage of the world population that the given population represents. 
   For example, China has 1441 million people, so it's about 18.2% of the world population

2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100

3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console

4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', 
   and also call it with 3 country populations (can be the same populations)
*/

// Fuction declaration
function percentageOfWorld1(population){
    return (population / 7900) * 100;
}

const populationVietNam = percentageOfWorld1(1441);
const populationUS = percentageOfWorld1(300);
const populationKorea = percentageOfWorld1(25);
// console.log(populationVietNam, populationUS, populationKorea);

// Function expression
const percentageOfWorld2 = function(population){
    return (population / 7900) * 100;
}
const populationVietNam2 = percentageOfWorld2(1441);
const populationUS2 = percentageOfWorld2(300);
const populationKorea2 = percentageOfWorld2(25);
console.log(`${populationVietNam}, ${populationUS}, ${populationKorea} \n\ ${populationVietNam2}, ${populationUS2}, ${populationKorea2}`);