// BASIC CONSOLE USAGE

//1.log your name and favorite hobby to the console
console.log("sonali", "reading books");

//2. Perform and log the result of 45*2-10
console.log(45 * 2 - 10);

//3. use console.log() to display the current year
const dt = new Date();
console.log(dt.getFullYear());

//4. create two variables for first and last name. Concatenate and log them
let firstName = "Sonali";
let lastName = "Parida";
console.log(firstName + " " + lastName);

//5. Track the value of a variable by logging it before and after updating
var a = 12;
console.log(a);
var a = 23;
console.log(a);

//6. Use console.error() to simulate an error message.
console.error("Something want worng");

//7. Log the square of the nuber 12 to the console.
console.log(12 * 12);

// 8. Print the type of a variable holding the value true.
var a = true;
console.log(typeof a);

// 9. Create a variable holding your age and log whether it's greater than 18.
var age = 21;
if (age > 18) {
  console.log(true);
}

// 10. Log the result of 100/0 and observe the output
console.log(100 / 0);

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
let aaa = "sonali",
  bbb = 23,
  ccc = false;
console.log(aaa, bbb, ccc);

// 20. create a value with undefined and log its type.
var a = undefined;
console.log(typeof a);

// 21. use const to create an array. Try reassigning the array and observe the error.
const arr = [1, 2, 3, 4];
// arr= []; //not reassignable
arr.pop(); //updatable
console.log(arr);

// Loops
//22. Write a for loop to print numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
  console.log(i);
}

// 23. Use a while loop to sum the numbers from 1 to 100
let d = 1;
let sum = 0;
while (d <= 100) {
  sum = sum + d;
  d++;
}
console.log(sum);

// 24. Create a for...of loop to log each character of the string "javascript".
var str = "JavaScript";
for (let character of str) {
  console.log(character);
}

// Print only even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`even:${i}`);
  }
  console.log(`odd:${i}`);
}

// 25. Write a for loop that skips even numbers between 1 and 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 26.Use a do...while loop to log numbers from 5 to 1.
var a = 5;
do {
  console.log(a);
  a--;
} while (a > 0);

// 27. Create a for loop that calculates the factorial of 5.
var fact = 1;
for (var i = 5; i > 0; i--) {
  fact = fact * i;
}
console.log(fact);

//28. Write a nested loop to print a 3*3 grid of numbers.
var hold = 1;
for (var i = 1; i < 4; i++) {
  var str = "";
  for (var j = 1; j < 4; j++) {
    str += `${hold} `;
    hold++;
  }
  console.log(str);
}

//29. Use a for loop to reverse an array [1,2,3,4].
var array = [1, 2, 3, 4, 5];
for (var i = 0; i < Math.floor(array.length / 2); i++) {
  var temp = array[i];
  array[i] = array[array.length - 1];
  array[array.length - 1] = temp;
}
console.log(array);

//30. Use a for...in loop to iterate over an object and log its keys.
var obj = { name: "sonali", age: 22 };
for (let key in obj) {
  console.log(key);
}
//31. Write a while loop that logs numbers from 1 to 100 divisible by 5.
var num = 1;
while (num < 101) {
  if (num % 5 === 0) {
    console.log(num);
  }
  num++;
}

//  ARRAYS
// 32. Create an array of your top 5 favorite movies and log it.
var arr1 = ["apple", "orange", "grapes", "banana", "mango"];
arr1.forEach(function (value) {
  console.log(value);
});

// 33. Find and log the second element of an array.
var arr1 = [1, 2, 3, 4, 5];
console.log(arr[1]);

// 34.Add two new elements to the start of an array using .unshift().
var arr1 = [1, 2, 3, 4, 5];
arr1.unshift(0, -1);
console.log(arr1);

// 35. Remove the last elements of an array and log the updated array.
var arr1 = [1, 2, 3, 4, 5];
arr1.pop();
console.log(arr1);

// 36. Use .slice() to extract the first three elements of an array.
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1.slice(0, 3));

// 37. Find the index of a specific element in an array using  .indexof()
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1.indexOf(4));

// /38. Check if a value exists in an array using .includes().
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1.includes(3));

// 39. Combine two arrays [1,2] and [3,4] using .concat()
var arr1 = [1, 2];
var arr2 = [3, 4];
console.log(arr1.concat(arr2));

//40. Sort an array of numbers[5,2,9,1] in asending order.
var arr2 = [11, 24, 36, 4, 5];
for (var j = 0; j < arr2.length - 1; j++) {
  for (var i = 0; i < arr2.length - j - 1; i++) {
    if (arr2[i] > arr2[i + 1]) {
      var temp = arr2[i];
      arr2[i] = arr2[i + 1];
      arr2[i + 1] = temp;
    }
  }
}
console.log(arr2);

