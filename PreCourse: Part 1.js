/*
What happens when JS code 'runs'?
  
  -engine goes through code line by line and saves the info ('data') we use special declaration keywords
      keywords: 
        var - mutable variable (don't use anymore)
        let - mutable variable
        const - immutable variable
        
      example:
        let name = 'codesmith';
          let - keyword
          name - label
          'codesmith' - value
         
  -when JS runs
    -opens up an execution context and global memory
      -thread of execution runs in EC
      -variables, objects, and func defs get stored in global memory
*/


//Challenge 1: Comments and the Console
/*
Now it's your turn! Go ahead and give it a try yourself! 
Create your own console.log below line 4. You can print any word or phrase you like to the console. 
Just make sure you put the word or phrase in between quotes ("") like the example. 
We'll go into detail very soon as to what that means.
*/

// Try un-commenting the line below
// console.log("Hello World!") //'Hello World!'

// ADD CODE BELOW HERE
// console.log('Hello everyone~') // 'Hello everyone~'


//Challenge 2: Variable Assignment (var)
/*
Now that we know what variables are, let's create one of our own. 
Below line 6, declare a variable named lastName and assign it the value of your last name. 
Make sure you wrap your name in quotation marks, e.g. "Smith". Here's another example in case:

var myName = "Kyle";
console.log(myName) // => "Kyle"

Now, go back to line 1 and modify the value of firstName to be your first name. 
Uncomment the console.log statement on line 10 and run your code; 
you should see Jenny replaced by your first name—unless your first name is Jenny, of course.
*/

var firstName = "Lara";

// Try un-commenting the line below
// console.log("Hi, " + firstName) // 'Hi, Lara'

// ADD CODE HERE
var lastName = 'Han';

// Uncomment the line below to check your work!
// console.log("Hi, " + firstName + " " + lastName); //'Hi, Lara Han'


//Challenge 3: Variable Assignment (let)
/*
But wait! Maybe tacos aren't YOUR favorite food. 
Luckily, since we declared our variable, favFood, 
using the let keyword, we can reassign it's value to something different!

The best part is we don't have to declare the variable again. 
All we need to do is reassign it's value. Check out the example below:

let lastName = "Snow";
console.log(lastName); // => Snow
lastName = "Targaryen";
console.log(lastName); // => Targaryen
*/

// Declare a variable favFood and assign it a value of "tacos"
// ADD CODE HERE
let favFood = 'tacos';

// Try un-commenting the line below to test your answer
// console.log("My favorite food is " + favFood); // 'My favorite food is tacos'

// ADD CODE HERE
favFood = 'soondubu jjigae';

// Uncomment the line below to check your work!
// console.log("No, but really, my favorite food is " + favFood); // 'No, but really, my favorite food is soondubu jjigae'


//Challenge 4: Variable Assignment (const)
/*
As we metioned in the previous lesson, sometimes we want a variable who's value never changes. 
In this case we use the const keyword. 
*/

// Declare a constant myCodingConfidence and assign it a value of "unwavering"
// ADD CODE HERE
const myCodingConfidence = 'unwavering';

// Try un-commenting the line below to test your answer
// console.log("My confidence in my coding ability is " + myCodingConfidence); //'My confidence in my coding ability is unwavering'

// ADD CODE HERE
// myCodingConfidence = 'shaky'; // Type Error on line 107: Assignment to constant variable.


//Challenge 5: Primitive Data Types
/*
Now that you have been introduced to some of JavaScript's data types, 
take a stab at declaring some variables below with different data types. 
Make sure to read the challenge carefully so you know if you should be using let or const!

  Challenge 1: Declare a constant name that is a string, and set it equal to your name.

  Challenge 2: Declare a variable age that is a number, and set it equal to your age.

  Challenge 3: Declare a constant loveJavaScript that is a boolean, and set it equal to true.

  Challenge 4: Declare a variable listOfComplaints and set it's value to null
*/

// ADD CODE HERE
const name = 'Lara'; //string
let age = 28; //number
const loveJavaScript = true; //boolean
let listOfComplaints = null; //null


// Uncomment these to check your work!
// console.log('My name is ' + name);
// console.log('I am ' + age + ' years old');
// console.log('It\'s ' + loveJavaScript + ', I love JavaScript');
// console.log('The list of things I hate about JavaScript is ' + listOfComplaints);

/* in the console
'My name is Lara'
'I am 28 years old'
'It's true, I love JavaScript'
'The list of things I hate about JavaScript is null'
*/


