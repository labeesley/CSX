//Challenge 1: addTwo

/*
Create a function addTwo that accepts a number, and returns the number plus 2.
*/

//declare a function addTwo
//input: number
//output: number (sum of input and 2)
function addTwo(num){
  return num + 2;
}

//Using Es6
// const addTwo = num => num + 2;

// Uncomment these to check your work!
console.log(typeof addTwo); // should log: 'function'
console.log(addTwo(10)); // should log: 12

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 2: addS

/*
Create a function addS that accepts a string, and returns the string with an "s" added to the end.
*/

//declare a function addS
//input: string
//output: string (input string + s)
function addS(str){
  return `${str}s`;
}

//Es6
// const addS = (str) => `${str}s`;

// Uncomment these to check your work!
console.log(typeof addS); // should log: 'function'
console.log(addS('cat')); // should log: 'cats'
console.log(addS('penguin')); //penguins

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 3: sayHello

/*
Create a function sayHello that accepts a string argument
  and returns the string 'Hi, ' with the passed-in string added to the end.
*/

//declare a function sayHello
//input: string
//output: string (Hi + input)
function sayHello(str){
  return `Hi, ${str}`
}

//Es6
// const sayHello = str => `Hi, ${str}`;

// Uncomment these to check your work!
console.log(sayHello('Mary')); // should log: 'Hi, Mary'
console.log(sayHello('Haley')); // should log: 'Hi, Haley'

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 4: wereAwesome

/*
Write a function wereAwesome that takes you and your pair programming partner's name 
  and returns the string "[your buddy's name] and [you] are awesome!"

If you are coding on your own, get creative! 
  Instead of a pair programming partner, it could be the name of your friend, your pet, 
  or even your rubber ducky!
*/

//declare a function wereAwesome
//input: strings (your name, partner name)
//output: string ("[your buddy's name] and [you] are awesome!")
function wereAwesome(you, yourBuddy) {
  // ADD CODE HERE
  return `${yourBuddy} and ${you} are awesome!`
}

//Es6
// const wereAwesome = (you, yourBuddy) => `${yourBuddy} and ${you} are awesome!`;

// Uncomment the lines below to test your function:
console.log(wereAwesome("Lara", "Vivian")); // => "Vivian and Lara are awesome!"
console.log(wereAwesome("MeiMei", "Sara")); // => "Sara and Meimei are awesome!"
console.log(wereAwesome("Patsy", "Vivian")); // => "Vivian and Patsy are awesome!"
console.log(wereAwesome("Gillian", "Babs")); // => "Babs and Gillian are awesome!"

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 5: lastLetter

/*
Create a function lastLetter that takes a word (string) 
  and returns the last character/letter of that string.

Hint- Remember that each character/letter in a string has an index position 
  that you can access with brackets- '[]'
*/

//declare a function lastLetter
//input: string
//ouput: string (last character/letter of input)
function lastLetter(word) {
  // INSERT CODE HERE
  return word[word.length - 1]
}

//Es6\
// const lastLetter = word => word[word.length - 1];

// Uncomment the lines below to test your code
console.log(lastLetter("hello")); //=> "o"
console.log(lastLetter("goodbye!")); //=> "!"
console.log(lastLetter("ZeltoiD")); //=> "D"
console.log(lastLetter("I love Javascript")); //=> "t"

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 6: passing Arguments

/*
Examine the code given to you. 
  Determine what arguments must be passed into isX1 and isX2 respectively 
  to obtain an output of true for both, and pass in the arguments accordingly.
*/

const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(/* ADD CODE HERE */5);
const two = isX2(/* ADD CODE HERE */3);

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 7: invoking functions

/*
Examine the code given to you. 
  Try to make the calls variable equal to 'JerryKramerGeorgeElaine' 
  with only a single invocation to the function jerry.
*/

let calls = "";

function jerry(str) {
	str = 'Jerry';
  return kramer(str);
}

function george(str) {
	str += 'George';
  return elaine(str);
}

function elaine(str) {
	str += 'Elaine'
  return str;
}

