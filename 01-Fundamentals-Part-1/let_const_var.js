// let: used for re-assigning a value for variable
let age = 37;
age = 32;

// const: NOT support to change the value in the future
const birthYear = 1991;
// birthYear = 1990; // Error: Uncaught TypeError: Assignment to constant variable.

// const: cannot declare empty variable
const job; // Error: Uncaught SyntaxError: Missing initializer in const declaration

// var: the same as let, it's the old one
var job = 'programmer';
job = 'teacher';

//=======================Homework==========================

/*
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never change, and which might change?). 
Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

let language = 'VietNamese';
 language = 'Norway';
 console.log(language);

const ukLanguage = 'English';
// ukLanguage = "English1";
console.log(ukLanguage);

const varLanguage = 'Swedish';
varLanguage = 'Spanish';
 console.log(varLanguage);

 language = 'Vietnamese';
 const country = 'Viet Nam';
 const continent = 'Southeast Asia';
 var isIsland = false;
 isIsland = true;
 console.log(language);
 console.log(country);
 console.log(continent);
 console.log(isIsland);
