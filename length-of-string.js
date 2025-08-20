// find length of string with using .length

function findLength(str){
    return str.length;
}
console.log(findLength("JavaScript"));

// Find length of string without using .length
// Using for...of loop

function findLength(str){
    // start a counter at 0
    let count = 0;
    //  loop over each character in the string
    for(let char of str){
        // add 1 for each character seen
        count++;
    }
    return count; //give back the total
}
console.log(findLength("JavaScript"));

// using while loop and charAt()
function findLength(str){
    let count = 0;
    while(str.charAt(count) !== ""){
        count++;
    }
    return count;
}
console.log(findLength("Interview"));

// using Array methods (split)

function findLength(str){
    return str.split("").reduce(count => count+1, 0);
}
console.log(findLength("sonali"));