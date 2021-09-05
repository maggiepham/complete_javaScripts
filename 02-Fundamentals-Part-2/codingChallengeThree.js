/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

2. Create a 'calBMI' method on each object to calculate the BMI (the same method on both objects). 
   Store the BMI value to a property, and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
    Example: "John Smith's BMI (28.2) is higher than Mark Miller's(23.9)!"

TEST DATA: Marks weights 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall
*/
const markMiller = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,

    calBMI : function(){
        this.bmiMark = this.mass / this.height ** 2;
        return this.bmiMark;
    }
}

const johnSmith = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,

    calBMI : function(){
        this.bmiJohn = this.mass / (this.height * this.height);
        return this.bmiJohn;
    }
}
console.log(markMiller.calBMI(), johnSmith.calBMI());

markMiller.calBMI() > johnSmith.calBMI() ? console.log(`${markMiller.fullName}'s BMI (${markMiller.calBMI()}) is higher than ${johnSmith.fullName}'s (${johnSmith.calBMI()})!`) :
                                            console.log(`${johnSmith.fullName}'s BMI (${johnSmith.calBMI()}) is higher than ${markMiller.fullName}'s (${markMiller.calBMI()})!`)



