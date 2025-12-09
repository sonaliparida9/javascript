// BASIC CONSOLE USAGE

//1.log your name and favorite hobby to the console
console.log("sonali", "reading books");

//2. Perform and log the result of 45*2-10
console.log(45*2-10);

//3. use console.log() to display the current year
const dt = new Date();
console.log(dt.getFullYear());

//4. create two variables for first and last name. Concatenate and log them
let firstName = "Sonali";
let lastName = "Parida";
console.log(firstName + " " + lastName);

//5. Track the value of a variable by logging it before and after updating
var a =12;
console.log(a);
var a = 23
console.log(a);

//6. Use console.error() to simulate an error message.
console.error("Something want worng");

//7. Log the square of the nuber 12 to the console.
console.log(12*12);

// 8. Print the type of a variable holding the value true.
var a = true;
console.log(typeof a);

// 9. Create a variable holding your age and log whether it's greater than 18.
var age = 21;
if(age>18){
    console.log(true);
}

// 10. Log the result of 100/0 and observe the output
console.log(100/0);

// VAEIABLES AND DATA TYPES

// 11.Declare a variable using let and log its value.
let b = 10;
console.log(b);

// 12. Create a constant to store the value of PI and log it.
const pi = Math.PI;
console.log(pi);

// 13. Reassign a value to a variable declared with let and log the result
let aa = 12;
aa = 32;
console.log(aa);

// 14. Check the type of null and log it.
var n = null;
console.log(typeof n);
// jabhi typeof null nikaala jaayega null ka type humesha object aata hai

// 15. Create a variable with a number as a string(e.g.., "25" and log its type )
var numstr = "25";
console.log(typeof numstr);

// 16. use typeof to check the type of a boolean variable.
var bool = true;
console.log(typeof bool);

// 17. Declare a variable without initializing it and log its type.
var uninit;
console.log(typeof uninit);

// 18. Create a variable to hold a floating-point number and log its value.     
var floatnum = 12.34;
console.log(floatnum);

// 19. creat three variables of types string, number and boolean,and log their values.
let aaa = "sonali", bbb= 23, ccc = false;
console.log(aaa, bbb, ccc);

// 20. create a value with undefined and log its type.
var a = undefined;
console.log(typeof a)

// 21. use const to create an array. Try reassigning the array and observe the error.
const arr = [1,2,3,4];
// arr= []; //not reassignable
arr.pop(); //updatable
console.log(arr);


// Loops
//22. Write a for loop to print numbers from 1 to 50
for(let i=1; i<=50; i++){
    console.log(i);
}

// 23. Use a while loop to sum the numbers from 1 to 100
let d=1;
let sum=0;
while(d<=100){
    sum = sum + d;
    d++;
}
console.log(sum);

// 24. Create a for...of loop to log each character of the string "javascript".
var str = "JavaScript"
for(let character of str){
    console.log(character);
}

// 25. Write a for loop that skips even numbers between 1 and 20.
for(let i=1; i<=20; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}

// 26.Use a do...while loop to log numbers from 5 to 1.
var a = 5;
do{
    console.log(a);
    a--;
}
while(a>0)

// 27. Create a for loop that calculates the factorial of 5.
var fact = 1;
for(var i=5; i>0; i--){  
    fact = fact*i;
}
console.log(fact);

//28. Write a nested loop to print a 3*3 grid of numbers.
var hold = 1;
for(var i=1; i<4; i++){
    var str = "";
    for(var j=1; j<4; j++){
        str += `${hold} `;
        hold++

    }
    console.log(str);
} 

//29. Use a for loop to reverse an array [1,2,3,4].
var array = [1,2,3,4,5]
for(var i = 0; i < Math.floor(array.length/2); i++){
    var temp = array[i];
    array[i] = array[array.length - 1];
    array[array.length-1] = temp;
}
console.log(array);

//30. Use a for...in loop to iterate over an object and log its keys.
   var obj = {name:"sonali", age:22};
   for (let key in obj){
    console.log(key);
   }
//31. Write a while loop that logs numbers from 1 to 100 divisible by 5.
    var num = 1;
    while(num<101){
        if(num % 5 === 0){
            console.log(num);
        }
        num++;
    }


//  ARRAYS
// 32. Create an array of your top 5 favorite movies and log it.
 var arr1 = ["apple", "orange", "grapes", "banana", "mango"] ;
 arr1.forEach(function(value){
    console.log(value);
 })

// 33. Find and log the second element of an array.
var arr1 = [1,2,3,4,5];
console.log(arr[1])

// 34.Add two new elements to the start of an array using .unshift().
var arr1 =[1,2,3,4,5];
arr1.unshift(0,-1);
console.log(arr1);

// 35. Remove the last elements of an array and log the updated array.
var arr1 = [1,2,3,4,5];
arr1.pop();
console.log(arr1);

// 35. Use .slice() to extract the first three elements of an array.
 var arr1 = [1,2,3,4,5];
 console.log(arr1.slice(0,3));
