
// SECTION 1: Objects and OOPS Thinking (Foundation)

// 1. Create a user object that stores name and email and has a login method which prints "User logged in".
// Imagine you now have 5 users. 
let user1 = {
    name: "sonu",
    email: "sonu@example.com",
    login: function(){
        console.log("User logged in");
    },
 };
 let user2 = {
    name: "sonu",
    email: "sonu@example.com",
    login: function(){
        console.log("User logged in");
    },
 };
 let user3 = {
    name: "sonu",
    email: "sonu@example.com",
    login: function(){
        console.log("User logged in");
    },
 };
 let user4 = {
    name: "sonu",
    email: "sonu@example.com",
    login: function(){
        console.log("User logged in");
    },
 };
 let user5 = {
    name: "sonu",
    email: "sonu@example.com",
    login: function(){
        console.log("User logged in");
    },
 };

//  First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log("User logged in");
    }
}
let user6 = new User("sonu", "sonu@example.com");
let user7 = new User("sonu", "sonu@example.com");
let user8 = new User("sonu", "sonu@example.com");


// 2. Create a product object that stores name and price and has a method which returns the final price after discount.

let product = {
    name : "Laptop",
    price : 3500,
    discountedPrice: function(){
        return this.price - 200;
    }
};
console.log(product.discountedPrice());

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.


// SECTION 2: Classes and Objects

// // 3. Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed

class car{
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
    }
    drive(){
        return this.brand + "-" + this.speed
    }
}
//  4.  Create two different car objects from the same class and verify that their data is different.
let car1 = new car("Hyundai", 180);
let car2 = new car("Maruti", 100);


// 5. Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?
// Without classes, we implement inheritance using constructor functions and prototypes.
// However in large projects this becomes hard to read, error-prone, and difficult to maintain.
// Classes provide a structured, cleaner abstraction over prototype-based inheritance, improving scalability and team collaboration.



// SECTION 3: Constructor and this keyword

// 6. Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.
class Student{
    constructor(name, rollno){
        name = name;
        rollno = rollno;
    }
    introduce(){
        console.log(this.name + " " + this.rollno);
    }
};
let st1 = new Student("sonali", 21);




// 7. Inside the constructor, set values using this.
    // Then try removing this and notice what error occurs and why.
// ANS: undefined undefined


// 8. Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

let obj = {
    sayName: function () {
        console.log(this);
    },
    sayArrowName: () => {
        console.log(this);
    }
};
obj.sayName();
obj.sayArrowName();


// SECTION 4: Constructor Functions and Prototypes

// 10.	Create a User constructor function (do not use class syntax).
function Users(){
    this.name = 'sona';
    // 11.	Add a login method in two ways:
    // First, inside the constructor

    // this.login = function(){
    //     console.log("Loggedin")
    // }

    // 12. Create two User objects and compare their login methods using equality.
   // false because each time we create a new User object, a new login function is created in memory. So, even though the code inside the login method is the same for both an1 and an2, they are different function instances in memory, leading to false when compared using equality.

}

// Then, move the method to the prototype
 Users.prototype.loggedin = function(){
        console.log("loggedin");  //true because both an1 and an2 will refer to the same login method in the prototype, so they will be equal.
};
let an1 = new Users();
let an2 = new Users();




// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.
// 	14.	Create an object that contains a name property.



// 	15.	Borrow a method from one object and run it for another object using call.

function abcd(a, b, c, d){
    console.log(this.name);
}

let obj1 = {
    name: "sonu"
};
// Use call to run the function using the object
abcd.call(obj1);

// Use apply to run the function using the object
abcd.apply(obj1, [1, 2, 3, 4]);

// Use bind to create a new function and then call it
let fnc = abcd.bind(obj1);
fnc(1, 2, 3, 4);