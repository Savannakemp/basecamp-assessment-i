// #1 create a variable called 'myName' and assign it to your name as a string

// CODE HERE
var myName = "My Name is Savanna and my favorite number is ";

// #2 create a variable called 'faveNum' and assign it to your favorite number
// CODE HERE
var faveNum = 7;
// #3 create a variable called 'lovesCode' and set it to true

// CODE HERE
var lovesCode = true;
lovesCode
// #4 Using the previously created variables, create a new variable called 'me' that uses the myName and faveNum varible to create a sentence like this 'My name is Bryan and my favorite number is 3'

// CODE HERE
var me = myName+faveNum
me;

// #5 Using the previously created faveNum variable, create a new variable called 'trueFaveNum'. *trueFaveNum* should equal true when comparing faveNum to your favorite number.v // HINT: Use a comparison operator

// CODE HERE

var trueFaveNum;
console.log(true);
faveNum
trueFaveNum = faveNum+=2;
trueFaveNum

// #6 Create a new variable called notHakeem. Using the previously created myName variable, test that your name DOES NOT equal the string 'Hakeem Olajuwon'. If your name does happen to be Hakeem Olajuwon, test against 'Karl Malone'

// CODE HERE
var notHakeem = "Hakeem Olajuwon";

myName
notHakeem 
myName
// #7 Create an if statement that checks the age variable below. If age is greater than 16, then set canDrive to true otherwise set canDrive to false. The canDrive variable will be set by the unit test so do not adjust it.

// CODE HERE
var age = 18;
var canDrive;
if ( age > 16) {
    canDrive = true;
}else if ( age < 16 ) { 
    return canDrive = false;
};
canDrive

// #8 Create an if statement inside of the responseCreator function that sets the colorResponse variable value 
//based off of a passed in value. The param value passed in will be added in the unit test. If the param value is 
//'green' set colorResponse variable to 'Green is okay'. If the param value is 'red' set reponse variable to 'I heart red'.
// Otherwise set the colorResponse variable to 'What is your favorite color?'. Make sure to return the colorResponse variable
// at the end once it has been properly set.

var colorResponse;

var responseCreator = function (param){
  // CODE HERE 
    if ("green"==param) {
     return colorResponse = "Green is okay";
    }
    else if ("red"==param) {
        return colorResponse = "I heart red";
    }
    else {
        return colorResponse = "What is your favorite color?";
    }
};
console.log(responseCreator("green"));

// #9 Create a function called 'sum' that takes in one parameter and returns the sum of that parameter added it itself.

// CODE HERE
var age = 7
function sum(age){
   console.log(age+age);
};
sum(7,7);