// Operators and Expressions

// Arithmetic
let num1 = 10;
let num2 = 5;

console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);
console.log("Exponent (**):", num1 ** num2); // 10^5
console.log("Remainder / Modulo (%):", num1 % num2); // This gets the remainder of a division operation

// PEMDAS / BODMAS
let answer = 3 + 4 * 5 / (2 + 3) + 8;
console.log("Answer:", answer);

// String (Concatenation - combining text together)
let str1 = "Hello";
let str2 = "World!";

console.log(str1 + " " + str2);

// Comparison (check the differences between two values)

// == (Loose)
console.log("Equal to (==):", 5 == 5);
console.log("Equal to (==):", 5 == "5");
console.log("Equal to (==):", 5 == "3");

// != (Loose)
console.log("Not equal to (!=):", 5 != 5);
console.log("Not equal to (!=):", 5 != "5");
console.log("Not equal to (!=):", 5 != "3");

// === (Strict)
console.log("Equal to (===):", 5 === 5);
console.log("Equal to (===):", 5 === "5");
console.log("Equal to (===):", 5 === "3");

// !== (Strict)
console.log("Not equal to (!==):", 5 !== 5);
console.log("Not equal to (!==):", 5 !== "5");
console.log("Not equal to (!==):", 5 !== "3");

console.log("Greater Than (>):", 5 > 3);
console.log("Less Than (<):", 3 < 5);
console.log("Greater Than or Equal To (>=):", 5 >= 3);
console.log("Less Than or Equal To (<=):", 3 <= 5);

// Logical
/* 
    && - AND
    || - OR
    ! - NOT
*/
let sunny = true;
let warm = false;

// AND: True only if all conditions are met
console.log("Is it sunny AND warm?", sunny && warm);

// OR: At least one must be true
console.log("Is it sunny OR warm?", sunny || warm);

// NOT: Invert/Get the opposite boolean value
console.log("NOT sunny?", !sunny);

// Assignment

// Assigning a value to a variable (=)
let num3 = 10;
let num4 = 5;

// Addition Assignment (+=)
num3 += num4;
console.log("num3:", num3); // 15

// Subtraction Assignment (-=)
num3 -= num4;
console.log("num3:", num3); // 10

// Multiplication Assignment (*=)
num3 *= num4;
console.log("num3:", num3); // 50

// Division Assignment (/=)
num3 /= num4;
console.log("num3:", num3); // 10