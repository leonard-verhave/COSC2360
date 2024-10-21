"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Leonard Verhave
      Date:   10-16-24

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");
   e.preventDefault();


   let regex1 = /[A-Z]/;
   let regex2 = /\d/;
   let regex3 = /[!@#$%^&*()]/;

if (pwd.length < 8) {
      feedback.textContent = "your Password must be at least 8 characters";
      feedback.style.color = "red";

}else if (!regex1.test(pwd)) { 
      feedback.textContent = "Your password must include an uppercase letter";
      feedback.style.color = "red";

} else if (!regex2.test(pwd)) { 
      feedback.textContent = "Your password mut include a number";
      feedback.style.color = "red";

} else if (!regex3.test(pwd)) { 
      feedback.textContent = "Must include at least one of these : !@#$%^&*()";
      feedback.style.color = "red";
      
} else {
      signupForm.submit();
}

});