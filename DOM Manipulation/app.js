// 1 - Target elements

// Old way
// getElementById()
let elementWithID = document.getElementById("first-div");
console.log("Element with ID:", elementWithID);

// getElementsByClassName()
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Elements with class:", elementsWithClass);
console.log("First element with class:", elementsWithClass[0]);
console.log("second-div name:", elementsWithClass["second-div"]);

// getElementsByTagName()
let listItems = document.getElementsByTagName("li");
console.log("List Items:", listItems);
console.log("First List Item:", listItems[0]);

// New way
// querySelector() - return the FIRST occurence of the target string
let elementWithClass = document.querySelector(".sample-div");
console.log("Element with class:", elementWithClass);
let elementWithID2 = document.querySelector("#first-div");
console.log("Element with ID:", elementWithID2);
let listItem = document.querySelector("li");
console.log("List Item:", listItem);

// querySelectorAll() - returns ALL occurences of the target string
let elementsWithClass2 = document.querySelectorAll("div.sample-div");
console.log("Element with class:", elementsWithClass2);

/* MANIPULATION or MODIFYING */
// Headings
let headings = document.querySelectorAll("h3");
console.log("Heading Tags:", headings);

// Modifying Text
headings[0].innerText = "<em>New Heading!</em>";
headings[0].innerHTML = "<em>New Heading!</em>";

// Modifying Style
headings[0].style.color = "lightgreen";
headings[0].style.backgroundColor = "black";
headings[0].style.padding = "10px";

// Modifying every element through a foreach
headings.forEach(function (heading) {
    // Modifying Text
    heading.innerText += "!";

    // Modifying Styles
    heading.style.color = "lightgreen";
    heading.style.backgroundColor = "black";
    heading.style.padding = "10px";
})

// Modifying Attributes
let dayNightIcon = document.querySelector("#day-night-icon");
dayNightIcon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3688/3688129.png");

// Get Attribute
console.log(dayNightIcon.getAttribute("src"));

/* Adding and Removing Elements */
/* 
    ADDING ELEMENTS
    1. Creating the Element
    2. Setting text, styles and classes
    3. Appending to an existing element
*/

// Step 1
let parentElement = document.querySelector("#parent-element");
let newElement = document.createElement("p");

// Step 2
newElement.innerText = "Child Element";
newElement.style.fontWeight = "bold";

// Step 3
parentElement.appendChild(newElement);

/* REMOVING ELEMENTS */
let elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

/* Adding Event Listeners */
let darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
    let pageContainer = document.querySelector("#page-container");
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "aliceblue";

    let pageModetext = document.querySelector("#page-container div");
    pageModetext.innerText = "Dark Mode";
})