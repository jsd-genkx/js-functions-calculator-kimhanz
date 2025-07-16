"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Step 02: Create a Validation Function for Inputs

function validateInputs(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Error: Both inputs must be numbers";
  }
  return null;
}

// Step 03: Create a calculator Function to Combine the Above Functions

function calculator(num1, num2, operator) {
  const error = validateInputs(num1, num2);
  if (error) {
    return error;
  }

  switch (operator) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    default:
      return "Error: Invalid operation";
  }
}

console.log(calculator(10, 5, "add")); // 15
console.log(calculator(10, 5, "subtract")); // 5
console.log(calculator(10, 5, "multiply")); // 50
console.log(calculator(10, 5, "divide")); // 2
console.log(calculator(10, 0, "divide")); // Error: Cannot divide by zero
console.log(calculator(10, "x", "add")); // Error: Both inputs must be numbers
