// Array structure: combines multiple values
// the order in which we specify the elements matters a lot
// use array for more order data
const maggieArray =[
    'Maggie',
    'Pham',
    2037 - 1991,
    'engineer',
    ['Michael', 'Peter', 'Steven']
];

// Object defines key : value pairs
// the order of values does not matter at all when we want to retrieve them
// use objects for more unstructered data
const maggie = {
    firstName: 'Maggie',
    lastName: 'Pham',
    age: 2037 - 1991,
    job: 'engineer',
    friends: ['Michael', 'Peter', 'Steven']
}

//======================Homework===================
/*
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, 
   containing properties 'country', 'capital', 'language', 'population' 
   and 'neighbours' (an array like we used in previous assignments)
*/

const myCountry = {
    country : 'VietNam',
    capital : 'SG',
    language : 'Vietnamese',
    population: 95,
    neighbours: ['Thailand', 'Myanmar', 'Laos']
}