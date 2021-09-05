
const maggie = [
    'Maggie',
    'Pham',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
const types = [];
for(let i = 0; i < maggie.length; i++){
    // Reading from maggie array
    console.log(maggie[i], typeof maggie[i]);

    // Create a new array that contain all the types
    // Filling type array
    // types[i] = typeof maggie[i];
    types.push(typeof maggie[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRING ---');
for(let i = 0; i <maggie.length; i++){
    if(typeof maggie[i] !== 'string') continue; // ignore the matched condition and continue to loop 

    console.log(maggie[i], typeof maggie[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i <maggie.length; i++){
    if(typeof maggie[i] === 'number') break; // stop loop if the condition is matched

    console.log(maggie[i], typeof maggie[i]);
}

//======================Homework============================
/*
LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2'containing the percentages of the world population for the 4 population values. 
   Use the function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array 
   that we created manually in the previous assignment, and reflect on how much better this solution is
*/

const populations = [10, 1441, 332, 83];
const percentages2 = [];

const percentageOfWorld1 = function(population){
    return (population / 7900) * 100;
}

for(let i = 0; i < populations.length; i++){
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);