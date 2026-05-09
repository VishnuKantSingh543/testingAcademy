// LITERAL-fixed value in code


// Numeric Literals
var a = 42;       // integer literal
var b = 3.14;     // floating-point literal
var c = 0b1010;   // binary literal
var d = 0o77;     // octal literal 
var e = 0xFF;     // hexadecimal literal

// String Literals
var a = 'single quotes';   // single-quoted string
var b = "double quotes";   // double-quoted string
var c = `backticks`;   // template literal
var d = `line one
line two
line three`;   // multi-line template literal

// Boolean Literals
var a = true;   // boolean literal
var b = false;   // boolean literal

// Special Literals
var a = null;   // null literal
var b = undefined;   // undefined literal

// Array Literal
var fruits = ["apple", "banana", "cherry"];  
var mixed = [1, "hello", true, null];   // array with mixed types

// Object Literal
var person = {                              
    firstName: "Vishnu",
    age: 25,
    isStudent: true
};

// Template Literal with Expression
var a = "Vishnu";
var b = 25;
console.log(`My name is ${a} and age is ${b}`);  // expression in template
