var prompt = require('sync-prompt').prompt;
/*
var first = prompt('What is your first name? ');
var last = prompt('What is your last name? ');
console.log('your full name is: ', first , ' ', last);

var color = prompt('What is your favorite color? ');
 console.log('Your favorite color is: ', color);

var ageDog = prompt('What is your dog\'s age? ');//to deal with apostrophies either use \ or make outside ""
console.log('ageDog is a', typeof ageDog); //tells you if something is a string, number, boolean, etc

//to change string to number:
ageDog = parseInt(ageDog)
console.log('ageDog is a ', typeof ageDog);

var ageHuman =age*7;
console.log('The age of your dog in dog years is', ageDog);
console.log('The age of your dog in human years is', ageHuman);



var age = prompt('What is your age? ');
age =parseInt(age);
//console.log('age is a ', typeof age);

if (age < 21){
  console.log('You are not old enough to drink');
} else {
  console.log('You can drink!');
};


//Prompt user for F or C then conver the temperature 
var unit = prompt('Is your temperature in Fahrenheit or Celsius (F/C) ');
var temp = prompt('What is your temperature? ');

temp = parseInt(temp)
if (unit === 'C'){
  var newTempF = ((9/5)*temp)+32;//convert C to F
  console.log(temp+' degrees C is '+newTempF+ ' F');
}else{
  var newTempC = (5/9)*(temp-32);//convert F to C
  console.log(temp+' degrees F is '+newTempC+ ' C');}
*/

//BMI calculator
var unit = prompt('Would you like to use Metic or \'merican units? (met/am) ');

if (unit === 'am'){  
console.log('First tell me how tall you are in feet and inches');
var height = prompt('How many feet tall are you?');
height = parseInt(height);
var heightp=prompt('plus how many inches?');
heightp=parseInt(heightp);
var weight = prompt('What is your weight (in pounds)? ');
var heightIn = (height*12)+heightp ;
//console.log('You are a total of '+heightIn+' tall'); 

BMI = (weight *703)/Math.pow(heightIn,2);

console.log('Your BMI is',BMI.toFixed(2));
}else{
var heightCm = prompt('How many centimeters tall are you?');
heightCm = parseInt(heightCm);
var weightKg = prompt('What is your weight (in kilograms)? ');
var heightM = (heightCm/100) ;

BMI = (weightKg)/Math.pow(heightM,2);
console.log('Your BMI is',BMI.toFixed(2) );
}






//5 feet 100 pounds = 19.5 BMI
//150 cm, 50 kg = 22.2 BMI
