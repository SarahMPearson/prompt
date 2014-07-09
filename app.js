var prompt = require('sync-prompt').prompt;
/*
var first = prompt('What is your first name? ');
var last = prompt('What is your last name? ');
var full = first + " " + last;
console.log('Your Full name is', full);

var color = prompt('What is your favorite color? ');
console.log("Your favorite color is", color);

//typeOf when you want to run what primitive i is and parseInt when you want to change to a number
var age = prompt("What is your dog's age? ");
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);


//asking your dogs age and printing out dogs age and age in human years
var age = prompt("What is your dog's age? ");
console.log("In dog years your dog is " + age);
var humanAge = (age * 7);
console.log("In human years your dog is " + humanAge);

//print out whether you can drink or not
age = prompt("What is your age? ");
age = parseInt(age);
if (age >= 21) {console.log("Get your Drink on!") }
else {
  console.log("You can't drink!");
}
//converting fahrenheit to celsius vice versa my way
var degree =prompt("What do you want to convert F or C? (F/C) ");
var temp = prompt("What temp do you want to convert? "); 

temp = parseInt(temp);
if(degree ==="F") {
  var tempF =((temp - 32)*(5/9));
    console.log(temp + " F " + tempF + " C ");} 
  if(degree ==="C") {
    console.log((temp * (9/5) + 32));
      }

//converting fahrenheit to celsius vice versa his way
var scale =prompt("What scale are you using? (f/c) ");
var temp =prompt("What is the temperature? ");

temp = parseInt(temp);
var converted;
var alt;

if(scale === "f") {
  converted = (temp-32) * 5/9;
  alt = 'c';
}else {
  converted = (temp*9/5) + 32;
  alt = 'f';
}

console.log(temp + scale + " -> " + converted + alt); 
*/
//write a BMI Calculator my way
var height = prompt("What is your height in inches? ");
var weight = prompt("What is your weight in pounds? ");

height= parseInt(height);
weight= parseInt(weight);
var bmi =(weight * 703)/(Math.pow(height,2));
  console.log("Your BMI is " +  bmi);

  // write a BMI calculator his way
var lbs =prompt('Weight in Lbs? ');
var height =prompt('Height in inches? ');

lbs =parseInt(lbs);
height =parseInt(height);
var bmi = (lbs/(height*height)) * 703;
  console.log("Your BMI is ", bmi.toFixed(1));

