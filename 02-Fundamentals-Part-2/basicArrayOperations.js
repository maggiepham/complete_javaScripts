/*
I. Array object stores multiple values (a collection of data) in a single variable with fixed size sequential collection of elements of the same type
II. Syntax in Array:
    const friends = ['Maggie', 'Steven', 'Peter'];
    const years = new Array(1991, 1984, 2008, 2020);
III. Array Properties:
    1. constructor: returns a reference to the array function that created to the object
        - syntax: array.constructor
        - return value: returns the function that created this object's instance
        - Ex: 
                var arr = new Array (10, 20, 30);
                console.log(`arr.constructor is: ${arr.constructor}`);
    2. index: start from zero (0)
    3. input: present in arrays created by regular expression matches.
    4. length: reflects the number of elements in a array
    5. prototype: allow to add properties and methods to an object

*/

// IV. Array Methods
// const friends =['Michael', 'Steven', 'Peter'];
// console.log('Original array: ' + friends);

    // Add elements
        // push() : adds one or more elements to the end of an array and returns the new length of the array.
            // Syntax : array.push(element1, ..., elementN);
            // Return value: returns the length of the new array
            // const addElementToEndOfArray = friends.push('Maggie'); 
            // console.log('array.push(): ' + addElementToEndOfArray, friends);

        // unshift() : add one or more elements to the front of an array and returns the new length of the array
            // Syntax: array.unshift(element1, ..., elementN);
            // Return value: returns the length of the new array (it returns undefined in IE browser)
            // const addElementToFrontOfArray = friends.unshift('Mark');
            // console.log('array.unshift(): ' + addElementToFrontOfArray, friends);

    // Remove elements
        // pop() : removes the last element from an array and returns that element.
            // Syntax: array.pop()
            // Return value: returns the removed element from the array
            // const removeLastElementFromArray = friends.pop();
            // console.log('array.pop(): ' + removeLastElementFromArray, friends); 

        // shift() : removes the first element from an array and returns that element
            // Syntax: array.shift();
            // Return value: returns the removed single value of the array
            // const removeFrontElementFromArray = friends.shift();
            // console.log('array.shift(): ' + removeFrontElementFromArray, friends);

    // Return
        // indexOf : returns the first index of an element within array equal to the specified value, or -1 if none is found
            // Syntax: array.indexOf(searchElement[, fromIndex]);
            // Parameter: 
                // SearchElement: element to locate in the array
                // fromIndex: the index at which to begin the search. Default is 0
                // Return value: returns the index of the found element
                // console.log(friends.indexOf('Peter'));
                // console.log(friends.indexOf('Bob'));

        // lastIndexOf() : returns the last index of an element within array equal to the specified value, or -1 if none is found
            // Syntax: array.lastIndexOf(searchElement[, fromIndex]);
            // fromIndex: the index at which to start searching backwards. Defaults to the array's length
            // Return value: returns the index of the found element from the last
        //     console.log(friends.lastIndexOf('Peter'));
        //     console.log(friends.lastIndexOf('Bob'));


        // // include : return True/ False value
        // friends.push(23);
        // console.log(friends.includes('Peter'));
        // console.log(friends.includes('Bob'));
        // console.log(friends.includes('23'));
        // console.log(friends.includes(23));

        // if(friends.includes('Peter')){
        //     console.log('You have a friend called Peter')
        // }

        // concat() : returns a new array comprised of this array joined with two or more other array(s) and/or value(s)
            // Syntax : array.concat(value1, value2, ... , valueN);
            //Return value: returns an array object repressenting the resultant array, a concatenation of the current and given array(s)
            // var alpha = ['a', 'b', 'c'];
            // var numeric = [1, 2, 3];
            // var alphaNumeric = alpha.concat(numeric);
            // console.log('alphaNumeric : ' + alphaNumeric);
        
            // every() : returns TRUE if every element in this array satisfies the provided testing function.
                // Syntax : array.every(callback[, thisObject]);
                    // callback : Function to test for each element
                    // thisObject : Object to use as this when executing callback
                // Return value: returns TRUE if every element in this array satisfies the provided testing function.
    
    // Create
        // filter() : create a new array with all of the elements of this array for which the provided filtering functio returns true.
            // Syntax : array.filter(callback[, thisObject]);
            // Return value: returns created array.
        
    // Call
        // forEach() : calls a function for each element in the array
            // Syntax : array.forEach(callback[, thisObject])
                // callback: Function to test for each element of an array
                // thisObject: object to use as this when executing callback
            // Return value: return created array

//========================Homework===============================
/*
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your choice. 
   Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'

2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. 
   So add it to the end of the 'neighbours' array

3. Unfortunately, aftersometime, the new country is dissolved. So remove it from the end of the array

4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'

5. Change the name of one of your neighbouring countries. 
   To do that, find the index of the country in the 'neighbours' array, 
   and then use that index to change the array at that index position. 
   For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

// Create an array
let neighbours = ['VietNam', 'ThaiLand', 'Laos'];

// Add new country to the end of the neighbours array
neighbours.push('Utopia');
console.log(neighbours);

// Remove the last element from array
neighbours.pop();
console.log(neighbours);

// If not 'Germany', then print out the text
if(!neighbours.includes('Germany')){
    console.log('Probably not a central European country :D');
}

// Change the name of neighbouring countries
neighbours[2] = 'Myanmar';
neighbours[neighbours.indexOf('VietNam')] = 'Malaysia';
console.log(neighbours);