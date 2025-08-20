// Write a function that returns the reverse of a string?

// function reverseString(str){
//     // Initialize an emapty string to
//     // store the reversed string
//     let reversed = "";

//     // iterate through the characters of the 
//     // input string is reverse order
//     for(let i=str.length-1; i>=0 ; i--){
//         reversed +=str[i];
//     }
//     return reversed;
// }
console.log(reverseString("hello"));

// Shortcut way

function reverseString(str){
    //Split the string into an array of characters
    // Reverse the order of elements in the array
    // join the characters back together into a str
    return str.split("").reverse().join("");
}