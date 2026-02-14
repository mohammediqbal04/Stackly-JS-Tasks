// JavaScript Practice Tasks

// SECTION 1 – Date Object Tasks

//TASK 1 – Custom Digital Clock
// const updateClock = () => {
//   const now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();

//   hours = hours < 10 ? '0' + hours : hours;
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   seconds = seconds < 10 ? '0' + seconds : seconds;
//   console.log(`Current Time: ${hours} : ${minutes} : ${seconds}`);
// };

// setInterval(updateClock, 1000);

//TASK 2 – Find Current Day Name
const getDay = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayName = days[today.getDay()];
  console.log(`Today is: ${dayName}`);
}
getDay();

//TASK 3 – Age Calculator (Basic)
let birthYear = 2003;
const calculateAge = new Date().getFullYear() - birthYear;
console.log(`Your age is: ${calculateAge}`);

//TASK 4 – Create Specific Date
let date = new Date();
date.setFullYear(2020);
date.setMonth(7);
date.setDate(15);

date.setHours(10);
date.setMinutes(30);
date.setSeconds(45);
console.log(date.toLocaleString());

//SECTION 2 – setTimeout & setInterval

//TASK 5 – Delayed Message
setTimeout(() => {
  console.log("Welcome Naveen ■");
}, 3000);

//TASK 6 – Stop Interval After 5 Seconds
let count = 1;

let interval = setInterval(() => {
  console.log(count);

  if (count === 5) {
    clearInterval(interval);
    console.log("Stopped");
  }

  count++;
}, 1000);

//SECTION 3 – Promise Practice

//TASK 7 – Simple Promise
let num = 12;
let checkNumber = new Promise((resolve, reject) => {
  if (num > 10) {
    resolve("Valid Number");
  } else {
    reject("Invalid Number");
  }
});
checkNumber
  .then((message) => console.log(message))
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("Check completed");
  });


//SECTION 4 – Fetch API Task
//TASK 8 – Fetch Product Prices
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    products.forEach((item) => {
      console.log(`Product: ${item.title}`);
      console.log(`Price: ${item.price}`);
      console.log("-----------------");
    });
  })
  .catch((error) => {
    console.log("Error fetching products:", error);
  });

//SECTION 5 – Execution Order Task
function one() {
  console.log("one");
}

function two() {
  console.log("two");
}

function three() {
  console.log("three");
}

one();
setTimeout(two, 0);
three();
