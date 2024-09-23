/*    JavaScript 7th Edition
      Chapter 4
      Project 04-05

      Degrees <-> Radians Coverter
      Author: 
      Date:   

      Filename: project04-05.js
 */
"use strict";
// Define PI 
const PI = Math.PI;

// Function to convert degrees to radians 
function degreesToRadians(degrees) {
   return degrees * PI / 180;
}

// Function to convert radians to degrees 
function radiansToDegrees(radians) {
   return radians * 180 / PI;
}

// converts radians to degrees 
document.getElementById("rValue").onchange = function() {
   let radians = document.getElementById("rValue").value; 
   let degrees = radiansToDegrees(radians);
   document.getElementById("aValue").value = formatValue3(degrees);

   console.log(`Radians = ${radians}`);
   console.log(`Degrees = ${degrees}`);
}

//  converts degrees to radians 
document.getElementById("aValue").onchange = function() {
   let degrees = document.getElementById("aValue").value;
   let radians = degreesToRadians(degrees);
   document.getElementById("rValue").value = formatValue3(radians);
   
   console.log(`Radians = ${radians}`);
   console.log(`Degrees = ${degrees}`);
}

/* ================================================================= */
// Function to display a numeric value in the format ##.###
function formatValue3(value) {
    return value.toFixed(3);
}
