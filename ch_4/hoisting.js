// HOISTING & TDZ(Temporal Dead Zone)

// HOISTING
// It is javascript default behaviour
// we can call a function before its declaration because of hoisting
// it moves the declaration of variables and functions to the top of their scope before code execution
// it allows us to use variables and functions before they are declared in the code
// for var it will be undefined
// for let and const it will give ReferenceError


greet(); // calling before declaration

function greet() {            //declaration of function
  console.log("hi");      
}
//not possible and allowed in any other language except javascript

console.log(greeting);  //undefined
var greeting = "hello"; 
console.log(greeting);  //hello

// everything is pushed to the top
// then after it will it will put the value and execute the code line by line

// example of hoisting in real life - when we see black clouds, we take an umbrella even before it starts to rain




