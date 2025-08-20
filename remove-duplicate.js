// // Write a function to remove dupilicate elements from an array
// // using for loop
// function removeDuplicates(arr){
//     // Empty array to store unique elements
//     const uniqueElements = []

//     // loop through the input array
//     for (let i = 0; i<arr.length; i++) {
//         // check if the current element is already in tne uniqueElements array
//         if(uniqueElements.indexOf(arr[i]) === -1){
//             // if not found,push the element to the uniqueElements array
//             uniqueElements.push(arr[i])
//         }
//     }
//     return uniqueElements;
// }
console.log(removeDuplicates([1,1,2,3,3,4,4,5,5]))

// short cut using set

function removeDuplicates(arr){
    // step1: convert the array to a set
    // (which only allows unique values)
    // step2: convert the set back to an array
    return[...new Set(arr)];
}