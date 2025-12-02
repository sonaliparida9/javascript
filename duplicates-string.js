function removeDuplicates(arr){
    const newvalue= [];
    for(let i=0; i<arr.length; i++){
        if(newvalue.indexOf(arr[i])===-1){
            newvalue.push(arr[i])
        }
    }
    return newvalue;
}
console.log(removeDuplicates([1,2,2,3,4,5,3,6,4,5,7]))