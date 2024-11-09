// Part 1: Basic Budget Calculator

let income;
let expense;

income = prompt(`Please enter a positive value for income`);
console.log(income);

expense = prompt(`Please enter a positive value for expense`);

const balance = income - expense;

if (balance < 0) {
  console.log(
    `We had an income of ${income} naira; expense of ${expense} naira and a loss of ${Math.abs(
      balance
    )} naira`
  );
  alert(
    `We had an income of ${income} naira; expense of ${expense} naira and a loss of ${Math.abs(
      balance
    )} naira`
  );
}
if (balance === 0) {
  console.log(
    `We had an income of ${income} naira; expense of ${expense} naira and we made no gain`
  );
  alert(
    `We had an income of ${income} naira; expense of ${expense} naira and we made no gain`
  );
}
if (balance > 0) {
  console.log(
    `We had an income of ${income} naira; expense of ${expense} naira and we made profit of ${balance} naira`
  );
  alert(
    `We had an income of ${income} naira; expense of ${expense} naira and we made profit of ${balance} naira`
  );
}

// Part 2: Enhanced Budget Tracker

// Step 1: Declare arrays for incomes and expenses
let incomes = [];
let expenses = [];

// Function to add an amount to either income or expense
function addAmount(type, amount) {
  // TODO: Validate amount and add it to the correct array

  if (type === "incomes") {
    incomes.push(amount);
    incomes = type;
  }
  if (type === "expenses") {
    expenses.push(amount);
    // console.log(expenses);
    expenses = type;
  }

  return type;
}

const resultss = addAmount("expenses", 10);
console.log(resultss);

// Function to calculate the total of an array
function calculateTotal(arr) {
  let total = 0;
  // TODO: Use a for loop to calculate the total
  for (let total = 0; total < arr.length; total++) {
    const element = arr[total];
  }
  return total;
}

// Function to calculate and display the balance
function calculateBalance() {
  // TODO: Calculate total income and total expenses
  // TODO: Calculate the balance
  // TODO: Determine if the balance is positive or negative
  // TODO: Display the balance and its status
}

// Step 2: Input Flow for Income
let incomeInput = prompt("Enter an income amount (or type 'done' to finish):");
while (incomeInput.toLowerCase() !== "done") {
  // TODO: Call addAmount function for income
  incomeInput = prompt(
    "Enter another income amount (or type 'done' to finish):"
  );
}

// Step 3: Input Flow for Expenses
let expenseInput = prompt(
  "Enter an expense amount (or type 'done' to finish):"
);
while (expenseInput.toLowerCase() !== "done") {
  // TODO: Call addAmount function for expenses
  expenseInput = prompt(
    "Enter another expense amount (or type 'done' to finish):"
  );
}

// Step 4: Calculate and display the final balance
calculateBalance();
