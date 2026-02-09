// ES6 + Array Advanced Practice Tasks

//TASK 1 – Employee Merge System (Spread Operator)
let empFresher = { 
  name: "Iqbal", 
  role: "Full Stack Developer", 
  salary:20000 
};

let empPromotion = {
  role: "Senior MERN Stack Developer",
  bonus: 10000
};

let EmpDetails = { ...empFresher, ...empPromotion };
EmpDetails.salary = 40000;
EmpDetails.experience = "2 years";
console.log(EmpDetails);

//TASK 2 – Shopping Cart (Spread + Array)
let cart1 = ["shoes", "shirt"];
let cart2 = ["watch", "cap"];

let mergedCart = [...cart1, ...cart2];
mergedCart.push("bag");
mergedCart.unshift("socks");
console.log(mergedCart);

//TASK 3 – Rest Operator Salary Calculator
const totalSalary = (baseSalary, ...bonuses) => {
  return baseSalary + bonuses.reduce((total, b) => total + b, 0);
}
console.log(totalSalary(30000, 2000, 3000, 5000));


//TASK 4 – Advanced Destructuring
let student = {
  name: "rahul",
  marks: { maths:90, science:85, english:88 }
}
const { name, marks: { maths, science, english } } = student;
console.log(`${name} scored ${maths} in maths and ${science} in science.`);

//TASK 5 – Array Manipulation
let numbers = [10, 20, 30, 40, 50];
numbers.splice(2,1,25);
numbers.reverse();
numbers.includes(50);
console.log(numbers);

//TASK 6 – Flatten Data
let apiData = [1,2,[3,4,[5,6,[7,8]]]];
let flattenedData = apiData.flat(3);
let find = flattenedData.indexOf(6);
console.log(flattenedData);
console.log("index of 6:", find);

//TASK 7 – Sorting Problem
let prices = [100, 5, 25, 300, 45];

let assending = prices.slice().sort((a, b) => a - b);
let descending = prices.slice().sort((a, b) => b - a);
console.log("Assending:", assending);
console.log("Descending:", descending);

//BONUS HARD TASK – Team Level

let users = [
  {name: "A", salary: 20000},
  {name: "B", salary: 40000},
  {name: "C", salary: 30000}
];
let updatedSalary = users.map(user => ({ ...user, salary: user.salary + 5000 }));
updatedSalary.sort((a,b) => b.salary - a.salary);
console.log(updatedSalary);