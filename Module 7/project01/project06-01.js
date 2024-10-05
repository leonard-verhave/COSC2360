"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: 
      Date:   

      Filename: project06-01.js
*/
const submitButton = document.getElementById("submitButton");
const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function(event) {
    event.preventDefault(); 

    const validationMessage = document.getElementById("validationMessage");
    const pwdValue = pwd.value;
    const pwd2Value = pwd2.value;
    
    
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    
    if (!passwordPattern.test(pwdValue)) {
        validationMessage.textContent = "Your password must be at least 8 characters with at least one letter and one number.";
    } else if (pwdValue !== pwd2Value) {
        validationMessage.textContent = "Your passwords must match.";
    } else {
        validationMessage.textContent = ""; 
    }
});