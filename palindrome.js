// Write a function that checks whether a given string is a palindrome or not? 
// A palindrome is a word that reads the same forward and backword.

function isPalindrome(str){
    // Reverse the string
    const reversedStr = str.split("").reverse().join("");
    // compare the reversed string with the original string
    return str === reversedStr;
}
console.log(isPalindrome("racecar"));