//Clearing the console
console.clear();

//Printing hello
console.log("Long Live Islam and Pakistan");

var names = "bilal mohib";

let other_name = "siddiqui";

const dont_change = "This is constant";

console.clear();
console.log(`${names} ${other_name} ${dont_change}`);

// Now, let's look at the JavaScript built-in Math object. Write the Math object PI property:
console.log("The Math Pi method is returns : " + Math.PI); 

console.log("The Math Random method returns : " + Math.random()); 

// < 0.9857480203668554
// The Math.random() method returns a random number from the range 0 and 1, both inclusive. It returns a different value with every call.
// Invoke the random method for the Math object:
// > Math.random()
// <·0.3588305599787365
// Invoke the random method for the Math object:
// > Math.random()
// <·0.45663802022566413

// Use the Math object's round method:
console.log("Rounding off 10.5 equals ",Math.round(10.5));

// Use the Math object's round method:
// >Math.round(10.4)
// <·10
// The Math.round() method returns the number after rounding it off to its nearest integer.
// Use the Math object's ceil method:
console.log("Using Math ceil for 10.5 equals : ",Math.ceil(10.5));
// > Math.ceil(10.5)
// <·11
// The Math.ceil() method returns the next smallest integer value that is greater than, or equal to, the given argument.
// Use the Math object's ceil method:
// > Math.ceil(10.4)
// <·11
// Use the Math object's floor method:
console.log("Using Math Floor for 10.4 returns : ",Math.floor(10.4));
// <·10
// The Math.floor() method returns the previous largest integer value that is less than, or equal to, the given argument.
// Use the Math object's floor method:
// > Math.floor(10.6)
// <·10
// This is the expression we use to get a random dice value. The floor method argument is an expression, that is, Math.random() * 6. Its result is added to 1:
// >Math.floor(Math.random() * 6) + 1
// \\Output
// < 1