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