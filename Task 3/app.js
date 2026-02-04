//Part 1 – Logical & Ternary Operator

// Q1: Check whether a number is between 10 and 50 using logical AND.
// Input: let num = 25
// Output: "Valid Number" or "Invalid Number"

let num = 25;
if (num >= 10 && num <= 50) {
    console.log("Valid Number");
} else {
    console.log("Invalid Number");
}
//output: "Valid Number"
//Explanation: The number 25 is between 10 and 50 so the output is "Valid Number". && checks both conditions to be true.


// Q2: Check if a user is eligible to log in.
// Condition:
// username must be "admin"
// password must be "1234"
// Use logical AND.

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}
//output: "Login Successful"
//Explanation: Here both conditions are true so output is "Login Successful".

// Q3: Using ternary operator:
// Check if a number is even or odd.

let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result);
//output: "Odd"
//Explanation: 7 is not divisible by 2 so the output is "Odd". The ternary operator checks the condition using ? and returns the appropriate stament after : . condition ? if_true : if_false.

// Q4: What is the output?
console.log((10 === "10") || (5 > 2) && !(3 < 1));

//output: true
//Explanation:
// Step 1: (10 === "10") is false because strict equality checks both value and type.
// Step 2: (5 > 2) is true.
// Step 3: 3 is not less than 1, so !(3 < 1) is true.
// Step 4: so we have false || true && true.
// Step 5: true && true gives us true.
// Step 6: so finally we have false || true which results in true.


// Part 2 – Type Conversion

// Q5: Find the output and explain:
console.log("5" + 2); // Output: "52"
console.log("5" - 2); // Output: 3
console.log("5" * 2); // Output: 10
console.log("5" / 2); // Output: 2.5

// Explanation:
// + → string concatenation if one operand is string
// - → type conversion to number if operand is string
// * → type conversion to number if operand is string
// / → type conversion to number if operand is string

// Q6: Convert the following using explicit conversion:
let value = "100";
// - Convert to Number
let numValue = Number(value);
console.log(numValue); // Output: 100
// - Convert to Boolean
let boolValue = Boolean(numValue);
console.log(boolValue); // Output: true

// Q7: What will be the output?
console.log(Boolean("")); // Output: false An empty string "" is falsy.
console.log(Boolean(" ")); // Output: true A string with a space " " is truthy.
console.log(Boolean(0)); // Output: false The number 0 is falsy.
console.log(Boolean([])); // Output: true An empty array [] is truthy.

// Part 3 – Conditional Statements

// Q8: Write a program:
// If marks >= 90 → Grade A
// If marks >= 75 → Grade B
// If marks >= 50 → Grade C
// Else → Fail
// Use if else if.

let marks = 82;
if (marks >= 90) {
    console.log("Grade A"); 
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
} 
//output: "Grade B"

// Q9: Traffic Signal Program using switch case:
// "red" → Stop
// "yellow" → Ready
// "green" → Go
// Default → Invalid Signal

let signal = "";
switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}
//output: "Invalid Signal" i have given empty string as input so it goes to default case. if i give "red" as input output will be "Stop".

// Q10 (Nested If): Check eligibility:
// Age >= 18
// Height >= 160
// Weight >= 50
// If all true → "Selected"
// Else → show which condition failed.

let age = 24;
let height = 181;
let weight = 72; 
if (age >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("Selected");
        } else {
            console.log("Weight condition failed");
        }
    } else {
        console.log("Height condition failed");
    }
} else {
    console.log("Age condition failed");
} 
//output: "Selected"

// Part 4 – Loops

// Q11: Print numbers from 1 to 20 using for loop.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Q12: Print only odd numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Q13: Using while loop:
// Print numbers from 10 to 1.
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// Q14: Using do-while loop:
// Print numbers from 1 to 5.
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5); 

// Q15: Using for-of loop:
// Print each character from:
// let word = "STACKLY"
let word = "STACKLY";
for (let char of word) {
    console.log(char);
}

// Q16: Using for-in loop:
// Print both key and value from:
// let student = {
// name: "Arun",
// course: "MERN",
// duration: "6 months"
// }
let student = {
    name: "Arun",
    course: "MERN",
    duration: "6 months"
};
for (let key in student) {
    console.log(key + ": " + student[key]);
}

// Real-Time Questions

// RT-1: Login System
// If username = "admin" AND password = "1234" → "Login Success"
// Else → "Invalid Credentials"
// Use logical operator + ternary.

let user = "admin";
let pass = "1234";
let loginResult = (user === "admin" && pass === "1234") ? "Login Success" : "Invalid Credentials";
console.log(loginResult);

// RT-2: Salary Bonus System
// If employee salary > 50000 AND experience > 3 years
// → Eligible for bonus
// Else → Not eligible

let salary = 40000;
let experience = 4;
if (salary > 50000 && experience > 3) {
    console.log("Eligible for bonus");
} else {
    console.log("Not eligible");
}
// output: "Not eligible"

// RT-3: Shopping Discount
// If cart amount:
// >= 5000 → 20% discount
// >= 2000 → 10% discount

// < 2000 → No discount
// Use if-else if.

let cartAmount = 3500;
if (cartAmount >= 5000) {
    console.log("20% discount");
} else if (cartAmount >= 2000) {
    console.log("10% discount");
} else {
    console.log("No discount");
}
// output: "10% discount"

// RT-4: Even/Odd Counter
// Count how many even numbers between 1 to 50.
let evenCount = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        evenCount++;
    }
}
console.log("Even numbers count:", evenCount);
// output: Even numbers count: 25.

// RT-5: Dynamic Greeting System
// If hour between:
// 1–6 → Good Morning
// 7–12 → Morning
// 13–16 → Good Afternoon
// 17–19 → Good Evening
// Else → Good Night
let hour = 14;
if (hour >= 1 && hour <= 6) {
    console.log("Good Morning");  
} else if (hour >= 7 && hour <= 12) {
    console.log("Morning");
} else if (hour >= 13 && hour <= 16) {
    console.log("Good Afternoon");
} else if (hour >= 17 && hour <= 19) {
    console.log("Good Evening");
} else {
    console.log("Good Night");
}
// output: "Good Afternoon"