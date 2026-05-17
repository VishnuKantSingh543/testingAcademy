// LET

let a = 18;

// it is blocked scoped, inside {}
// it is modern way of changing values
// can be reassagined, but cannot be redeclared in the same scope
// it is hoisted but cannot be used before declaration (temporal dead zone)
// accessing before declaration gives ReferenceError
// use let when want to change the value - like retry count, score, current page URL, etc


// changing value is allowed - reassigned
let retry = 0;
retry = retry + 1;
retry = retry + 1;
console.log("retry: " + retry);

//redeclaration is not allowed
// let retry = 4; //SyntaxError: Identifier 'retry' has already been declared



// let is block scoped
let x = 5;

function test() {
    // console.log(x); //ReferenceError: Cannot access 'x' before initialization
    let x = 199; //local scope- available inside the function only
    console.log('inside function: ' + x);
    if (true) {
        let ab=123;
        let x = 555; // this x is different from the x in the function scope, it is block scoped
        console.log('inside if-block: ' + x);
        console.log('ab inside if-block: ' + ab);
    }   
    console.log('after if-block, inside function: ' + x); // this will print 199, x in the if-block is different from the x in the function scope
    // console.log('ab inside function: ' + ab); // ReferenceError: ab is not defined, ab is block scoped to the if-block
}
test();

console.log('outside function: ' + x); // this will print 5, x in the function is different from the x in the global scope

// let is block scoped, it will not overwrite the previous value of x in the function
// it will create a new variable x in the block scope of the if-block