function kramer(str) {
  //concat str w/ kramer
  str += 'Kramer';
  //return the invocation of george
  return george(str);
}

// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 8: makePlans

/*
Create a function makePlans that accepts a string. 
  This string should be a name. 
  The function makePlans should call the function callFriend and return the result. 
  callFriend accepts a boolean value and a string. 
  Pass in the friendsAvailable variable and name to callFriend.

Create a function callFriend that accepts a boolean value and a string. 
  If the boolean value is true, 
    callFriend should return the string 'Plans made with NAME this weekend'. 
  Otherwise it should return 'Everyone is busy this weekend'.
*/

let friendsAvailable = true;

//declare a function makePlans
//input: string (name)
//output: evaluated result of invoking callFriend
function makePlans(name) {
  // INSERT CODE HERE
  //need to pass in the arguments for callFriend (boolean value and string)
  return callFriend(friendsAvailable, name);
}

//declare a function callFriend
//input: boolean, string (name)
//output: string 
function callFriend(bool, name) {
  // INSERT CODE HERE
  if(bool === true){
    return `Plans made with ${name} this weekend`;
  }
  else {
    return `Everyone is busy this weekend`;
  }
}

//Es6
// const makePlans = name => callFriend(friendsAvailable, name);

// const callFriend = (bool, name) => bool === true ? `Plans made with ${name} this weekend` : `Everyone is busy this weekend`;

// Uncomment these to check your work!
console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans("James")) //should return: "Everyone is busy this weekend."

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 9: Functions - Display vs. Execution

/*
Create a console log that displays the contents of the function rather than executing it. 
  For example, your result should be function add20 (num){ return num + 20 }.
*/

function add20 (num){
  return num + 20
}

// CREATE YOUR CONSOLE.LOG BELOW 
console.log(add20)

//notice how we didn't invoke the function add20
//this will just display the contents of the function
//add20() would invoke the function rather than display its content

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 10: isOdd

/*
Create a function isOdd that accepts a number argument. 
  isOdd will return true if the number is odd and false if the number is even.
*/

//declare a function isOdd
//input: number
//output: boolean
function isOdd(num){
  if(num % 2 === 0){
    return false;
  }
  else {
    return true;
  }
}

// Uncomment these to check your work!
console.log(isOdd(5)); // should log: true
console.log(isOdd(2008)); // should log: false

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 11: Control Flow - if statements & remainders

/*
Write a function iLoveEvenNumbers that takes a number argument and returns 'Oh Yeah Evens!' 
  if the argument is even or 'I am too normal for odd numbers' if the argument is odd.
*/

//declare a function iLoveEvenNumbers
//input: number
//output: string
//if even: return 'Oh Yeah Evens!'
//if odd: return 'I am too normal for odd numbers'

const iLoveEvenNumbers = num => num % 2 === 0 ? 'Oh Yeah Evens!' : 'I am too normal for odd numbers';

//Written out
// function iLoveEvenNumbers(num){
//   if(num % 2 === 0){
//     return 'Oh Yeah Evens!';
//   }
//   else{
//     return 'I am too normal for odd numbers';
//   }
// }

// Uncomment these to check your work!
console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 12: getRemainder

/*
Create a function getRemainder that takes two numbers and returns the remainder 
  (value left over from division) of dividing the larger number by the smaller one.

Hint- You have no guarantee which number will be the bigger number, 
  how can you determine which is which?
*/

//declare a function getRemainder
//input: number (2)
//output: number (value left over from division) 
const getRemainder = (num1, num2) => {
  // INSERT CODE HERE
  if (num1 > num2) {
    return num1 % num2;
  }
  else {
    return num2 % num1;
  }
}

// Uncomment the lines below to test your code
console.log(getRemainder(17, 5)); // => 2
console.log(getRemainder(20, 5)); // => 0
console.log(getRemainder(8, 22)); // => 6
console.log(getRemainder(7, 42)); // => 0

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 13: Control Flow - if statements & multiple conditions

