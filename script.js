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
