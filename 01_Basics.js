// Step 1: JavaScript Basics

// 1. Comments (used to explain code)
// This is a single-line comment
/*
 This is
 a multi-line comment
*/

// 2. Data Types
let name = "Yashraj";     // String
let age = 20;             // Number
let isStudent = true;     // Boolean
let height = null;        // Null
let city;                 // Undefined

// 3. Type Conversion & Coercion
let num = "10";
console.log(Number(num) + 5);   // Explicit conversion → 15
console.log(num + 5);           // Coercion → "105"

// 4. Operators
let x = 10;
let y = 3;
console.log("x + y = " + (x + y));   // Addition
console.log("x % y = " + (x % y));   // Modulus

// 5. Debugging with console.log()
console.log("Debug: The value of x is", x);