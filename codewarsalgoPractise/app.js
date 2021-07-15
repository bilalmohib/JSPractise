//1) Reverse words
function reverseWords(str) {
    // Go for it
    let reversed;
    let newArray=[];
    reversed = str.split(" ");
    for(var i = 0;i<reversed.length; i++)
    {
        newArray.push(reversed[i].split("").reverse().join(""));       
    }
    return newArray.join(" ");
}
let reversedString = reverseWords("This is an example!");
console.log("This is the reversed string : ",reversedString);

//2)  