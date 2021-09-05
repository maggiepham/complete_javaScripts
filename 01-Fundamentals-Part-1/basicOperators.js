// 1. Math Operators
const now = 2037;
const ageMaggie = now - 1984;
const ageJohn = now - 1974;
console.log(ageMaggie, ageJohn);

console.log(ageJohn * 2, ageMaggie / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Maggie';
const lastName = 'Pham';
console.log(firstName + ' ' + lastName);

/*
+ (Addition). Add two operands: 10 + 20 = 30 ; String + numeric: "a" + 10 = a10
- (Subtraction). Subtracts the second operand from the first: 20 - 10 = 10
* (Multiplication). Multiply both operands: 10 * 20 = 200
/ (Division). Divide the numberator by the denominator: 20 / 10 = 2
% (Modules - chia lấy phần dư). Outputs the remainder of an integer division: 20 % 10 = 0
++ (Increment - tăng lên 1 đơn vị). Increases an integer value by one: var a = 10; a++ => a = 11
-- (Decrement - giảm xuống 1 đơn vị). Decreases an integer value by one: var a = 10; a-- => a = 9

*/

// 2. Assignment Operators
/*
= (Simple assignment)
+= (Add and assignment)
-= (Subtract and assignment)
*= (Multiply and assignment)
/= (Divide and assignment)
%= (Modules and assignment)
Note: same logic applies to Bitwise operators, so they will become like : <<=, >>=, &=, |= and ^=
*/
let x = 10 + 5; // 15
x +=10; // x = x + 10 = 25
x *= 4; // x = x * 4
x++; // x = x + 1
x--;
x--;
var aAssignment = 33;
var bAssignment = 10;
console.log(x);
console.log(aAssignment % bAssignment);

// 3. Comparison Operators
console.log(ageJohn > ageMaggie); // <, >, >=, <=
console.log(ageMaggie >= 20);

const isFullAge = ageMaggie >=20;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

const averageAge = (ageJohn + ageMaggie) / 2;
console.log(ageJohn, ageMaggie, averageAge);

/*
== (Equal - So sánh bằng). Checks if the value of two operands are equal or not, if yes, then the condition becomes true: 10 == 20 => False
=== (giống hệt nhau - Bằng và cùng kiểu dữ liệu): 10 == 20 => false
!= (Not Equal - So sánh không bằng). Checks if the value of two operands are equal or not, if the values are not equal, the the condition becomes true: 10 != 20 => True
!== (Không giống hệt nhau): 20!==20 => False
> (Greater than - lớn hơn). Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true: 20 > 10 => True
< (Less than - nhỏ hơn). Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true: 20 < 10 => False
>= (Greater than or Equal to). Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the codition becomes true: 20 >= 10 => True
<= (Less than or Equal to). Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true : 10 <= 10 => False

*/

// 4. Logical Operators:
/*
&& (Logical AND). If both the operands are non-zero, then the condition becomes true. (10 == 20 && 20 == 33) => False
|| (Logical OR). If any of the two operands are non-zero, then the condition becomes True : (10 == 20 || 20 == 33) => False
! (Logical NOT). Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it false : !(10==20) => True
*/
var aLogicalOperator = true;
var bLogicalOperator = false;
console.log(aLogicalOperator && bLogicalOperator);
console.log(aLogicalOperator || bLogicalOperator);
console.log(!(aLogicalOperator && bLogicalOperator));

// 5. Bitwise Operators
/*
& (Bitwise AND). It performs a Boolean AND operation on each bit of its integer arguments. (10==20 & 20==33) => False.
| (Bitwise OR). It performs a Boolean OR operation on each bit of its integer arguments. (10==20 | 20==33) => False
 ^ (Bitwise XOR). (10==20 ^ 20==33) => False
 ~ (Bitwise NOT). (~10) = -10
 << (Left Shift - Dịch trái). (10<<2) = 40.
 >> (Right Shift - Dịch phải). (10>>2) = 2
 >>> (Right Shift with Zero - Dịch phải với Zero). (10>>>2) = 2
*/
var aBitOperator = 2;
var bBitOperator = 3;
console.log(aBitOperator & bBitOperator);
console.log(aBitOperator | bBitOperator);
console.log(aBitOperator ^ bBitOperator);
console.log(~ bBitOperator);
console.log(aBitOperator << bBitOperator);
console.log(aBitOperator >> bBitOperator);
console.log(aBitOperator >>> bBitOperator);

// 6. Miscellaneous Operator
/*
Conditional Operator:
? :(Conditional). 
If Condition is true? Then value X: Otherwise value Y 
*/
var aMiscellaneous = 10;
var bMiscellaneous = 20;
console.log((aMiscellaneous > bMiscellaneous) ? 100:200);
console.log((aMiscellaneous < bMiscellaneous) ? 100:200)

/*
typeof Operator: 
evaluates to "number", "string", "boolean". 
If its operand is a number, string or boolean value, then returns true or false based on the evaluation.
Number -> number
String -> string
Boolean -> boolean
Object -> object
Function -> function
Undefined -> undefined
Null -> object
*/
var aTypeOf = 10;
var bTypeOf = "String"
console.log(typeof bTypeOf == "string" ? "bTypeOf is String" : "bTypeOf is Numeric");
console.log(typeof aTypeOf == "string" ? "aTypeOf is String" : "aTypeOf is a Numberic");

//===============================Homework=================================
/* LECTURE: Basic Operators */
 // 1. If your country split in half,and each half would contain half the population, then how many people would live in each half?
 var population = 10;
 console.log(population/2)

// 2. Increase the population of your country by 1 and log the result to the console
population++;
console.log(population);
// 3. Finland has a population of 6 million. Does your country have more people than Finland?
console.log(population > 6000000);
// 4. The average population of a country is 33 million people. Does your country have less people than the average country?
console.log(population < 33000000);

// 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 
//    'Portugal is in Europe, and its 11 million people speak portuguese'
 
    let country = 'Portugal';
    let continent = 'Europe'; 
    let language = 'portuguese';
    description = country + 
    " is in " + 
    continent + 
    ", and its " +
    population +
     " million people speack " +
      language;
    console.log(description);
