// Task 1: Employee Information
let employeeName = "Adam Man";
const employeeID = 75608;
var isActive = true;

console.log("Employee Name:", employeeName, "Type:", typeof employeeName);
console.log("Employee ID:", employeeID, "Type:", typeof employeeID);
console.log("Is Active:", isActive, "Type:", typeof isActive);

// Task 2: Prodcuct Details
// Declare a variable for the name of the product
let productName = "Earbuds";
//Stating a constant for the price of the product
const productPrice = 159.99;
// Declare a variable to state the product is available
var isAvailable = true;
//Showing the product's name and its data type
console.log("Product Name:", productName, "Type:", typeof productName); 

// Output the product's price and its data type
console.log("Product Price:", productPrice, "Type:", typeof productPrice); 

// Output whether the product is available and its data type
console.log("Is Available:", isAvailable, "Type:", typeof isAvailable); 

// Task 3: Financial Transactions
// Declare a variable for the account balance and initialize it with 1000
let accountBalance = 1000.0; 

// Add 500 to the account balance (deposit) to showcase addition
accountBalance += 500; 
console.log("After deposit:", accountBalance); 

// Subtract 300 from the account balance (withdrawal) (shows subtraction)
accountBalance -= 300; 
console.log("After withdrawal:", accountBalance); 

// Multiply the account balance by 1.07 to apply 7% interest (shows multiplication)
accountBalance *= 1.07; 
console.log("After interest:", accountBalance); 

// Divide the account balance by 3 (splitting the account into multiple accounts)
accountBalance /= 3; 
console.log("After split:", accountBalance); 

// Task 4: Customer Messaging
// Declare a variable for the customer's name
let customerName = "Sunny Man"; 

// Creating a personal welcome message for the customer
let welcomeMessage = "Greetings, " + customerName + "! Welcome to the future."; 

// Output the welcome message
console.log(welcomeMessage); 

// Task 5: Access Control
// Declare a variable to check if the user is logged in
let isLoggedIn = true; 

// Check if the user is logged in and display the appropriate message
if (isLoggedIn) { 
    console.log("Access is allowed :)."); 
} else { 
    console.log("Access is not granted :(."); 
}