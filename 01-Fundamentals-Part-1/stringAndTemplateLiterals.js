const firstName = 'Maggie';
const birthYear = 1984;
const currentYear = 2021;
const job = 'QC Engineer';

const maggie = ("I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + '!');
console.log(maggie);

// Insert template literals
const maggieNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(maggieNew);

// String with multiple lines 
console.log('String with \n\
multiple \n\
lines');

//====================Homework==================================
/*
    LECTURE: Strings and Template Literals
    1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
    */
    descriptionTemplatLiteral = `${country} is in ${continent} , and its ${population} million people speack ${language}`;
    console.log(descriptionTemplatLiteral);
  