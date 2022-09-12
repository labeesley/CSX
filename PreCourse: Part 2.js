//Challenge 1: Arrays - Examining Elements
/*
Create a variable called fourthItem and assign it the value of the fourth item in the horror array ('Ghostface'). 
  Then console.log fourthItem to see the output.
*/

const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// ADD CODE HERE
const fourthItem = horror[3];

// console.log(fourthItem); // 'Ghostface'


//Challenge 2: Arrays - Adding Elements
/*
Use a built-in JavaScript method to add another show to the netflixShows array. 
  Then log your updated array to the console.
*/

const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// ADD CODE HERE
netflixShows.push("The Witcher");

// console.log(netflixShows); //['Orange is the New Black', 'Black Mirror', 'Chewing Gum', 'The Witcher']


//Challenge 3: For Loops - Fundamentals
/*
Using a for loop, decrement countDown by one each time the loop runs 
  until it equals 0, making use of looping functionality instead of logging each number separately.
*/

//My Solution
let countDown = 10;
// ADD CODE HERE
// countDown starting value: 10
// countDown value after every iteration: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
for (let i = countDown; i > 0; i--) {
  //decrement countDown by 1
  countDown--;
}

//CSX Solution
// let countDown = 10;
// for (let i = 0; i <= 10; i++) {
//   countDown--;
// }

// console.log(countDown) // -> should print 0;


//Challenge 4: For Loops and Arrays
/*
1. Iterate through the synonyms array using a for loop, pushing a greeting string with the format "Have a [synonym] day!" into the greetings array.

2. Use a second for loop to iterate through the greetings and console.log() each greetings.
*/

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i = 0; i < synonyms.length; i++){
  greetings.push(`Have a ${synonyms[i]} day!`)
}

// console.log(greetings); //['Have a fantastic day!', 'Have a wonderful day!', 'Have a great day!']

// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
for(let i = 0; i < greetings.length; i++){
  console.log(greetings[i]); //'Have a fantastic day!''Have a wonderful day!''Have a great day!'
}


