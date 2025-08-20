// Write a function that returns the longest word in the sentence.

// split the sentence into an array of words
function findLongestWord(sentence){
    const words = sentence.trim().split(" ");
    let longestword = "";

    // iterate through each word in the array
    for(let word of words){
        // check if the current word is longer than the current longest word
        if(word.length > longestword.length){
            // if true, update the longestword variable
            longestword = word;
        }                                                                                                                                                                                                                                                                                                                                                                                                                               `   `
    }
return longestword;
}
console.log(findLongestWord(" I love coding in javascript"));