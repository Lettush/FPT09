// Arrays and Array methods
// Array - allows us to store multiple values in a single variable

// Creating an array
let fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];

// Accessing the array
console.log(fruits);
console.log("First fruit:", fruits[0]);

// Length - to get the number of values inside an array
console.log(fruits.length);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Modifying array
fruits[1] = "Grapes";
console.log(fruits);

// Add another element (.push)
fruits.push("Star Apple");
console.log(fruits);

// Remove the last element (.pop)
console.log(fruits.pop());
console.log(fruits);

// Splice (Two methods)

// Add at an index (starting, deleteCount, value)
fruits.splice(3, 0, "Pineapple");
console.log(fruits);

// Remove at an index (starting, deleteCount)
fruits.splice(3, 2);
console.log(fruits);

// For loops and arrays
let numbers = [3, 4, 5, 2, 1];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Foreach method
numbers.forEach(function (number) {
    console.log("Foreach number:", number);
})