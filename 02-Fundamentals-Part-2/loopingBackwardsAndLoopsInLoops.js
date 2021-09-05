// const maggie = [
//     'Maggie',
//     'Pham',
//     2037 - 1991,
//     'engineer',
//     ['Michael', 'Peter', 'Steven']
// ];


// // Looping Backwards
// for(i = maggie.length - 1; i >= 0; i--){
//     console.log(i, maggie[i]);
// }

// // Loops inside Loops
// for(exercise = 1; exercise < 4; exercise++){
//     console.log(`-------Starting exercise ${exercise}------`);

//     for(rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }
// }

//============================Homework======================
/*
LECTURE: Looping Backwards and Loops in Loops
1. Store this array of arrays into avariable called 
   'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

2. Log only the neighbouring countries to the console, one by one, not the entire arrays. 
   Log a string like 'Neighbour: Canada' for each country

3. You will need a loop inside a loop for this. This is actually a bit tricky, 
   so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉
*/

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++){
    console.log(`${listOfNeighbours[i]}`, typeof listOfNeighbours[i]);
    
    for (let j = 0; j < listOfNeighbours[i].length; j++){
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`, typeof listOfNeighbours[i][j]);
    }
}
