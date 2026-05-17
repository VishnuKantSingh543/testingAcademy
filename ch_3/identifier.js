// IDENTIFIER-container that have value in it

// identifier rules 
// can start from A a - Z z, _(underscore), $
// can also include digits but cannot start with digits
// cannot use reserved keywords as identifiers
// case sensitive
// cannot contain spaces
// best practice is camelCase

// snake case is mainly used in database
// pascal case is mainly used for classes

var name = "123";
var _name = "23";
var $name = "76";
var name1 = "jhgfd";
var nameu1232 = "hgf";

//best practices for naming variables
var firstName = "Vishnu";
var name = "Vishnu";

var first_name = "Vishnu"; 
//snake case

var FIRST_NAME;
//SCREMING_SNAKE_CASE - for constants (values that will not change)

var FirstName = "Vishnu"; 
//pascal case - standard for classes and constructor functions

var firstName = "Vishnu"; 
//camel case - standard for variables and functions

var strName = "abcd"; 
//hungarian notation - old way, not recommeded

var arrItems = [1,2,3]; 
//array in hungarian notation

var first-name;
//Kebab case- not allowed in js (can be used in html and css)

var First-Name;
//Train case- not allowed in js (can be used for HTTP headers)
