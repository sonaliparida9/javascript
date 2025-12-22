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
}, 1000);


// level2
// Q1 Write a higher-order function runTwice(fn) that takes another funtion and executes it two times.
function runTwice(fn){
    fn();
    fn();
}
runTwice(function(){
    console.log("Hello")
});


// Q2.  create one pure function that always returns the same output for given input, and one impure function using a global variable.
// Pure function
function pure(a,b){
    console.log(a+b);
}
pure(2,3);
pure(2,3);


// Impure function
let global = 0;
function impure(a){
    global ++;
    console.log(a+global);
}
impure(2);
impure(2);


// Q3. Write a function that uses object destructuring inside parameters to extract and print name and age.
function abcd({name, age}){
    console.log(name, age);
}
abcd({name:"sonali", age:22});

// Q4. Demonstrate the difference between normal function and arrow function when used as object methods (this issue.)

// this keyword
// this ex aisa keyword hai jo ki dynamic hai iski value badal jati hai baar baar

console.log(this); // this refers to global object (window in browser, global in nodejs)

const obj = {
    name: "sonali",
    normalFunction: function(){     
        console.log("Normal Function this:", this); // this refers to the object itself
    },
    arrowFunction: () => {
        console.log("Arrow Function this:", this); // this refers to the global object (or) this ki value parent se letahai
    }
};
obj.normalFunction();
obj.arrowFunction();


// Q5. Given an array of numbers, use map() to create a new array where number is squared
let arr1 =[1, 2, 3, 4, 5];
let newarr = arr.map(function (val) {
    return val * val;
});
console.log(newarr);

// Q6. Use filter() to get only even number from an array.
let arr2 = [1,2, 3, 4, 5, 6,7,8, 9, 10];
let evennum = arr2.filter(function(val){
    return val % 2 === 0;
});
console.log(evennum);

// Q7. Use reduce() to find the total salary from an array of numbers [1000, 2000, 3000];
let salary = [1000, 2000, 3000];
let total = salary.reduce(function(acc, val){
    return acc + val;
},0)
console.log(total);

// Q8. Create an array of names and use some() and every() to test a condition (e.g., all names longer than 3 chars).
let names = ["avi", "harsh", "sonali", "riya", "avinya"];
let ansnames = names.some(function(val){ // koi bhi ek name ki length 3 se jyada hai
    return val.length > 3;
});
console.log(ansnames);
let allnames = names.every(function(val){ // sabhi names ki length 3 se jyada hai ki nahi
    return val.length > 3;
});
console.log(allnames);



// Q9 Create an object user and text the behavior of Object. freeze() and Object.seal() by adding/changing keys.
let user = { 
    name: "Sonali",
    age: 22,
    email: "S@s.s"
};

Object.seal(user);
user.age = 23; // will change
user.country = "India"; //new value will not add
console.log(user);     

Object.freeze(user);
user.name = "Riya"; // will not change
user.city = "bbsr"; // will not add
console.log(user);    

// Q10. Create a nested object 9user -> address -> city) add access the city name inside it.

let obj1 = {
    user: {
        name: "Sonali",
        address:{
            city:"Bhubaneswar",
        },
    },
};

let {city} = obj1.user.address;
console.log(city);