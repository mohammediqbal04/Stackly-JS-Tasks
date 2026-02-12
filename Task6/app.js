//JavaScript Array & String Methods – Complete
// Professional Task Sheet

//SECTION 1 – Array Higher Order Methods Tasks
let subjects = ["Maths", "English", "Science", "History"];
let result = subjects.forEach((sub,index) => {
  console.log(`Subject ${index + 1}: ${sub}`);
})
console.log(result); 
//UNDEFINED ----- because foreach will not return values it only executes the function for each element in the array.

//Task 2 – map() Practice
let prices = [100, 200, 300, 400];
let priceWithGst = prices.map((price)=> {
  return price + price * 0.10;
})
console.log(priceWithGst);

//Task 3 – filter() Practice
let students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
  { name: "C", marks: 35 },
  { name: "D", marks: 85 }
];

let passStudents = students.filter((stud) => {
  return stud.marks >= 50;
})
console.log(passStudents);

//Task 4 - find() Practice
let studentsB = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
  { name: "C", marks: 35 },
  { name: "D", marks: 85 }
];
let studentAbove50 = studentsB.find((stud) => {
  return stud.marks > 50;
})
console.log(studentAbove50);
//filter will return all the students with marks above 50. find will return only single element with marks above 50.

//Task 5 – reduce() Practice
let cart = [
  { item: "Shirt", price: 1000 },
  { item: "Shoes", price: 2000 },
  { item: "Watch", price: 3000 }
]
let totalPrice = cart.reduce((total, product) => {
  let gst = product.price * 1.05;
  return total + gst;
}, 0);
console.log(totalPrice);

//Task 6 – some() Practice
let numbers = [1, 3, 5, 7, 8];

let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);
//output : true, because 8 is an even number in the array.

//Task 7 – every() Practice
let ages = [22, 25, 19, 30];

let agesAbove18 = ages.every(age => age > 18);
console.log(agesAbove18);
//output : true, because all the ages in the array are above 18.

//Task 8 – sort() Practice
//Ascending
let salaries = [50000, 10000, 70000, 30000];

let asc = salaries.sort((a, b) => a - b);
console.log(asc);
//Descending
let desc = salaries.sort((a, b) => b - a);
console.log(desc);
//normal sort will not work because it sorts the numbers as strings we need to provide a compare function to sort them correctly.

//Task 9 – Array Conversion Methods
let arr = [10, 20, 30, 40];

console.log(arr.toString()); 
console.log(arr.join("-"));

//SECTION 2 – String Methods Tasks

//Task 10 – charAt() & charCodeAt()
let word = "Developer";

console.log(word.charAt(4));       
console.log(word.charCodeAt(4));

//Task 11 – slice()
let company = "StacklyCompany";
console.log(company.slice(7));

//Task 12 – Case Conversion
let userInput = "javaScript";

console.log(userInput.toUpperCase()); 
console.log(userInput.toLowerCase()); 

//Task 13 – trim()
let email = " naveen@gmail.com ";
console.log(email.trim());

//Task 14 – includes()
let message = "Welcome to JavaScript Training";
console.log(message.includes("JavaScript"));

//Task 15 – split()
let movie = "spider-man-no-way-home";
console.log(movie.split("-"));

//Task 16 – indexOf() & lastIndexOf()
let text = "programming";
console.log(text.indexOf("m"));      
console.log(text.lastIndexOf("m"));

//Task 17 – replace()
let tech = "I love python";
console.log(tech.replace("python", "javascript"));

//Task 18 – startsWith() & endsWith()
let filename = "report.pdf";

console.log(filename.startsWith("report")); // true
console.log(filename.endsWith(".pdf"));     // true

//Task 19 – repeat()
let star = "*";
console.log(star.repeat(10));

//FINAL TEAM CHALLENGE – Employee Report System
let employees = [
  { name: "Naveen", salary: 50000 },
  { name: "Arun", salary: 30000 },
  { name: "Kiran", salary: 70000 }
];

//To uppercase
let upperNames = employees.map(emp => ({
  ...emp,
  name: emp.name.toUpperCase()
}));

//Filter salary
let highSalary = employees.filter(emp => emp.salary > 40000);

//Find first salary
let firstHigh = employees.find(emp => emp.salary > 60000);

//Total salary
let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);

//Sort salaries
let sortedDesc = [...employees].sort((a, b) => b.salary - a.salary);

console.log(upperNames);
console.log(highSalary);
console.log(firstHigh);
console.log(totalSalary);
console.log(sortedDesc);
