//EX:1 print your name,age,and city

const name = "sonali";
const age = 21;
const city = 'BBSR';

console.log("Name:" + name);
console.log("Age:" + age);
console.log("City:" + city);    


// EX:2 create 3 variable using let, const,var and print them

let score = 79;
const pi = 3.141;
var language = "javascript";

console.log(score, pi, language);


// Ex:3 check types using typeof

let a = 10;
let b = "Hello";
let c = true;
let d = null;
let e;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d); // tricky!
console.log(typeof e);


// EX:4 Declare two numbers and print their addition

let num1 = 15;
let num2 = 25;
console.log("Addition:" + (num1 + num2));


// EX:5 take two string variables and print their concatenation

let str1 = "Hello, ";
let str2 = "World!";
console.log("Concatenation:" + (str1 + str2));


// EX:6 Create a variable, update it, and print old + new value.


let var1 = 50;  
console.log("Old Value:" + var1);
var1 = var1 + 30;
console.log("New Value:" + var1);



// EX:7 create two boolean variables and print their AND,OR operation

let bool1 = true;
let bool2 = false;          

console.log("AND Operation:" + (bool1 && bool2));
console.log("OR Operation:" + (bool1 || bool2));    


// EX:8 create a variable with undefined value and print it

let undefVar;
console.log("Undefined Variable:" + undefVar);


// EX:9 create a variable with null value and print it

let nullVar = null;
console.log("Null Variable:" + nullVar);

// EX:10 create two number variables and print their multiplication and division

let number1 = 20;
let number2 = 4;            
console.log("Multiplication:" + (number1 * number2));
console.log("Division:" + (number1 / number2));


// EX:11 create two string variables and print their length

let string1 = "JavaScript";
let string2 = "Programming";    

console.log("Length of string1:" + string1.length);
console.log("Length of string2:" + string2.length);


// EX:12 create a variable and print its value before and after updating it

let updateVar = 100;            
console.log("Before Update:" + updateVar);
updateVar = 200;
console.log("After Update:" + updateVar);

// EX:13 create a variable using var and let with same name and print their values

var varName = "I am var";
let letName = "I am let";   

console.log(varName);
console.log(letName);   

// EX:14 create a constant variable and try to update it

const constantVar = 3.14;
console.log("Constant Variable:" + constantVar);
// constantVar = 3.1415; // This will cause an error if uncommented


// EX:15 Declare a variable without assigning value → should be undefined.

let data;
console.log(data);        // undefined
console.log(typeof data); // undefined


// EX:16 swap two number variables and print their values before and after swapping

let x = 5;
let y = 10; 


console.log("Before Swapping: x=" + x + ", y=" + y);

let temp = x;
x = y;
y = temp;

console.log("After Swapping: x=" + x + ", y=" + y);


// EX:17 create a string and print its length

let msg = "javascript practice";
console.log("Length of msg:" +msg.length);

// Ex:18  check if a number is even or odd

