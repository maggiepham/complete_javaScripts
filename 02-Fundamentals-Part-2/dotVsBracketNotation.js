const maggie = {
    firstName : 'Maggie',
    lastName : 'Pham',
    age : 2037 - 1991,
    job : 'engineer',
    friends : ['Michael', 'Peter', 'Steven']
}

console.log(maggie);

console.log(maggie.lastName);
console.log(maggie['lastName']); //can put any expression

const nameKey = 'Name';
console.log(maggie['first' + nameKey]);
console.log(maggie['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Maggie? Choose between firstName, lastName, age, job, and friends');
console.log(maggie.interestedIn); // => undifined because maggie object does not have property 'interestedIn'
console.log(maggie[interestedIn]); // JavaScript replaces 'interestedIn' with the actual value of the variable and it will be looked up on the Maggie object

// Try to access to property that does not exist
if(maggie[interestedIn]){
    console.log(maggie[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

// Retrieve element from the object
maggie.location = 'Portugal';
maggie['twitter'] = '@maggiepham';
console.log(maggie);

// 'Maggie has 3 friends, and her best friend is called Michael'
console.log(`${maggie.firstName} has ${maggie.friends.length} friends, and her best friend is called ${maggie.friends[0]}`);

//================Homework===================
/*
LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment,log a string like this to the console: 
   'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'

2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.
*/

const myCountry = {
    country : 'Finland',
    capital : 'Helsinki',
    language : 'finnish',
    population: 6,
    neighbours: ['Sweden', 'Danmark', 'Norway']
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);