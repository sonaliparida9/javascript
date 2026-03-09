// Exercise 1 — Very Easy (Warming up)

// **Task (Hindi):** Ek function banao `afterDelay`

// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

function afterDelay(time, callback){
    setTimeout(() => {
        callback();
    }, time);
}
afterDelay(2000, () => {
    console.log("Callback executed");
} );

// Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

function getUser(username, callback){
    setTimeout(() => {
        callback({id:1, username: "sonali"})
    }, 1000)
}

function getUserPosts(userId, callback){
setTimeout(() => {
        callback(["Post 1", "Post 2", "Post 3"]);
    }, 1000)
}

getUser("sonali", function(user){
    console.log("Username:", user.username);
    getUserPosts(user.id, function(posts){
        console.log("Posts:", posts);
    })
})


//  Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai


function loginUser(username, cd){
    console.log("logging in user...")
    setTimeout(() => {
        cd({id:1, username: "sonali"})
    }, 1000);
}
function fetchPerimission(id, cd){
    console.log("fetching permissions...")
    setTimeout(() => {
        cd(['read', 'write', 'delete'])
    }, 1000);
}
function LoadDashboard(permissions, cd){
    console.log("loading dashboard...")
    setTimeout(() => {
        cd(permissions);
    }, 1000)
}


loginUser("sonali", function(userdata){
    fetchPerimission(userdata.id, function(permissions){
        LoadDashboard(permissions,function(){
                console.log("Dashboard loaded");
        })
    })
})



// You are building a calculator function.
// Create a function calculate(a, b, operation) where operation is a callback that 
// performs addition, subtraction, multiplication, or division.

function calculate(a, b, operation){
    return operation(a, b);
}

function add(x, y){
    return x + y;
}
function multi(x, y){
    return x * y;
}
console.log(calculate(1, 5, add));
console.log(calculate(5, 2, multi));


// You receive an array of numbers.
// Write a function processArray(arr, callback) that:

// Doubles each number

// Then calls the callback with the updated array

function processArray(arr, callback){
    const doubled = arr.map(num => num * 2);
    callback(doubled);
}

processArray([1,2,3],function(data){
    console.log(data)
});


// Asynchronous Callback (setTimeout)
// You are simulating a food order system.
// Create:
// placeOrder(order, callback)
// It should log “Order placed”
// After 2 seconds, call the callback saying “Order ready”

function placeOrder(order, callback){
    console.log("order placed");
    setTimeout(()=>{
        callback("Order ready")
    },2000)
}
placeOrder("pizza", function(message){
    console.log(message);
})

//  Callback for User Authentication
// You are building a login system.
// Write a function:
// login(username, password, successCallback, failureCallback)
// If credentials match → call successCallback
// Else → call failureCallback

function login(username, password, successCallback, failureCallback){
    if(username === "sonali" && password === "1234"){
        successCallback("Login successful")
    }
    else{
        failureCallback("Invalid credential")
    }
}
login("sonali","1234", function(msg){console.log(msg)}, function(err){console.log(err)})


// Callback Inside Event Listener
// You have a button in HTML.
// When clicked:
// First print “Button clicked”
// Then execute a callback function

const button = document.querySelector("button");

function handleClick(){
    console.log("Button clicked")
}

button.addEventListener("click",function(){
    handleClick();
})


// Higher-Order Function Scenario
// Create a function greetUser(name, callback).
// It should greet the user
// Then execute a callback that prints a custom message

function greetUser(name, callback){
    console.log("Hello", name);
    callback();
}

greetUser("sonali", function(msg){
    console.log("good morning")
})


// Callback in API Simulation
// You are simulating fetching user data.
// Create:
// fetchUserData(callback)
// After 3 seconds, return user data
// Pass that data into the callback

function fetchUserData(callback){
    setTimeout(() => {
        const user = {id: 1, name: "sonali"};
        callback(user)
    }, 4000);
}

fetchUserData(function(data){
    console.log("user data:", data);
})


// Callback Hell Scenario
// You are performing 3 tasks in order:
// Task 1 after 1 sec
// Task 2 after 2 sec
// Task 3 after 3 sec
// Write this using nested callbacks.


setTimeout(()=>{
    console.log("first task compited");

    setTimeout(()=>{
        console.log("2nd task compited");

        setTimeout(()=>{
            console.log("3rd task compited");
        }, 3000)
    }, 2000);
}, 1000)

// Error Handling with Callback
// Create a function:
// divideNumbers(a, b, callback)
// If b is 0 → return error using callback
// Otherwise return result


function divideNumber(a, b, callback){
    if(b === 0){
        callback("error", null);
    }
    else{
        callback(null, a/b);
    }
}

divideNumber(10, 2, function(error, result){
    if(error){
        console.log("error")
    }else{
        console.log("Result:", result);
    }
})


// Callback with Array Methods

// You are given an array of users.
// Use filter() and pass a callback to:

// Return users above age 18


const users = [
    {name:"A", age:23},
    {name:"B", age:12},
    {name:"C", age:18}
];

const adults = users.filter(function(user){
    return user.age >= 18;
});

console.log(adults);