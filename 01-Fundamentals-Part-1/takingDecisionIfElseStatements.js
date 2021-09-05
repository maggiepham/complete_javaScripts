const age = 15;
if(age >= 18){
    console.log('Sarah can start driving license 🚗');
} else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;
let century;
if(birthYear <=2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);

// if ... else if ... else ... statement
var book = "economics";
if(book == "history"){
    console.log("History Book")
}else if(book == "maths"){
    console.log("Maths Book");
} else if(book == "economics"){
    console.log("Economics Book")
}else{
    console.log("Unknown Book");
}

//=============================Homework==========================
  /*
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million,log a string like this to the console: 
'Portugal's population is above average'. 
Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

2. After checking the result, change the population temporarily to 13 and then to 130. 
See the different results, and set the population back to original
*/

if(population > 33){
    console.log(`${country}'s population is above average`);
}else{
    console.log(`${country}'s population is ${33 - population} million below average`);
}