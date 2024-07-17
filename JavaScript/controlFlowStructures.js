// Control Flow Structures

// Conditional Statement

// if, else if, else statement
let temperature = 25;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature < 20) {
    console.log("It's cool outside.");
} else if (temperature >= 20 && temperature < 30) {
    console.log("It's warm outside.");
} else {
    console.log("It's hot outside.");
}

// switch statement
let day = "Thursday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's the end of the week.");
        break;
    default:
        console.log("It's a regular day.");
}

// Looping Statement

// for loop
// for (assignment; condition; increment)
for (let i = 0; i < 3; i++) {
    console.log("For loop count:", i + 1);
}

// while loop
let count = 1;
while (count <= 3) {
    console.log("While loop count:", count);
    count++;
}

// do-while loop
let userInput = "";

do {
    userInput = prompt("Enter your name!");
} while (userInput == "")
    
console.log(userInput);