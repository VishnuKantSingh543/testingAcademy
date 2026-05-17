var a = 10;
console.log(a);

var a =111;
console.log(a);

const b = 12;
console.log(b);

const b = 13;
console.log(b);

// var,let value can change 
var ab=12;
var ab=14; //redeclaration 
ab=654; //reassignment
console.log(ab);


var tc=["av","dfg"  ];

// var is function-scoped(inside a function)
// can be redeclared and reassigned
// **gets hoisted (can be used before declaration, but will be undefined)
// original keyword of javascript 
// will not going to use in playwright
// it is an old way of declaring variables, it has some issues like hoisting and scope issues
// by it for loop is confused 


// let is block-scoped(inside {})
let ab=33;

// const value cannot change
// const is block-scoped(inside{})
const df=43;