//Challenge 5: For Loops and Array Indices
/*
For this challenge, loop through the arrays and push a string with the format \
  "My name is [firstName] [lastName] and I am from [place]" into the array holding the respective bios.
*/

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for (let i = 0; i < firstNames.length; i++){
  bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`)
};

//console.log(bios); 
//['My name is Jon Snow and I am from The Wall', 'My name is Arya Stark and I am from Winterfell', 'My name is Jamie Lannister and I am from Kings Landing']


//Challenge 6: For Loops - Calculating Array Elements
/*
You are given an array of five numbers called increaseByTwo. 
  Use a for loop to iterate through the array and increase each number by two.
*/

const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for (let i = 0; i < increaseByTwo.length; i++){
  increaseByTwo[i] += 2;
}

// Uncomment the line below to check your work!
// console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];


//Challenge 7: While Loops - Fundamentals
/*
Use a while loop to increment count by 2 on each repetition of the block of code. 
  Run the code block of your while loop until count is 8.
*/

let count = 2;
// ADD CODE HERE
while (count < 8){
  count += 2;
  //console.log(count); // 4, 6, 8
}

// console.log(count); //8


//Challenge 8: While Loops - Conditional Expression
/*
Initialize a variable addThis to 0 and a variable sum to 0. 
  Use a while loop to repeat a code block as long as addThis is less than 10. 
  In the code block, add the value of addThis to sum, then increment addThis by 1. 
  After the while loop runs, the value of sum should be the sum of the numbers 0 through 9.
*/

let addThis = 0;
let sum = 0;

while (addThis < 10) {
  sum += addThis;
  addThis++;
}

// Uncomment the line below to check your work!
// console.log(sum); //45 (sum of 0 through 9 added together)


//Challenge 9: Control Flow - if statements
/*
Use an if statement to check if num is greater than 100. 
  If num is greater than 100, reassign the value of final to null. 
  Otherwise, set final to be two times the value of num.
*/

const num = 40;
let final;
// ADD CODE HERE
if (num > 100){
  final = null;
}
else {
  final = num * 2;
};
// Log final to the console below to check your work
console.log(final); //80


//Challenge 10: FizzBuzz
/*
Use a loop to iterate through the numbers 1 through 16. 
  Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, 
  "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.

Log fb to the console to see the output.

Hint: Check out the remainder/modulo operator: %.
*/

const fb = [];
// ADD CODE HERE
/* make a for loop
push each number into the array fb
if number is divisible by 3 assign "fizz"
if number is divisible by 5 assign "buzz"
if number is divisible by both 3 and 5 assign "fizzbuzz"
log fb*/
for (let i = 1; i <= 16; i++){
  if (i % 3 === 0 && i % 5 === 0){
    fb.push('fizzbuzz');
  }
  else if (i % 3 === 0){
    fb.push('fizz');
  }
  else if (i % 5 === 0){
    fb.push('buzz');
  }
  else {
    fb.push(i);
  }
};

// console.log(fb);
// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]


//Challenge 11: Control Flow and Iteration
/*
Iterate through the array and multiply a number by 10 if it is greater than or equal to 5.
*/

const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE
//use a for loop to iterate through the array
for (let i = 0; i < timesTenIfOverFive.length; i++){
  if (timesTenIfOverFive[i] >= 5){
    //reassign the value of the element at timesTenIfOverFive[i]
    timesTenIfOverFive[i] *= 10;
  }
};

// Uncomment the line below to check your work!
console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]


//Challenge 12: Objects - Examining Properties
/*
You are provided with an object called checkObj. 
  Using a for... in loop, determine if the object contains the property foundNum. 
  If it exists, reassign the value of found to 1
*/

const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let found = 0;
// ADD CODE HERE
for (const property in checkObj){
  if (property === 'foundNum'){
    found = 1;
  }
};

//Solution 2: using Object.keys()
// let found = 0;
// // ADD CODE HERE
// for (const property in checkObj){
//   if (Object.keys(checkObj).includes('foundNum')){
//     found = 1;
//   }
// };


//Challenge 13: Objects - Iterating with for... in
/*
You are provided with an empty array called objToArray. 
  Using a for... in loop, fill the array with all of the numbers from the checkObj object 
  if they are greater than or equal to 2.
*/

const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};
const objToArray = [];
// ADD CODE HERE
for(const property in checkObj){
  if(checkObj[property] >= 2){
    (objToArray.push(checkObj[property]));
  }
}
// console.log(objToArray); //[2, 5, 18]


//Challenge 14: Objects - Iterating with a for loop
/*
This time, use the Object.values() method to return an array of checkObj's values, 
  and assign this array to a constant called objToArray. 
  Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6. 
  If so, reassign the value of divBy6 to true.
*/

const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let divBy6 = false;
// ADD CODE HERE
const objToArray = Object.values(checkObj);
// console.log(objToArray); //[1, 2, 5, 18]

for (let i = 0; i < objToArray.length; i++){
  if(objToArray[i] % 6 === 0){
    divBy6 = true;
  }
};

// console.log(divBy6); //true


//Challenge 15: Objects - Nested Arrays
/*
You are provided with an empty array called nestedArr. 
  Using a for loop starting at index 0, add 5 subarrays to nestedArr, 
  with each nested array containing the string 'loop' concatenated 
  with the corresponding index in nestedArr as its first element, and the index as its second element.

Example of a subarray: ['loop3', 3].
*/

const nestedArr = [];
// ADD CODE HERE
for (let i = 0; i < 5; i++){
  //add 5 sub array to nestedArr
  //sub arrays should have 'loop' + 'i' as first element and 'i' as second element
  nestedArr.push(['loop' + i, i])
}
console.log(nestedArr); //[['loop0', 0], ['loop1', 1], ['loop2', 2], ['loop3', 3], ['loop4', 4]]


//Challenge 16: Objects - Adding Properties
/*
You are provided with an array, possibleIterable. 
  Using a for loop, build out the object divByThree 
  so that each key is an element of possibleIterable that is divisible by three. 
  The value of each key should be the array index at which that key can be found in possibleIterable.
*/

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
//use a for loop
//declared an object called divByThree that's currently empty 
//push elements that are divisible by 3 in the array possibleIterable into object using bracket notatio
//the elements that are divisible by 3 are keys
//the index of those elements are the values
for (let i = 0; i < possibleIterable.length; i++) {
  if (possibleIterable[i] % 3 === 0) {
    divByThree[possibleIterable[i]] = i;
  }
}

// console.log(divByThree) //{ 3: 1, 6: 3, 9: 2 }

 
//Challenge 17: Objects - Evaluating Keys
/*
You are given an object called sumMe containing several key/value pairs and a variable called total 
  whose initial value is 0. 
  Using a for... in loop, iterate through the keys of sumMe; 
  if the value corresponding to a key is a number, add it to total.
*/

const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
// ADD CODE HERE
//use a for...in loop
//if value is a number add to total
//in order to differentiate what value we want from object we need to use typeof method
for(const property in sumMe){
  if(typeof sumMe[property] === 'number'){
    total += sumMe[property];
  }
}
console.log(total); //15
























