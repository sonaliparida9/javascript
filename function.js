// FUNCTIONs
// Q1. Write a function sayHello() that prints "Hello JavaScript".
function sayHello(){
  console.log("Hello JavaScript");
}
sayHello();

// Q2. Create a function add(a,b) that returns their sum and log the result.
function add(a,b){
  return a+b;
}
let ans = add(1, 2);
console.log(ans);

// Q3. Write a function with a default parameter name = "Guest that prints "Hi <name>.
function greet(name="Guest"){
    console.log(`Hi ${name}`);
}
greet();

// Q4. Use rest parameters to make a function that adds unlimited numbers.
function addUnlimited(...number){
     let sum = 0;
    // number.forEach(function(val){
    //     sum = sum + val;
    // });
    // console.log(`The sum is: ${sum}`);


    // forloop
    // for(let i = 0; i<number.length; i++){
    //     sum = sum +number[i];
    // }
    // console.log(`The sum is: ${sum}`);


    // use Reduce
    number.reduce(function ( acc, val){
        return sum = acc + val;
    },0);
    console.log(`The sum is: ${sum}`);
}
addUnlimited(1,2,3);

// Q5. Create a IIFE that prints "I run instantly!".
(function(){
    console.log("I run instantly!")
})();

// Q6. Make a nested function where the inner one prints a variable from the outer one.
function outer(){
    let a = 12;
    function inner(){
        console.log(a);
    }
    inner();
}
outer();

// Q7. Create an array of 5 fruits. Add one at the end and remove on from the beginning.
let fruits =["Apple", "Banana", "Mango", "Orange", "Guava"];
fruits.push("Grapes");
fruits.unshift("Pear");
console.log(fruits);

// Q8. Use a for loop to print all elements of an array.
let arr = [1,2,3,4,5,6];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// Q9. Create an object person with keys name, age, and city, and print each key's value.
let person = {
    name:"sonali",
    age: 22,
    city: "bbrs",
};

for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

// Q10. Use setTimeout() to log "Time's up!" after 2 seconds.
setTimeout(() => {
    console.log("Time's up!");
}, 2000);


