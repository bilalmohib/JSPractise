//1) Reverse words
function reverseWords(str) {
    // Go for it
    let reversed;
    let newArray = [];
    reversed = str.split(" ");
    for (var i = 0; i < reversed.length; i++) {
        newArray.push(reversed[i].split("").reverse().join(""));
    }
    return newArray.join(" ");
}
//let reversedString = reverseWords("This is fun, hopefully.");
//console.log("This is the reversed string : ", reversedString);

///////////////////////////////////////////////////////////////////////////////////////
//2) Friend or Foe? 
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
function friend(friends) {
    let originalFriendsArray = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
            originalFriendsArray.push(friends[i]);
        }
    }
    return originalFriendsArray;
}
//let friendslist = friend(["Ryan", "Kieran", "Mark"]);
//console.log(`This is the friends list: ${friendslist}`)

///////////////////////////////////////////////////////////////////////////////////////
// 3) Sum of odd numbers
// function rowSumOddNumbers(n) {
//     // SUM variable to store the sum of the nth row of the triangle
//     let sum = 0;
//     let length = Math.pow(n,n);
//     console.log("Length==>",length)
//     for (let i = n-1; i < length; i++) {
//         if (i % 2 != 0) {
//             //console.log(i)
//             sum = sum + i;
//         }
//     }
//     return sum;
// }
// let sumofOddNumbers = rowSumOddNumbers(2);
// console.log("The sum of 2th row of odd numbers triangle is: ", sumofOddNumbers)

//4) Number of people in the bus
var number = function (busStops) {
    // Good Luck!
    for (let i = 0; i < busStops.length; i++) {
        for (let j = 0; i < busStops.length; j++) {
            console.log(number[i]) 
        }
    }

}
let num_of_people_in_bus = number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]);
console.log("The number of people in bus are : ", num_of_people_in_bus);

////////////////////////////////////////////////////////////////////////////////
// 5) 

