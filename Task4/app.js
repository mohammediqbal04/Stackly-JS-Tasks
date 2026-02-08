//INTERMEDIATE LEVEL - FUNCTIONS FULL ASSIGNMENT

// SECTION 1 – Real-Time Function Logic
// 1. Payroll System:
// Create calculateSalary(basicSalary, bonusPercentage)
// - Calculate bonus
// - Deduct 5% tax
// - Return final salary
// - Print full salary breakdown

const calculateSalary = (basicSalary, bonusPercentage) => {
  const employeeName = "Mohammed Iqbal";
  const employeeID = "EMP12345";
  const designation = "Full Stack Developer";
  const bonus = (bonusPercentage / 100 * basicSalary);
  const grossSalary = basicSalary + bonus;
  const tax = (5 / 100 * grossSalary);
  const finalSalary = grossSalary - tax;

  console.log(`Employee Name: ${employeeName}`);
  console.log(`Employee ID: ${employeeID}`);
  console.log(`Designation: ${designation}`);
  console.log('---- Salary Breakdown ----');
  console.log(`Basic Salary: ₹${basicSalary}`);
  console.log(`Bonus: ₹${bonus}`);
  console.log(`Gross Salary: ₹${grossSalary}`);
  console.log(`Tax Deducted: ₹${tax}`);
  console.log(`Final Salary: ₹${finalSalary}`);

  return finalSalary;
}
calculateSalary(20000, 20);

// 2. Student Result System:
// Create generateResult(name, marksArray)
// - Calculate total
// - Calculate average
// - Decide Grade (A/B/C/Fail)
// - Return result object

const generateResult = (name, marksArray) => {
  const total = marksArray.reduce((sum, mark) => sum + mark, 0);
  const average = total / marksArray.length;

  let grade;
  average >= 80 ? grade = 'A' :
  average >= 60 ? grade = 'B' :
  average >= 40 ? grade = 'C' : grade = 'Fail';

  return {
    name,
    total,
    average,
    grade
  };
}
console.log(generateResult("Mohammed Iqbal", [85, 78, 92, 88, 90]));

//SECTION 2 – Scope & Hoisting (Debugging)

function demo() {
  if (true) {
    var x = 10;
    let y = 20;
  }
  console.log(x);
  console.log(y);
}

//Questions:
// - What will happen? :
// - Why? 
// ANSWER FOR BOTH QUESTION: x will log and print 10 because var is function scoped and can be accessed outside the block but y will throw reference error cause y is block scoped it cannot be accessed outside the block.
// Fix: 
function demo() {
  if (true) {
    var x = 10;
    let y = 20;
    console.log(x);
    console.log(y);
  }
}
demo();

function demo() {
  let a, b;
  if (true) {
    a = 10;
    b = 20;
  }
  console.log(a);
  console.log(b);
}
demo();


//4. Hoisting Analysis:
console.log(x); 
var x = 100;
// undefined

//console.log(y); 
//let y = 200;
// ReferenceError y is accessed before initialization we cannot do that

// SECTION 3 – Callback & Higher Order (Industry Simulation)

// 5. Order Processing System:
// Create processOrder(orderId, callback)
// - Print "Order Processed"
// - Call generateInvoice(orderId)

const processOrder = (orderId, callback) => {
  console.log(`Order Processed for Order ID: ${orderId}`);
  callback(orderId);
}
processOrder("OR123", generateInvoice = (orderId) => {
  console.log(`Invoice Generated for Order ID: ${orderId}`);
});

// 6. Bank Transaction System:
let bankBalance = 10000;

const sendSMS = (message) => {
  console.log(`SMS Sent: ${message}`);
}

const transaction = (amount, type, callback) => {
  if (type === 'deposit') bankBalance += amount;
  else if (type === 'withdrawal') bankBalance -= amount;
  callback(bankBalance, amount, type);
}
transaction(2000, 'deposit', (balance, amount, type) => {
  console.log(`New Bank Balance after ${type}: ₹${balance}`);
  sendSMS(`Your account has been credited with ₹${amount}. New Balance: ₹${balance}`);
});

//SECTION 4 – Currying (E-Commerce)

// 7. Dynamic Price Builder:
const priceBuilder = (basePrice, discount, tax) => {
  const discountPrice = basePrice - (basePrice * discount / 100);
  const finalPrice = discountPrice + (discountPrice * tax / 100);
  console.log(`Base Price: ₹${basePrice}`);
  console.log(`discount: ${discount}%`);
  console.log(`Tax: ${tax}%`);
  return finalPrice;
};
console.log("Final Price:", priceBuilder(1000, 10, 5)); 

//SECTION 5 – IIFE (Security + Encapsulation)

//8. Secure Company Module:
const CompanyModule = (() => {
  const companyCode = "STACKLY!@#123";
  return {
    getCompanyCode() {
      return "Company is active";
    }
  };
})();
console.log(CompanyModule.getCompanyCode());

//SECTION 6 – Generator (Advanced Logic)

//9. Unique Order ID Generator:
//Generate ORD1001, ORD1002, ORD1003, etc.
function* orderIDGenerator() {
  let id = 1001;
  while (true) {
    yield `ORD${id++}`;
  }
}
const generator = orderIDGenerator();
console.log(generator.next().value);

//10. Coupon Spin System:
function* couponGenerator() {
  yield "10% OFF";
  yield "20% OFF";
  yield "50% OFF";
  yield "No Luck";
  yield "Jackpot";
}

const spin = couponGenerator();
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);

//SECTION 7 – Mini Project (Integrated)
// Mini E-Commerce Flow:

const ecommrce = (() => {
  const cart = [];

  const addToCart = (product, price) => {
    cart.push({ product, price });
    console.log(`${product} added`);
  }
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }
  const applyDiscount = total => discount => total - (total * discount / 100);
  function* generateCoupon() {
    yield "10% OFF";
    yield "20% OFF";
    yield "50% OFF";
    yield "No Luck";
  }
  const processPayment = (amount, callback) => {
    console.log(`Processing payment of ₹${amount}`);
    callback(amount);
  }
  return {
    addToCart,
    calculateTotal,
    applyDiscount,
    generateCoupon,
    processPayment
  };
})();

ecommrce.addToCart("iphone 16", 50000);
ecommrce.addToCart("MacBook Pro", 200000);

let total = ecommrce.calculateTotal();
total = ecommrce.applyDiscount(total)(10);

const couponGen = ecommrce.generateCoupon();
console.log("Coupon:", couponGen.next().value);
ecommrce.processPayment(total, (amount) => {
  console.log(`Payment of ₹${amount} successful!`);
});

//Concept Questions:
// 1. Difference between function declaration & expression? 
//ANSWER: Function declaration is fully hoisted and can be called before it is defined, function expression is not hoisted and cannot be called before it is defined. 
// Example of function declaration:
greet();
function greet() {
  console.log("Hello!");
}
// Example of function expression:
const greetExpression = function() {
  console.log("Hello!");
}

// 2. What is higher order function?
//ANSWER: A higher-order function is a function that takes another function as an argument or returns a function as a result. 

// 3. Real-time example of generator?
//ANSWER: Infinite scrolling, pagination, unique ID generation 

// 4. Why do we use IIFE?
//ANSWER: IIFE is used to create a new scope and avoid polluting the global namespace. It is also used for data privacy and encapsulation.

// 5. Difference between var, let, const?
//ANSWER: var is function scoped and can be re-declared and updated, let is block scoped and can be updated but not re-declared, const is block scoped and cannot be updated or re-declared.