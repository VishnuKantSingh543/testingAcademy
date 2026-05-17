// FUNCTION is a way by which you can reuse anything 
// reusable code that can be called multiple times 


// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");


function greet(){
    console.log("hi");
}
greet();
greet();
greet();
greet();

// function has 2 parts 
// 1. definition - we have to define a function  
// 2. calling - we have to call a function


// function definition 
function ad(){
    console.log(2+3);
}
// function call
ad();
ad();
ad();

// function with parameters
function add(a,b){
    console.log(a+b);
}
add(2,3);
add(5,7);
add(10,20);

// function with return value
function sum(a,b){
    return a+b;
}
var result = sum(2,3);
console.log("result1:" + result);

var result = sum(5,7);
console.log("result2:" + result);



// ** We cannot use the same function name for different functions, it will overwrite the previous function