//Challenge 6: Strings
/*
Strings are a data type in JavaScript. 
In short, they are bits of text written inside of quotation marks. 
You can use either single quotes ('), double quotes ("), or backticks (`) 
  as quotation marks to wrap a string, as long as the opening and closing symbols match. 
They are particularly useful for any data or value that can be represented as plain text.
*/

// Uncomment the lines below to see examples of strings
// console.log('A string can be written inside of single quotes.');
// console.log("It can also be written inside of double quotes.");
// console.log(`Backticks work, too.`);

// ADD CODE BELOW
let mySingleString = 'I can use single quotes for strings.'
let myDoubleString = "Double quotes works for strings too."
let myBackString = `Don't forget backticks work as well.`


// Uncomment the line below to check your work!
// console.log(mySingleString);
// console.log(myDoubleString);
// console.log(myBackString);


//Challenge 6: Strings- Escape Sequences
/*
Notice how when we put the (\) in front of the (') it didn't end our string? 
This is called escaping the character. 
Anytime JavaScript sees a (\) inside of a string, it knows that the following character has a special meaning. 
Here is a list of some of the most common escape sequences:

\' => single quote
\" => double quote
\\ => backslash
\n => newline
\r => carriage return
\t => tab
\b => backspace
\f => form feed
Notice that even a backslash itself has to be escaped in order to display inside a string as well. 
Now let's see what you can do!
*/

const path = "C:\\Users\\Win\\Files\\javascript.js";
// console.log(path); //'C:\Users\Win\Files\javascript.js'

const heSaid = "He said, \"Hey Foo!\"";
// console.log(heSaid); //'He said, "Hey Foo!"'

const sheSaid = 'My name ain\'t Foo!';
// console.log(sheSaid); //'My name ain't Foo!'


//Challenge 7: String Concatenation
/*
Use string concatenation to join the three provided strings 
  (first, second, and third) and assign the resulting string to a variable called welcomeStatement. 
The value of welcomeStatement should be 'Welcome to the jungle!'
*/

const first = "Welcome";
const second = "to the";
const third = "jungle!";

// ADD CODE BELOW
const welcomeStatement = first + ' ' + second + ' ' + third;

// Uncomment the line below to check your work!
// console.log(welcomeStatement); //'Welcome to the jungle!'


//Challenge 8: Template Literal
/*
Declare 2 variables x & y, and set their values to any number you like. 
Next declare a constant solution which is a string that prints to the console like the example below:

let x = 2;
let y = 5;
const solution = <insert your code here>;
console.log(solution) // => "The sum of 2 and 5 is 7"
*/

// Declare 2 variables x & y that are Numbers
// Declare a string 'solution' that when printed to the console reads like:
// "The sum of <x> and <y> is <x + y>"
// ADD CODE BELOW

let x = 5;
let y = 10;
const solution = `The sum of ${x} and ${y} is ${x + y}`;

// console.log(solution); //'The sum of 5 and 10 is 15'


//Challenge 9: String Properties and Methods
/*
1. Declare a variable count and set its value equal to the length property of the string variable hometown.

2. Declare a variable upper and set its value equal to the string favAlbum converted to uppercase letters.

3. Declare a variable lower and set its value equal to the string favAlbum converted to lowercase letters.
*/

let hometown = "New York City";
let favAlbum = "The Rise and Fall of Ziggy Stardust and the Spiders From Mars"

// ADD CODE BELOW
let count = hometown.length;
let upper = favAlbum.toUpperCase();
let lower = favAlbum.toLowerCase();

// Uncomment the line below to check your work!
// console.log(count); //13
// console.log(upper); //'THE RISE AND FALL OF ZIGGY STARDUST AND THE SPIDERS FROM MARS'
// console.log(lower); //'the rise and fall of ziggy stardust and the spiders from mars'


//Challenge 10: Bracket Notation for Strings
/*
1. Declare a variable firstLetter and assign it a value of the first letter of songTitle using bracket notation.

2. Declare a variable seventhLetter and assign it a value of the seventh letter of songTitle using bracket notation.

3. Declare a variable lastLetter and assign it a value of 
  the last letter of lyrics using bracket notation and the .length property we learned in the last challenge.
*/

const songTitle = "Space Oddity"
const lyrics = "This is Ground Control to Major Tom / You’ve really made the grade"

