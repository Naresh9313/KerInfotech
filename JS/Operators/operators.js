

// 1. ARITHMETIC OPERATORS

const a = 10;
const b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);


// 2. ASSIGNMENT OPERATORS

let score = 10;

score += 5;
console.log("After += :", score);

score -= 2;
console.log("After -= :", score);

score *= 2;
console.log("After *= :", score);

score /= 2;
console.log("After /= :", score);


// 3. COMPARISON OPERATORS
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 20);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != 5);
console.log(5 !== "5");


// 4. LOGICAL OPERATORS
const age = 25;
const hasLicense = true;

console.log(age >= 18 && hasLicense);

const hasCash = false;
const hasCard = true;

console.log(hasCash || hasCard);

const isActive = true;

console.log(!isActive);


// 5. INCREMENT / DECREMENT
let count = 5;

count++;

console.log("Increment:", count);

count--;

console.log("Decrement:", count);


// 6. TERNARY OPERATOR

const userAge = 20;

const status = userAge >= 18 ? "Adult" : "Minor";

console.log(status);


// EVEN / ODD USING TERNARY

const number = 10;

const result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);