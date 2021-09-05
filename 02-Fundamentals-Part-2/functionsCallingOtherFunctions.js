
// functions Calling Other Functions
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangesPieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//==========================Homework============================
/*
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you like the most. 
   This function takes in two arguments: 'country' and 'population', 
   and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'

2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier

3. Call 'describePopulation' with data for 3 countries of your choice
*/

// const percentageOfWorld = (population) => (population / 7900) * 100;

const percentageOfWorld = function(population){
   return (population / 7900) * 100;
} 

function describePopulation(country, population){
    const percentageOfCountry = percentageOfWorld(population);
    const description = `${country} has ${population} million people, which is about ${percentageOfCountry}% of the world.`;
    console.log(description)
}

describePopulation('VietNam', 1441);
describePopulation('Japan', 960);
describePopulation('Taiwan', 800);



