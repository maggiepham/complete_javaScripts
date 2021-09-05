
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Maggie')); // returns NaN: Not a Number
console.log(typeof NaN); // returns invalid number

console.log(String(23), 23);

// type coercion (happen when two values have different types)
console.log('I am ' + 23 + ' years old');
console.log('I am ' + String(23) + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);

// ====================Homework=============================

/*
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
     '9' - '5'; -> 4
     '19' - '13' + '17'; -> 617
     '19' - '13' + 17; -> 23
     '123' < 57; -> false
     5 + 6 + '4' + 9 - 4 - 2; -> 1143
2. Execute the operations to check if you were right
*/
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);