// Functions - reuse code blocks

// Defining a function
function greet() {
    console.log("Hello!");
    console.log("Welcome to the world of functions!");
    console.log("Woohoo!");
}

// Calling a function
greet();
greet();
greet();

// Parameters
function sum(num1, num2) {
    console.log("Calculating...");
    return num1 + num2;
}

// Calling a function with parameters
console.log(sum(5, 8));