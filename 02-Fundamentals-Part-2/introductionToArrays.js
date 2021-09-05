
// Syntax in Array:
// const friends = ['Maggie', 'Steven', 'Peter'];
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends, years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// // Change value in array
// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'John';
// const john =[firstName, 'Pham', 2037 - 1991, 'teacher', friends];
// console.log(john);
// console.log(john.length);

// Exercise
// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const years =[1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years)); // => NaN because number cannot (-) array

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

//===================Homework=========================
/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. 
   You may use the values you have been using previously. 
   Store this array into a variable called 'populations'

2. Log to the console whether the array has 4 elements or not(true or false)

3. Create an array called 'percentages'containing the percentages of the world population for these 4 population values. 
   Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
*/

const percentageOfWorld = function(population){
    return (population / 7900) * 100;
}

const populations = [1441, 960, 800, 110];
console.log(populations[0], populations[1], populations[2], populations[populations.length - 1]);

console.log(populations.length === 4);

const percentages = new Array(
    percentageOfWorld(populations[0]), 
    percentageOfWorld(populations[1]), 
    percentageOfWorld(populations[2]), 
    percentageOfWorld(populations[populations.length - 1]));

console.log(percentages);
