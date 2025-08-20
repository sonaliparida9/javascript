// write a function that checks whether two strings are anagrams or not?
// An anagram is a word formed by rearranging the letters of another word.

// check for anagrams
console.log(areAnagrams("listen","silent"));

function areAnagrams(str1, str2){
    // step 1:Split the strings into arrays of characters
    // step 2:Sort the characters in each array
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    // step 3: Compare the sorted strings 
    return sortedStr1 === sortedStr2;
}

// Detect Anagrams in a List of Words

function findAnagrams(word, wordList) {
    const format = w => w.toLowerCase().split('').sort().join('');
    const target = format(word);

    return wordList.filter(w => format(w) === target);
}

// Example
const list = ["enlist", "google", "inlets", "banana", "listen"];
console.log(findAnagrams("silent", list));  
// Output: ['enlist', 'inlets', 'listen']


//  Check All Anagram Groups in a List

function groupAnagrams(words) {
    const map = {};

    for (const word of words) {
        const sorted = word.toLowerCase().split('').sort().join('');
        if (!map[sorted]) {
            map[sorted] = [];
        }
        map[sorted].push(word);
    }

    return Object.values(map).filter(group => group.length > 1);
}

// Example
const words = ["bat", "tab", "cat", "act", "tac", "dog"];
console.log(groupAnagrams(words));
// Output: [ [ 'bat', 'tab' ], [ 'cat', 'act', 'tac' ] ]
