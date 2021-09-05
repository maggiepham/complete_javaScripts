
const day = 'monday';

switch(day){
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; // used to stop a case 
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednsday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default: // no any above cases
        console.log('Not a valid day');
}

// switch case is the same else if. it's only different syntax

if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if(day === 'tuesday'){
    console.log('Prepare theory videos');
} else if(day === 'wednsday' || day === 'thursday'){
    console.log('Write code examples');
} else if(day === 'friday'){
    console.log('Record videos');
} else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :D');
} else{
    console.log('Not a valid day');
}

//========================Homework=========================
/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language': 
french or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/

const language = 'english';

switch(language){
    case 'english':
        console.log('3rd place');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    case 'french':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    default:
        console.log('Greate language too :D');
}