// 41. Write a program that creates a copy of an array without mutating/changing the original
// using spread operator.
var arr1 = [11, 22, 33, 44];
var arr2 = [...arr1];
console.log(arr2);

// using forEach
var arr1 = [11, 22, 33, 44];
var arr2 = [];

arr1.forEach(function (value) {
  arr2.push(value);
});

arr2.pop(); // changing arr2 to show arr1 is not mutated

console.log(arr1, arr2);

// FUNCTIONS
// 42. Write a function to check if a number is even or odd.
function evod(num) {
  if (num % 2 === 0) return "even";
  else return "odd";
}
console.log(evod(13));

// 43. Create a function to calculate the area of a circle with a given radius.
function area(r) {
  return Math.round(Math.PI * r * r);
}
console.log(area(2));

// 44. Write a function taht accepts an array and returns the sum of its element.
function sumofarr(arr) {
  var sum = 0;
  arr.forEach(function (v) {
    sum = sum + v;
  });
  return sum;
}
console.log(sumofarr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 45. Create a function that checks if a string starts with a specific character.
function cheker(str, char) {
  return str.toLowerCase().startsWith(char.toLowerCase());
}
console.log(cheker("Sona", "s"));

// 46. Write a function to find the maximum of two numbers.
function max(a, b) {
  if (a > b) return a;
  else if (a < b) return b;
  else return "equals";
}
console.log(max(1, 1));

// 47. Create a function that take a number and retuns its factorial
function getFact(num) {
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(getFact(5));

// 48. Write a function taht accepts a string and returns its reverse.
function revofstr(str) {
  return str.split("").reverse().join("");
}
console.log(revofstr("sonali"));

// 49. Create a function to find the largest number in an array.
function abcd(arr) {
  var max = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }
  return arr[max];
}
console.log(abcd([1, 2, 3, 34, 55, 5, 7, 45, 90]));

// 50. Write a function that convert string to kebab-case.
function kebab(str) {
  // return str.split(" ").join('-');
  return str.replaceAll(" ", "-");
}
console.log(kebab("hey kaise ho"));

// 51. create a function thats log "hello world!" every time it is calls
function abcd() {
  console.log("Hello World!");
}
abcd();
abcd();
abcd();

// 52. Write a function that takes two numbers and returns their greatest common divisor(GCD).
function gcd(a, b) {
  while (b) {
    var temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(gcd(12, 15));

// 53. Create a function to check if a string is a palindrome.
function isPalindrome(str) {
  var rev = str.split("").reverse().join("");
  return str === rev;
}
console.log(isPalindrome("madam"));

// 54. Write a function that generates a random number between two given numbers.
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInRange(5, 15));



//Q. Count how many numbers between 1 and 15 are greater then 8 Loop and count conditionally.
let count = 0;
for (let i = 1; i < 15; i++) {
  if (i > 8) {
    count++
  }
}
console.log(count);


//Q. Ask user for a number and say if it's positive or negative. use propmt()and a console
// var num = prompt("enter number");
// jab bhi promt se kuchh bhi magoge to sacho kya wo number hai aur agar hai to convert karna padega
// parseInt 
// Number
// + prompt ke aage + lagana
num = parseInt(num);
if (num >= 0) {
  console.log("positive");
}
console.log("negative");

// Q. Ask  user for password and print access status Hardcoded correct password. Compare with user input.
let password = "Sonali";

let pass = prompt("enter password");

if (pass === null) {
  console.log("You cancelled it");
} else {
  if (pass.trim() === password) {
    console.log("matched");
  } else {
    console.log("not matched");
  }
}

// Level-2
// Q. Allow only 3 attempts to enter correct password. if user gets it right early,stop. if not "Acoount Locked".
// While-tab tak chalo jab tak condition true hai
let attempts = 0;
let flag = false;
let correctPassword = "sonali123";

let password1 = prompt("Enter password");
attempts++;

if (password1 === correctPassword) flag = true;

while (password1 != correctPassword) {
  if (attempts === 3) {
    console.error("Acoount Locked");
    break;
  }
  password1 = prompt("enter password");
  if (password1 === correctPassword) flag = true;
  attempts++;
}
if (flag === true) console.log("account opened");

// OR
let attempt = 0;
let sahipassword = "sonali";

let userpasword = prompt("enter password");
attempt++;

while (attempt < 3 && sahipassword !== userpasword) {
  userpasword = prompt("enter password");
  attempt++;
}

if (attempt === 3 && sahipassword !== userpasword) {
  console.error("Account Locked");
} else {
  console.log("Done");
}


//Q. Ask user for words until they type "stop". Count how many times they typed "yes". Loop until "stop" is typed.Count "yes"
let word = prompt("Enter words");
let counter = 0;

while (word !== "stop") {
  if (word === "yes") {
    counter++;
  }
  word = prompt("enter word");
}
console.log(`total times yes count : ${counter}`)

//Q. Print numbers divisible by 7 form 1 to 50 use modulo % and loop
for (let i = 1; i < 51; i++) {
  if (i % 7 === 0) {
    console.log(`numbers: ${i}`)
  }
}

//Q. Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum.
let sum1 = 0;
for (let i = 1; i < 31; i++) {
  if (i % 2 !== 0) {
    sum1 = sum1 + i;
  }
}
console.log(`sum of odd numbers: ${sum1}`);

//Q. Keep asking until user enters an even number use while loop. stop only if input is even.
var num = +prompt("number bolo");
while (num % 2 !== 0) {
  num = prompt("number bolo");
  num = Number(num);
}

//Q. Print numbers between two user inputs Input start and end using prompt() -> print all between.
let start = +prompt("Enter first number");
let end = +prompt("Enter second number");

if (start > end) {
  console.error("start can't be bigger than end")
}

for (let i = start; i <= end; i++) {
  console.log(`numbers are:${i}`);
}

//Q. Print only first 3 odd numbers form 1 to 20 use loop. stop with break after 3 odd prints.
let counter1 = 0;
for (let i = 1; i < 21; i++) {
  if (counter1 === 3) break;
  if (i % 2 !== 0) {
    console.log(`3 odd numbers: ${i}`);
    counter1++;
  }
}

//Q. Ask user 5 numbers. Count how many are position use loop + condition + counter.
let counter2 = 0;
for (let i = 1; i <= 5; i++) {
  let number = +prompt("enter number");
  if (number >= 0) {
    counter2++;
  }
}
console.log(`count positieve numbers: ${counter2}`);


// Q. ATM Simulator - Allow 3 withdrawals start with 1000 balance. Ask withdrawal amount 3 times. If enough balance -> deduct Else -> Print "Insufficient balance".
// if else
let balance = 1000;
let amt = +prompt("Enter withdrawal amount");
if (amt <= balance) {
  balance -= amt;
}
else {
  console.log("Insufficient Balance");
}

//  while loop

let balance1 = 1000;
let attempts1 = 0;
let flag1 = false;

while (balance1 > 0 && attempts1 !== 3) {
  let withdraw = +prompt("kitna paisa withdraw karna hai");
  attempts1++;
  if (withdraw <= balance1) balance1 -= withdraw;
  else {
    flag1 = true;
    break;
  }
}

if (flag1 === true) {
  console.log("Insufficient balance");
}
console.log(`Balance : ${balance1}`);


// Leap year

let year = +prompt("Enter year to check leap year");
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

// check the number is divisible by 5 and 11
let number = +prompt("enter number to check dividibility bby 5 and 11");
if (number % 5 === 0 && number % 11 === 0) {
  console.log(`${number} is divisible by 5 and 11`);
} else {
  console.log(`${number} is not divisible by 5 and 11`);
}

// check character is vowel or consonant
let char = prompt("enter the cahracter");
if (char.length === 1 && char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
  char = char.toLowerCase();

  if ("aeiou".includes(char)) {
    console.log(`${char} is a vowel`);
  } else {
    console.log(`${char} is a consonant`);
  }
} else {
  console.log("please enter a valid character");
}


// convert the mark to grade (A/B/C/D/F)
let marks = +prompt("enter the marks");
if(marks >= 90 && marks <= 100){
  console.log("Grade A");
}
else if(marks >= 75 && marks < 90){
  console.log("Grade B")
}
else if(marks >= 60 && marks < 75){
  console.log("Grade C")
}
else if(marks >= 40 && marks < 60){
  console.log("Grade D")
}
else if(marks >=0 && marks < 40){
  console.log("Grade F")
}
else{
  console.log("Invalid marks");
}

// check temperature: cold/moderate/hot
let temp = Number(prompt("enter the temprature"));
switch(true){
  case temp < 15:
    console.log("cold");
    break;
  case temp >= 15 && temp <= 30:
    console.log("Moderate");
    break;
  case temp > 30:
    console.log("Hot");
    break;
  default:
    console.log("Invalid temperature")      
}

// Simple calculator using if-else
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let operator = prompt("Enter opertaor (+, -, *, /)");

if(operator === "+"){
  console.log(`${num1 + num2}`);
}
else if(operator === "-"){
  console.log(`${num1 - num2}`);
}
else if(operator === "*"){
  console.log(`${num1 * num2}`);
}
else if(operator === "/"){
  if(num2 === 0){
    console.log("cannot divide by zero");
  }else{
    console.log(`${num1 / num2}`);
  }
}
else{
  console.log("Invalid operator");
}

// find greatest of 3 numbers