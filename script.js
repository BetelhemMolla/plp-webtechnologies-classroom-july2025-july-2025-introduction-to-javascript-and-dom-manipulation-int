// ============================
// Part 1: Variables & Conditionals
// ============================
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  const age = parseInt(document.getElementById("ageInput").value);
  const result = document.getElementById("ageResult");

  if (isNaN(age)) {
    result.textContent = "Please enter a valid number!";
  } else if (age >= 18) {
    result.textContent = "✅ You are eligible!";
  } else {
    result.textContent = "❌ Sorry, you must be 18 or older.";
  }
});

// ============================
// Part 2: Functions
// ============================
// Function to calculate shopping total
function calculateTotal(prices) {
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }
  return sum;
}

document.getElementById("calcTotalBtn").addEventListener("click", function () {
  const prices = [10.99, 5.5, 3.25];
  const total = calculateTotal(prices);
  document.getElementById("totalResult").textContent =
    "Total price: $" + total.toFixed(2);
});

// ============================
// Part 3: Loops
// ============================
// Countdown using for loop
document.getElementById("countdownBtn").addEventListener("click", function () {
  const list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old results
  for (let i = 5; i >= 1; i--) {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

// ============================
// Part 4: DOM Manipulation
// ============================
const heading = document.querySelector("header h1");
const list = document.getElementById("dynamicList");

// Change text
document.getElementById("changeTextBtn").addEventListener("click", function () {
  heading.textContent = "🚀 Heading Changed with JavaScript!";
});

// Toggle highlight
document.getElementById("toggleClassBtn").addEventListener("click", function () {
  heading.classList.toggle("highlight");
});

// Add new item to list
document.getElementById("addItemBtn").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});
