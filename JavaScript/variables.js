console.log("Hello World!");

// Variables = CONTAINERS

// mutable / changeable variables (var, let)
let firstName = "Jared";
console.log("Firstname:", firstName);

if (true) {
    var email = "jared@email.com";
    let username = "jared_user";
    
    console.log("Email:", email);
    console.log("Username:", username);
}

// immutable / unchangeable variables (const)
const birthdate = "06/23/2000";
// birthdate = "00/00/0000";
console.log(birthdate);