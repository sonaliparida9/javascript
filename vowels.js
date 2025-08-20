function countVowels(str){
    const vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"];
    let vowelCount = 0;
    let consonantCount = 0;
    // step 1: Iterate through each character in the string
    for(let char of str){
        // step 2: check if the character is a vowel
        if(vowels.includes(char)){
            // step 3: If true, increment the count
            vowelCount++;
        }
        else{
            consonantCount++;
        }
    }
    return {vowels: vowelCount, consonant: consonantCount};
}
console.log(countVowels("Hello, world!"));