/*
Using an IF/ELSE statement, write a function greetings which returns 
  'Good Morning!' if the hour is before 12, 
  'Good Afternoon!' if the hour is before 15, 
  or 'Good Night!' if the hour is 15 or after.
*/

//declare a function greetings
//input: number
//output: string 
//use an if/else statement
//if hour is before 12 return 'Good Morning!'
//if hour is before 15 return 'Good Afternoon!'
//if hour is 15 or after return 'Good Night!'
const greetings = (hour) => {
  // ADD CODE HERE
  if (hour < 12) {
    return 'Good Morning!';
  }
  else if (12 <= hour && hour < 15) {
    return 'Good Afternoon!';
  }
  else {
    return 'Good Night!';
  }
}

// Uncomment these to check your work!
console.log(greetings(8)); // expected log 'Good Morning!'
console.log(greetings(12)); // expected log 'Good Afternoon!'
console.log(greetings(14)); // expected log 'Good Afternoon!'
console.log(greetings(15)); // expected log 'Good Night!'
console.log(greetings(18)); // expected log 'Good Night!'

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 14: gradeCalculator

/*
Create a function gradeCalculator which takes a grade (number) and returns its letter grade.
  -grades 90 and above should return "A"
  -grades 80 to 89 should return "B"
  -grades 70 to 79 should return "C"
  -grades 60 to 69 should return "D"
  -59 and below should return "F"
*/

//declare a function gradeCalculator
//input: number
//output: string
const gradeCalculator = (grade) => {
  // ADD CODE HERE
  if (grade >= 90) {
    return 'A';
  }
  else if (grade >= 80) {
    return 'B';
  }
  else if (grade >= 70) {
    return 'C';
  }
  else if (grade >= 60) {
    return 'D';
  }
  else {
    return 'F';
  }
}

// Uncomment the lines below to test your code
console.log(gradeCalculator(92)); // => "A"
console.log(gradeCalculator(84)); // => "B"
console.log(gradeCalculator(70)); // => "C"
console.log(gradeCalculator(61)); // => "D"
console.log(gradeCalculator(43)); // => "F"

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 15: droids

/*
Complete the function droids that accepts an array of strings and iterates through the array using a FOR loop. 
  Update the variable result to "Found Droids!" if the array contains the string "Droids". 
  Otherwise update the variable result to "These are not the droids you're looking for."
  Return your updated result.
*/

//declare function droids
//input: array
//output: string
const droids = (arr) => {
  let result = '';
  // ADD CODE HERE
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 'Droids') {
      result = "Found Droids!";
    }
    else {
      result = "These are not the droids you're looking for."; 
    }
  }
  return result;
}

// Uncomment these to check your work! 
const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
console.log(droids(starWars)) // should log: "Found Droids!"
console.log(droids(thrones)) // should log: "These are not the droids you're looking for."

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 16: using forEach

/*
Recreate the function droids from the previous challenge, 
  but instead of using a FOR loop, use the built-in forEach method.
*/

const droids = (arr) => {
  let result = '';
  // ADD CODE HERE
  arr.forEach(ele => {
    if(ele === 'Droids') {
      result = "Found Droids!"
    }
    else {
      result = "These are not the droids you're looking for."
    }
  })
  return result;
}

// Uncomment these to check your work! 
const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
console.log(droids(starWars)) // should log: "Found Droids!"
console.log(droids(thrones)) //should log: "These are not the droids you're looking for."

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 17: Short-Circuiting a Loop

/*
Complete the function holidays that accepts an array of strings and iterates through the array. 
  If the array contains the string "October", return "Happy Halloween". 
  Otherwise, return the string "Have a great day!". 
  Do not use a variable to store the result that you are returning.
*/

// Do not use a variable to store your result 

//declare a function holidays
//input: array (of strings)
//output: string

function holidays(arr) {
  // Do not use a variable to store your result 
  // ADD CODE HERE
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 'October') {
      return "Happy Halloween";
    }
  }
  return "Have a great day!";
}
//*mistake i made when trying to write this code was writing an else statement within the for loop
//it printed => 'Have a great day' instead of 'Happy Halloween'
//since my return "Have a great day!" statement is inside of the for loop, the program hits that line on just the first iteration (after checking that arr[0] does not match "October").
//This short circuits the for loop and returns "Have a great day" out of the function, so the loop doesn't get a chance to check the remaining array elements.
//can't use the forEach method bc this is for short-circuiting a for loop
// Uncomment these to check your work!
const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 18: For Loops - Updating Array Elements

