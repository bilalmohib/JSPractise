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
let reversedString = reverseWords("This is fun, hopefully.");
console.log("This is the reversed string : ", reversedString);
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
let friendslist = friend(["Ryan", "Kieran", "Mark"]);
console.log(`This is the friends list: ${friendslist}`)