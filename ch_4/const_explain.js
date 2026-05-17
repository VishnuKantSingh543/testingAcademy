// CONST

// it is blocked scoped, inside {}
// value cannot change, it is constant
// must be initialized at the time of declaration
// cannot be redeclared
// it is hoisted but cannot be used before declaration (temporal dead zone)
// accessing before declaration gives ReferenceError
// use const when you want to declare a variable that should not change - like API endpoint, configuration values, etc

const ab = 12;
// ab=14; // TypeError: Assignment to constant variable.
// const ab=10; // SyntaxError: Identifier 'ab' has already been declared

const as;
as = 23; // SyntaxError: Missing initializer in const declaration

//block scope
const a = 18;
if (true) {
  const a = 123;
  console.log("inside if-block: " + a); // 123
}
console.log("outside if-block: " + a); // 18
// a in the if-block is different from the a in the global scope
