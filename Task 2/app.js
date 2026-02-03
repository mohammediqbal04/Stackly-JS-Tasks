// JavaScript Day 2 Assignment

// 1. Welcome Program

let userName = prompt("Enter your name:");
alert("Hi " + userName + ", Welcome to JavaScript Training.");
console.log("Hi " + userName + ", Welcome to JavaScript Training.");

// 2. Console Methods Practice
console.log(500);
console.warn(500);
console.error(500);

console.clear();

// 3. Data Type Identification

let str = "JavaScript";
let num = 100;
let bool = true;
let undef;
let nul = null;

console.log(str, typeof str);
console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(undef, typeof undef);
console.log(nul, typeof nul);  // type of null is 'object' this is called a historical bug in JavaScript

// 4. Arithmetic Operations

let a = 20;
let b = 5;

console.log("Addition:", a + b); //Output: Addition: 25
console.log("Subtraction:", a - b); //Output: Subtraction: 15
console.log("Multiplication:", a * b); //Output: Multiplication: 100
console.log("Division:", a / b); //Output: Division: 4
console.log("Modulus:", a % b); //Output: Modulus: 0
console.log("Exponent:", a ** b); //Output: Exponent: 3200000

// 5. Increment & Decrement

let x = 10;
let y = 10;

console.log("Pre-increment:", ++x);  // 11
console.log("Post-increment:", x++); // 11
console.log("After post-increment:", x); // 12

console.log("Pre-decrement:", --y);  // 9
console.log("Post-decrement:", y--); // 9
console.log("After post-decrement:", y); // 8


// 6. Assignment Operators

let numValue = 10;

numValue += 5;
console.log("After += :", numValue); // 15

numValue -= 3;
console.log("After -= :", numValue); // 12

numValue *= 2;
console.log("After *= :", numValue); // 24

numValue /= 4;
console.log("After /= :", numValue); // 6

numValue %= 3;
console.log("After %= :", numValue); // 0


// 7. Array Access

let courses = ["HTML", "CSS", "JavaScript", "React"];

console.log("First element:", courses[0]); // HTML
console.log("Second element:", courses[1]); // CSS
console.log("Last element:", courses[courses.length - 1]); // React
console.log("Total elements:", courses.length); // 4


// 8. Modify Array

courses.push("Node.js","Express.js", "MongoDB"); // adds at end
courses.pop();           // removes last

console.log("Updated Array:", courses); // ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js"]

// 9. Student Object

let student = {
  name: "Iqbal",
  age: 24,
  course: "MERN Stack",
  city: "Chennai"
};

console.log(student.name); // Iqbal
console.log(student.age); // 24
console.log(student.course); // MERN Stack
console.log(student.city); // Chennai


// 10. Nested Object Practice

let company = {
  companyName: "Stackly",
  trainer: {
    name: "Naveen Kumar",
    subject: "JavaScript"
  }
};

console.log("Company Name:", company.companyName); // Stackly
console.log("Trainer Name:", company.trainer.name); // Naveen Kumar
console.log("Trainer Subject:", company.trainer.subject); // JavaScript