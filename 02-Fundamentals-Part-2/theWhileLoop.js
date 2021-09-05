

for(let rep = 1; rep <= 5; rep++){
    // console.log(`FOR: Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 5){
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

// random number
// let dice = Math.random() * 6; // Math.random will create a number between zero and one, and then multiply that by a six => is gonna be a decimal number

let dice = Math.trunc(Math.random() * 6) + 1;  // get rid of decimal part by using "Math.trunc" that will return number between zero and five, and then adding one get one to six
while(dice !== 6) {
    // console.log(`You rolled a ${dice}`); // the loop runs forever, this will be crash the website because of infinite loop
    dice = Math.trunc(Math.random() * 6) + 1; // to stop loop forever, I need to create new dice value and reassign this value at the end of each iteration.
    // if(dice === 6) console.log('Loop is about to end ...');
}

//==================Homework=============================
/*
LECTURE: The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
   but this time using a while loop (call the array 'percentages3')
  (Use a while loop to compute an array called 'percentages3'containing the percentages of the world population for the 4 population values. 
   Use the function 'percentageOfWorld1' that you created earlier)

2. Reflect on what solution you like better for this task: the for loop or the while loop?
*/

const populations = [10, 1441, 332, 83];
const percentages3 = [];

const percentageOfWorld3 = function(population){
    return (population / 7900) * 100;
}

let i = 0;
while(i < populations.length){
    percentages3.push(percentageOfWorld3(populations[i]));
    i++;
}
console.log(percentages3);