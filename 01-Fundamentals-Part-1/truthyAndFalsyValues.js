/* Converse value to Boolean by falsy and truthy */

// 5 falsy values: 0, '', undefined, null, NaN 
console.log(Boolean(0)); // -> False
console.log(Boolean('')); // -> False
console.log(Boolean(undefined)); // -> False
console.log(Boolean('Magie')); // -> True
console.log(Boolean({})); // -> True


const moneyElse = 0;
if(moneyElse){
    console.log("Don't spend it all ;) ");
}else{
    console.log('You should get a job!');
}

const moneyIf = 100;
if(moneyIf){
    console.log("Don't spend it all ;) ");
}else{
    console.log('You should get a job!');
}

let height = 0;
if(height){
    console.log('YAY! Height is defined');
} else{
    console.log('Height is UNDEFINED');
}
