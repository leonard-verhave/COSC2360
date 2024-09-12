/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Leonard Verhave
      Date:   9-5-24

      Filename: project02-01.js
 */
     
     
      /* Calculations for Farenheit and celsius 
      */ 
      function FahrenheitToCelsius(degree) {
        return (degree - 32) / 1.8;
      }
      
      function CelsiusToFahrenheit(degree) {
        return (degree * 1.8) + 32;
      }
        
      document.getElementById("fValue").onchange = function() {
        var fahrenheit = document.getElementById("fValue").value;
        var celsius = document.getElementById("cValue").value;
        if (fahrenheit !== "") {
          document.getElementById("cValue").value = FahrenheitToCelsius(fahrenheit);
        } else if (celsius !== "") {
          document.getElementById("fValue").value = CelsiusToFahrenheit(celsius);
          }
      }
      
      document.getElementById("cValue").onchange = function() {
        var fahrenheit = document.getElementById("fValue").value;
        var celsius = document.getElementById("cValue").value;
        if (celsius !== "") {
          document.getElementById("fValue").value = CelsiusToFahrenheit(celsius);
        } else if (fahrenheit !== "") {
          document.getElementById("cValue").value = FahrenheitToCelsius(fahrenheit);
          }
      
        
      }
      