// ADD CODE BELOW
const firstLetter = songTitle[0];
const seventhLetter = songTitle[6];
const lastLetter = lyrics[lyrics.length - 1]

// Uncomment the line below to check your work!
// console.log(firstLetter); // S
// console.log(seventhLetter); // O
// console.log(lastLetter); // e


//Challenge 11: Numbers- Addition/Subtraction
/*
Create a variable birthYear and set it equal to the year of your birth.

Next, create a variable named age and set the value to your current age.

Finally, create a variable named in10Yrs and set the value to equal your age plus 10.
*/

// ADD CODE BELOW
const birthYear = 1994;
let age = 28;
let in10Yrs = age + 10;

// Uncomment these to check your work!
// console.log(birthYear); //1994
// console.log(age); //28
// console.log(in10Yrs); //38


//Challenge 12: Numbers- Multiplication/Division
/*
Perform the following multiplication/division operations in the code editor:

1. Multiply 20 by 4 and save the result to a variable called twentyTimesFour

2. Divide 9 by 3 and save the result to a variable called nineOverThree

3. Multiply 200.3 * 3 and save the result to a variable called twoHundredTimesThree

Floats
Any number with the decimal point is a float. 
Notice that in the last exercise you multiplied 200.3 by 3 and the output from that was 600.9000000000001. 
What happened here? Why didn't we get 600.9?
  The way floats are handled in JavaScript can cause these rounding errors. 
  Some decimal numbers cannot be represented accurately. 
  The reason has to do with how numbers are encoded in JavaScript. 
  It's something to be aware of when working with decimal numbers in JavaScript.
*/

// ADD CODE BELOW
const twentyTimesFour = 20 * 4;
const nineOverThree = 9 / 3;
const twoHundredTimesThree = 200.3 * 3;

// Uncomment these to check your work!
// console.log(twentyTimesFour); //80
// console.log(nineOverThree); //3
// console.log(twoHundredTimesThree); //600.9000000000001


//Challenge 13: Numbers- Exponents & Remainders
/*
The exponentiation operator (**) raises the first number to the power of the second number.

2 ** 2 = 4
2 ** 3 = 8
2 ** 4 = 16
4 ** 4 = 256

The modulus (remainder) operator (%) returns the remainder of dividing the first number by the second number.

4 % 2 = 0
4 % 3 = 1
4 % 5 = 4

1. Declare a constant fiveSquared and assign it the value of 5 to the power of 2 using the exponentiation operator.

2. Declare a constant eightCubed and assign it the value of 8 to the power of 3 using the exponentiation operator.

3. Declare a constant sevenToTheSixth and assign it the value of 7 to the power of 6 using the exponentiation operator.

4. Declare a constant eightyThreeModSix and assign it remainder of dividing 83 by 6.

5. Declare a constant sixtyModNine and assign it the remainder of dividing 60 by 9.
*/

// ADD CODE BELOW
const fiveSquared = 5 ** 2;
const eightCubed = 8 ** 3;
const sevenToTheSixth = 7 ** 6;
const eightyThreeModSix = 83 % 6;
const sixtyModNine = 60 % 9;


// ADD CONSOLE LOGS BELOW
// console.log(fiveSquared); //25
// console.log(eightCubed); //512
// console.log(sevenToTheSixth); //117649
// console.log(eightyThreeModSix); //5
// console.log(sixtyModNine); //6


//Challenge 14: Numbers- Incrementor & Decrementor
/*
let num = 7;

num = num + 1;
console.log(num); // => 8

*Notice how we use the syntax num = num + 1 to change the value of num. 
  Wouldn't it be nice if we didn't have to type our variable name in twice?

let num = 10;

num++
console.log(num) // => 11

*In the above example, just by using num++ we were able to increment the value of num by 1. 
  Likewise, if we wanted to decrement the value by one, we could use num--. 

1. Using the incrementor operator, increase the value of num1 by 1.

2. Using the decrementor operator, decrease the value of num2 by 1.
*/

let num1 = 32;
let num2 = 44;

// ADD CODE BELOW HERE
num1++;
num2--;

// console.log(num1); //33
// console.log(num2); //43


//Challenge 15: Numbers- Assignment Operators
/*
let num = 5;

num += 10
console.log(num) // => 15
*Here, we have the syntax of num += 10. 
  This is the same thing as typing num = num + 10. 
  By using the addition assignment operator (+=) 
  we are able to add 10 to num similarly to how we did above with the incrementor/decrementor.

Each arithmetic operator has its own assignment operator:

+= - addition
-= - subtraction
*= - multiplication
/= - division

1. Using the appropriate assignment operator, reassign the value of num1 to the current value plus 17.

2. Using the appropriate assignment operator, reassign the value of num2 to the current value minus 14.

3. Using the appropriate assignment operator, reassign the value of num3 to the current value times 11.

4. Using the appropriate assignment operator, reassign the value of num4 to the current value divided by 8.
*/

let num1 = 32;
let num2 = 25;
let num3 = 92;
let num4 = 64;

// ADD CODE BELOW HERE
num1 += 17;
num2 -= 14;
num3 *= 11;
num4 /= 8;

// console.log(num1); //49
// console.log(num2); //11
// console.log(num3); //1012
// console.log(num4); //8


//Challenge 16: Booleans
/*
JavaScript boolean values can be either true or false. 
  They are useful for determining whether or not blocks of code should be executed. 
  They are also the default result for many evaluations.

1. Below line 3, reassign the value of iHaveChanged to true.

2. Declare a variable iLoveCoding and assign it a boolean value of true.

3. Declare a variable codingIsTooHard and assign it the boolean value of false.
*/

let iHaveChanged = false;

// ADD CODE BELOW
iHaveChanged = true;
let iLoveCoding = true;
let codingIsTooHard = false;


//Challenge 17: Booleans- Comparison Operators
/*
In programming, when working with data, we often need to compare different values. 
  To do this, we use a series of operators called comparison operators. 
  
Most common comparison operators:
< - Less than
> - Greater than
<= - Less than or equal to
>= - Greater than or equal to
== - Is loosely equal to
=== - Is strictly equal to
!= - Is not loosely equal to
!== - Is not strictly equal to

1. Compare small and large using the < operator. Assign the result to a variable called isSmaller.

2. Compare num and string. First, use the == operator to compare the two variables, and assign the result to a variable calledisLooselyEqual. Second, use the === operator to compare the variables; assign the result to a variable called isStrictlyEqual.

3. Compare isTrue and isFalse using the !== operator. Assign the result to a variable called isTrueNotFalse.
*/

// 1.
const small = 2;
const large = 5342;
// ADD CODE BELOW (isSmaller)
let isSmaller = small < large;

// console.log('Is 2 < 5342?');
// console.log(isSmaller); //true

// 2.
const num = 45;
const string = "45";
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)
let isLooselyEqual = num == string;
let isStrictlyEqual = num === string;

// console.log('Is 45 loosely equal to "45"?'); 
// console.log(isLooselyEqual); //true
// console.log('Is 45 strictly equal to "45"?');
// console.log(isStrictlyEqual); //false

// 3.
const isTrue = true;
const isFalse = false;
// ADD CODE BELOW (isTrueNotFalse)
let isTrueNotFalse = isTrue !== isFalse;

// console.log('Is true not equal to false?');
// console.log(isTrueNotFalse); //true


//Challenge 18: Type Coercion
/*
What happened is type coercion, an important concept in JavaScript. 
  We can't add a string value and a number value together; 
  instead, JavaScript "coerces" (changes) the number into a string 
  and treats the + operator as an instruction to concatenate strings.

console.log("10" + "5"); // 105
console.log("10" + 5); // 105
*/

// console.log(10 + 5); //15
// console.log("10" + 5); //105
// console.log(5 + "10"); //510


//Challenge 19: typeof Operator
/*
In JavaScript, the typeof operator returns the data type of its operand in the form of a string. 
  Operand can be any object, function or variable.

typeof("testing")   // => "string"
typeof(22)         // => "number"
typeof(false)      // => "boolean"

Keep in mind that the typeof an array is an object.

1. Declare a variable favMovieType. 
  Then, using the typeof operator, assign it the value of favMovie's data type.

2. Declare a variable timesSeenType. 
  Then, using the typeof operator, assign it the value of timesSeen's data type.

3. Declare a variable seeAgainType. 
  Then, using the typeof operator, assign it the value of goingToWatchItAgain's data type.
*/

const favMovie = "Star Wars: Episod IV";
const timesSeen = 732;
const goingToWatchItAgain = true; 

// ADD CODE BELOW HERE
const favMovieType = typeof(favMovie);
const timesSeenType = typeof(timesSeen);
const seeAgainType = typeof(goingToWatchItAgain);

// console.log(favMovieType); //string
// console.log(timesSeenType); //number
// console.log(seeAgainType); //boolean



















