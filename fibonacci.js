// The fibonacci series is a sequence of numbers where each number is the sum of the previous two.
// series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// Rule: F(n) = F(n-1) + F(n-2)

// Print first n fibonacci numbers

let n = 10;
let a = 0, b = 1;
for(let i = 0; i<n; i++){
    console.log(a);
    let next = a+b;
    a = b;
    b = next;
}


// fibonacci using function
function fibonacci(n){
    let a = 0, b = 1;
    for(let i = 1; i <= n; i++){
        console.log(a);
        [a,b] = [b,a+b];
    }
}
console.log(fibonacci(10));

// fibonacci using recursion
function fib(n){
    if(n<=1) return n;
    return fib(n-1) + fib(n-2);
}
console.log(fib(6))