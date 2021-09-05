/* Object method: 
- Can hold different types of data
- Hold objects inside objects
- Function is another kind of value, if a function is a value then we can create a key value pair in which value is a function => Can add functions to objects.
- Array is also an object
*/

const maggie = {
    firstName : 'Maggie',
    lastName : 'Pham',
    birthYear : 1991,
    job : 'engineer', // String value
    friends : ['Michael', 'Peter', 'Steven'], // Array value
    hasDriverLicense : false, // boolean value

    // function value inside object
    // calcAge : function(birthYear){
    //     return 2037 - birthYear;
    // }

    // calcAge : function(){
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge : function(){
        // Create new property
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary : function(){
        return `${maggie.firstName} is a ${this.calcAge()}-year old ${maggie.job}, and she has ${this.hasDriverLicense ? 'a':'no'} driver license`;
    }
}; 
// console.log(maggie.calcAge(1991)); 
// console.log(maggie['calcAge'](1991));

console.log(maggie.calcAge());

console.log(maggie.age);

// Challenge
/* Maggie is a 46-year old engineer, and she has a/no driver license*/
maggie.hasDriverLicense ? console.log(`${maggie.firstName} is a ${maggie.calcAge()}-year old ${maggie.job}, and she has a driver license`) : console.log(`${maggie.firstName} is a ${maggie.calcAge()}-year old ${maggie.job}, and she has no driver license`);
maggie.hasDriverLicense == false ? console.log(`${maggie.firstName} is a ${maggie.calcAge()}-year old ${maggie.job}, and she has a driver license`) : console.log(`${maggie.firstName} is a ${maggie.calcAge()}-year old ${maggie.job}, and she has no driver license`);

console.log(maggie.getSummary());

//=========================Homework==============================
/*
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, 
   similar to the string logged in the previous assignment, but this time using the 'this' keyword.
   String: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'

2. Call the 'describe' method

3. Add a method called 'checkIsland' to the 'myCountry' object. 
   This method will set a new property on the object, called 'isIsland'. 
   'isIsland' will be true if there are no neighbouring countries, and false if there are. 
   Use the ternary operator to set the property.
*/


const myCountry = {
    language : 'finnish',
    neighbours : ['Swenden', 'Norway', 'Danmark'],
    // neighbours : [],

    capital : 'Helsinki',
    population : 6,
    country : 'Finland',

    describe : function(){
        console.log(
            `${this.country} has ${this.population} million 
            ${this.language}-speaking people, 
            ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);

    },

    checkIsland : function(){
        this.isIsland = this.neighbours.length === 0 ? true : false; // ~ this.isIsland = !Boolean(this.neighbours.length);
        console.log(this.isIsland);
    }
}
myCountry.describe();
myCountry.checkIsland();

