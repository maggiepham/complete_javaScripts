/*
 Function declaration, Function expression, Arrow function: 
 => Three different ways of writing functions, but they all work in a similar way: 
     - receive input data, 
     - transform data, 
     - and then output data.
*/

// Function declaration: it can be used before it's declared in the code
function calcAgeDeclaration(birthYear){
    return 2037 - birthYear;
}

// Function expression: essentially a function value stored in a variable
// const calcAgeExpression = function(birthYear){
//     return 2037 - birthYear;
// }

// Arrow function: great for a quick one-line functions without return keyword.
// const calcAgeArrow = birthYear => 2037 - birthYear;

const yearsUntilRetirement = function(birthYear, firstName){
    const age = calcAgeDeclaration(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Maggie'));
console.log(yearsUntilRetirement(1970, 'John'));