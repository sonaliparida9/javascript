function largestNumber(arr){
    let firstLargest = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>firstLargest){
            firstLargest=arr[i]
        }
    }
    console.log("largest number:",firstLargest);
}
largestNumber([1,23,45,2,5,40,8])