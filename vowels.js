function countVowels(str){
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    // step 1: Iterate through each character in the string
    for(let char of str.toLowerCase()){
        // step 2: check if the character is a vowel
        if(vowels.includes(char)){
            // step 3: If true, increment the count
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello, world!"));