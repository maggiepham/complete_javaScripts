// Function can hold one or more complete lines of code.
// Function is simply a piece of code that we can reuse

function logger(){
    console.log('My name is Maggie');
}

// Calling / running / invoking function
logger();
logger();
logger();

// function with input parameters by arguments
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;

}

// reuse the function with different input values
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//===================Homework=========================================

/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. 
   Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

2. Call this function 3 times, with input data for 3 different countries. 
   Store the returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const describeFinland = describeCountry('Finland', 6, 'Helsinki');
const describeUK = describeCountry('UK', 8, 'London');
const describeUS = describeCountry('United State of America', 300, 'Washington D.C')
console.log(`${describeFinland}, \n\ ${describeUK}, \n\ ${describeUS}`);