/*
Using a FOR loop, write a function addN 
  which adds the argument n to each number in the array arr and returns the updated arr.
*/

//declare a function addN
//input: array, number
//output: array
function addN(arr, n){
  // ADD CODE HERE
  for (let i = 0; i < arr.length; i++){
    //+= use this to add n and reaassign the value of arr[i] w/in the array
   	arr[i] += n;
  }
  return arr;
} 

// Uncomment these to check your work!
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 19: For Loops - Summing Array Elements

/*
Using a FOR loop, write a function getTheSum which adds each element in arr to find the array total.
*/

//declare function getTheSum
//input: array (numbers)
//output: number (total of all input elements)
function getTheSum(arr){
  // ADD CODE HERE
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 20: multiplyAll

/*
Create a function multiplyAll that takes an unknown number of integer arguments, 
	multiplies them all together, and returns the result.
*/

//declare function multiplyAll
//input: number (unknown number of integer arguments)
//output: number (all inputs multiplied together)
//since the number of arguments is unknown, we are going to use the rest parameter (...parameter)
const multiplyAll = (...num) => {
  let product = 1;
  for (let i = 0; i < num.length; i++){
    product *= num[i];
  }
  return product;
}

// Uncomment these to check your work!
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 21: Loops - Summing Two Arrays

/*
Write a function mergingElements which adds each element in array1 to the corresponding element of array2 
	and returns the new array.
*/

//declare function mergingElements
//input: array (2)
//output: array (sum of elements from input arrays)
function mergingElements(array1, array2){
  // ADD CODE HERE
  let merged = [];
  for (let i = 0; i < array1.length; i++) {
    //push the sum of the elements at each index into the new array
    merged.push(array1[i] + array2[i]);
  }
  return merged;
}

// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 22: Loops & Control Flow

/*
Write a function mergingTripletsAndQuints which takes in two arrays as arguments. 
	This function will return a new array replacing the elements in array1 if they are divisible by 3 or 5. 
	The number should be replaced with the sum of itself added to the element at the corresponding index in array2.
*/

//declare a function mergingTripletsAndQuints
//input: array (2: numbers)
//output: array (replace elements in array1 that are divisible by 3 and 5 with the sum of element added to the element at the corresponding index in array2)
// function mergingTripletsAndQuints(array1, array2) {
//  // ADD CODE HERE
//   let newArr = [];
//   for (let i = 0; i < array1.length; i++){
//     if (array1[i] % 3 === 0 || array1[i] % 5 === 0) {
//       newArr.push(array1[i] + array2[i]);
//     }
//     else {
//       newArr.push(array1[i]);
//     }
//   }
//   return newArr;
// }

//solution ES6 reassigning the values in array1
const mergingTripletsAndQuints = (array1, array2) => {
  for (let i = 0; i < array1.length; i++){
    if (array1[i] % 3 === 0 || array1[i] % 5 === 0) {
      array1[i] = array1[i] + array2[i];
    }
  }
  return array1;
}
// Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 23: While Loops - Counters

/*
Using a WHILE loop, write a function imAboutToExplodeWithExcitement which prints a countdown from n. 
	When the countdown gets to 5, print 'Oh wow, I can't handle the anticipation!' 
	When it's at 3, print 'I'm about to explode with excitement!' 
	When the counter is finished, print 'That was kind of a let down'.
*/

//declare a function imAboutToExplodeWithExcitement
//input: number
//output: number
function imAboutToExplodeWithExcitement(n){
  // ADD CODE HERE
  while (n >= 0) {
    if (n === 5) {
      console.log(`Oh wow, I can't handle the anticipation!`)
    }
    else if (n === 3) {
      console.log(`I'm about to explode with excitement!`)
    }
    else if (n === 0) {
      console.log(`That was kind of a let down`)
    }
    else {
      console.log(n);
    }
    n--;
  }
}

// Uncomment the line below to check your work!
imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 24: Control Flow - if statements and the Math object

/*
Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments. 
	The function will return 'Player 1 is closest' or 'Player 2 is closest' 
	depending on which player input is closest to the randomly generated number.

Note: Due to the output being based off of a random factor, 
	the tests provided below cannot determine if you have solved the prompt exactly. 
	The test cases for this challenge check for the correct data types only.
*/

//declare a function
//input: number
//output: string
function closestToTheMark(player1, player2){
  const theMark = Math.floor(Math.random() * 100)
  console.log(`If theMark is ${theMark}...`);
  // ADD CODE HERE
  if (Math.abs(theMark - player1) < Math.abs(theMark - player2)) {
    return 'Player 1 is closest';
  }
  else {
    return 'Player 2 is closest';
  }
}

// Uncomment the line below to check your work!
console.log(closestToTheMark(25, 75));
//Example:
// 'If theMark is 26...''Player 1 is closest'

//Vocab
//Math.floor: function that returns the largest integer less than/equal to a given number
//Math.random: function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range ??? which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
//Math.abs(): function returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 25: Loops - Range

/*
Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. 
	The value returned should be an array with the low, high, and range.
*/

//declare a function getTheRange
//input: array (numbers)
//output: array (low, high, range)
function getTheRange(arr){
  // ADD CODE HERE
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  let range = max - min;
  return arr = [min, max, range];
}

//Using Math.min/Math.max methods
// const getTheRange = arr => {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   let range = max - min;
//   return arr = [min, max, range];
// }

// Uncomment these to check your work!
console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 26: Loops - Multiple Conditions

/*
Write a function addingAllTheWeirdStuff 
	which adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
	Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 
	to those elements over 10 in array1.

BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.
*/

//declare a function addingAllTheWeirdStuff
//input: array (numbers)
//output: array
function addingAllTheWeirdStuff(array1, array2){
  // ADD CODE HERE
  let sumOfOdd = 0;
  let sumOfEven = 0;
  let greaterThan20 = false;
  
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) {
      sumOfEven += array2[i];
    }
    else {
      sumOfOdd += array2[i];
    }
    if (array2[i] > 20) {
      greaterThan20 = true;
    }
  }
  
  if (greaterThan20 === true) {
    sumOfOdd += 1;
    sumOfEven += 1;
  }
  
  for (let j = 0; j < array1.length; j++) {
    if (array1[j] > 10) {
      array1[j] = array1[j] + sumOfEven;
    }
    if (array1[j] < 10) {
      array1[j] = array1[j] + sumOfOdd;
    }
  }

  return array1;
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 27: disemvowel

/*
Write a function disemvowel that takes in a string and returns a new string with all vowels removed.
*/

//declare a function
//input: string
//output: string (w/out vowels)
function disemvowel(string) { //'Codesmith is the best'
  //declare a variable vowel
  //use replace() method to remove vowels from string
  const vowel = /[AEIOUaeiou]/g;
  string = string.replace(vowel, '')
  
  return string;
}

// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 28: addWaldo

/*
Create a function addWaldo that accepts an object with keys being first names and values being last names. 
	For example addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'}) 
	should add the key 'Waldo' with the value 'unknown' to the object and return the mutated object.
*/

//declare a function addWaldo that accepts and object for its parameter
	//needs to add the key Waldo with an unknown value into any object that 	invokes the function
function addWaldo(place){
  //declare a variable with the key and value that needs to be added to object
  let waldo = {'Waldo': 'unknown'};
  //use Object.assign() method to add the value waldo to current object
  //return place
  return Object.assign(place, waldo);
  // place['Waldo'] = 'unknown';
  // return place;
}
 
//bracket notation or dot notation
//function addWaldo(place){
  // place['Waldo'] = 'unknown';
  // return place;
//}

// Uncomment these to check your work!
const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }

//Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 29:

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 30:

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 31:

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Challenge 32:







