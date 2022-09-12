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



