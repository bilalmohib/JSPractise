// Math Challenge
// Have the function MathChallenge(num) determine if a number is Happy, which is a number whose sum of the square of the digits eventually converges to 1. Return true if it's a Happy number, otherwise return false.

// For example: the number 10 is Happy because 1^2 + 0^2 converges to 1.
// Examples
// Input: 1
// Output: true
// Input: 101
// Output: false
function MathChallenge(num) {
    // code goes here  
    let convertedToStringNumber = num.toString();
    let lengthOfString = convertedToStringNumber.length;
    console.log("Length of String is ==> ", lengthOfString);

    console.log("\nNow printing the values in each iteration.Here it goes.");
    let value = 0;
    for (let i = 0; i < lengthOfString; i++) {
        console.log(convertedToStringNumber[i]);
        value += Math.pow(convertedToStringNumber[i], 2);
    }
    console.log("\nValue is ==> ", value);
    num = value;
    return num;   
}

// keep this function call here 
MathChallenge(10);