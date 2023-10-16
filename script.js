// let country = "Kenya";
// let continent = "Africa";
// let population = "10 million";
// console.log(country, continent, population);

// // // Data Types
// // let isIsland = false;
// let language = "English";
// // console.log(country);
// // console.log(continent);
// // console.log(population);
// // console.log(isIsland);
// // console.log(language);

// // // let, const and var
// // language = "English";

// // Basic operators
// const currentYear = 2023;
// const agemom = currentYear - 1960;
// const agefidies = currentYear - 1990;
// console.log(agefidies);
// console.log(agemom);

// // 2** 3 means 2 to the power of 3 = 2 * 2* 2
// console.log(agefidies * 2, agefidies / 10, 2 ** 3);

// // string concatenate
// const firstName = "jane";
// const lastName = "ann";
// console.log(firstName + " " + lastName);

// //assignment operators
// let x = 10 + 5; //x = 15
// x += 10; // x = x + 10
// x *= 4; //x = x *4 = 100
// x++; //x = x+1
// x--;
// x--;
// console.log(x);

// //comparison operator
// console.log(agefidies > agemom); /// > < >=, <=
// console.log(agefidies >= 18);

// //Basic operators challenge
// population = 10;
// console.log(population / 2);
// population++;
// console.log(population);
// let finlandPopulation = 6;
// console.log(finlandPopulation > population);
// const averagepopulation = 33;
// console.log(population < averagepopulation);
// let description =
//   "Portugal is in Europe, and its 11 million people speak portuguese";
// console.log(description);

// //precedence operator
// const averageage = (agefidies + agemom) / 2;
// console.log(agefidies, agemom, averageage);

// //coding challenge #1
// // const heightMark = 1.69;
// // const heightJohn = 1.95;
// // const massMark = 78;
// // const massJohn = 92;
// // BMIMark = massMark / (heightMark * heightMark);
// // console.log(BMIMark);
// // BMIJohn = massJohn / (heightJohn * heightJohn);
// // console.log(BMIJohn);
// // const markHigherBMI = BMIMark > BMIJohn;
// // console.log(markHigherBMI);
// // //coding challenge #2
// // console.log("Maerks`s BMI is higher than Jonh`s");
// // console.log(` Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}`);

// //Strings and templates
// const job = "programmer";
// const birthYear = 1991;

// const fidies =
//   "I`m " +
//   firstName +
//   ", a " +
//   (currentYear - birthYear) +
//   "years old " +
//   job +
//   "!";
// console.log(fidies);

// //template literals
// const fidiesnew = `I'm ${firstName}, a ${
//   currentYear - birthYear
// } year old ${job}`;
// console.log(fidiesnew);

// //back ticks
// console.log(`just a regular string...`);

// //multline string old way
// console.log(
//   "string with \n\
// multiple \n\
// lines"
// );

// //multi line string with back sticks
// console.log(`string
// multiple
// lines`);

// //string & Template literals Excercise
// description = `${country} , is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

// //Taking decision if.../else statement
// const age = 15;

// if (age >= 18) {
//   console.log("Annie can start driving license ");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Annie is too young. She has to wait another ${yearsLeft} years:`
//   );
// }

// const yearOfBirth = 2012;
// let century;
// if (yearOfBirth <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//#challenge 2
// const heightMark = 1.69;
// const heightJohn = 1.95;
// const massMark = 78;
// const massJohn = 92;
// BMIMark = massMark / (heightMark * heightMark);
// console.log(BMIMark);
// BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIJohn);
// if (BMIMark > BMIJohn) {
//   console.log(
//     `Marks's BMI (${BMIMark}) is higher than Jonh's BMI (${BMIJohn})`
//   );
// } else {
//   console.log(
//     "John`s BMI (${BMIJohn}) is higher than Mark`s BMI (${BMIMark}) "
//   );
// }

//Type conversion and coersion

//type conversion - convert from one type to another
/*const inputYear = "1991";
console.log(Number(inputYear), inputYear); //converts string to number by using Number function
console.log(Number(inputYear) + 18); */
//To convert a value to a string use String function

//type coercion
// console.log("I am " + 23 + "years old");
// + does automatic conversion which is coercion
//converts numbers to strings
//- does the opposite of what + does
//* converts strings to numbers

//guess the output
/*let n = "1" + 1;
n = n - 1;
console.log(n); */

/* lets create that takes in your name and says hello
followed by your name 

for example
Name:Jane
Return: "Hello jane"
*/

// created a function
/*function greet() {
  var name = prompt("What is your name");
  var result = "Hello " + name; // string concatenation
  console.log(result);
}*/

// calling the function
// greet();

// While loops
//var num = 0;
/*while (num < 100) {
  num += 1;
  console.log(num);
} */
// for loop

// for (let num = 0; num < 100; num++) {
//   console.log(num);
// }

// use of strict mode
/*"use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive:D");

// Function
function logger() {
  console.log("My name is fidies");
}
// calling, invoking, running the function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); */
//
// arrow function
/*const calcAge3 = (birthyear) => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  // return retirement; // return retirement;
  return `${firstName} retires in ${retirement}`;
};
console.log(yearsUntilRetirement(1991, "jonas"));
console.log(yearsUntilRetirement(2000, "Fidiie"));*/

/*function cutFruitPieces(fruit) {
  return fruit * 4;
}
// function calling another function
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));*/

// Arrays
// one way of declararing arrays literal syantax
const friends = ["Michael", "Steven", "peter"];
// push method - adds elements at the end of an array
friends.push("jay");
console.log(friends);
// To add elements at the begining of an array use the unshift()method
friends.unshift("fiddie");
console.log(friends);

// To remove last element  use pop()method
const popped = friends.pop();
console.log(friends);
console.log(popped);

// To remove first elemnts use shift()
friends.shift();
console.log(friends);

// To identfy the index  of an element
console.log(friends.indexOf("Steven"));

// another way
// const year = new Array(1991, 2000, 2010, 2019, 2023);
// console.log(year);

// to retrieve elements from array
// console.log(friends[0]);

// // to actual number of elements in the array
// console.log(friends.length);
// // To get nth index
// console.log(friends[friends.length - 1]);

// // To add elements in the array or update
// friends[2] = "Jay";
// console.log(friends);

// Basic array methods

// excercise
/*const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
// */
