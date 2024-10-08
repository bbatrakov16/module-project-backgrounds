/* FUNCTIONS MODULE ASSIGNMENT
Demonstrating knowledge of functions with parameters and return values using the myCanvas
*/

// *** Don't forget to add your graphics and random libraries! ***

// Canvas setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 500; // any size for my project
cnv.height = 600;

// Do not add/remove code from this section:
// ***************************************************
// Global Vars
let mouseX;
let mouseY;

// mouse movement listener
cnv.addEventListener("mousemove", mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log("X: " + mouseX + "  Y: " + mouseY);
}
// ***************************************************

// Backgrounds
function background1() {
  skyGround("#FFADD4", "#B9FF24");
  mountains(0, 350, "#009042");
  sunMoon(430, 50, "yellow", "orange");
}

function background2() {
  skyGround("#DF9300", "#FFCE6F");
  mountains(25, 350, "#E36620");
  sunMoon(70, 50, "#00045F", "#F0F0F0");
}

function background3() {
  skyGround("#00B2FF", "#00BE57");
  mountains(70, 350, "#4D1C00");
  sunMoon(430, 50, "#FF5C00", "#FF0000");
}

// 3 different Cases
function thirdCase() {
  background1();
  drawSimpleTree(300, 410, 1.5, "#E800D0");
  drawChristmasTree(400, 430, 1.5, "purple");
  drawFlower(110, 430, 10, "yellow", "blue", "pink", "purple");
  drawMashroom(270, 550, 40);
}

// firstCase();

function secondCase() {
  background2();
  drawChristmasTree(400, 450, 1, "#894D2C");
  drawChristmasTree(270, 380, 2, "#CF3E00");
  drawChristmasTree(200, 490, 1.5, "#341300");
  drawSimpleTree(80, 410, 1.5, "#5A2100");
}

// secondCase();

function firstCase() {
  background3();

  drawChristmasTree(380, 400, 2, "#005728");
  drawChristmasTree(35, 400, 1, "#005728");
  drawSimpleTree(100, 480, 1.5, "#00FF75");
  drawMashroom(350, 555, 40);
  drawFlower(250, 390, 10, "yellow", "blue", "#005728", "green");
}

thirdCase();

function userChoice() {
  let userChoice = prompt(
    "Please choose one of three options: \n1. Valley \n2. Desert \n3. Pink Paradise"
  );
  return userChoice;
}

let choice = userChoice();

function showChosenCase(choice) {
  choice = choice.toLowerCase();

  if (choice === "valley" || choice === "1") {
    firstCase();
  } else if (choice === "desert" || choice === "2") {
    secondCase();
  } else if (choice === "pink paradise" || choice === "3") {
    thirdCase();
  } else {
    alert("Please choose from the three acceptable cases");
  }
}

showChosenCase(choice);
