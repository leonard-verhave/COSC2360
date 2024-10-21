"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: leonard verhave
      Date:   10-18-24

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let statusElement = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

addButton.onclick = function() {
   const name = customerName.value.trim();
   if (name) {
      customers.push(name);
      generateCustomerList();
      statusElement.textContent = `${name} add the end of the list`;
   } else {
      statusElement.textContent = "Enter a customer name please.";
   }
   customerName.value = "";
};

searchButton.onclick = function() {
   const name = customerName.value.trim();
   const place = customers.indexOf(name) + 1;
   if (place > 0) {
   statusElement.textContent = `${name} is found in position ${place} of the queue.`;
   } else {
      statusElement.textContent = `${name} is not found.`;
   }
   customerName.value = ""
};

removeButton.onclick = function() {
   const name = customerName.value.trim();
   const index = customers.indexOf(name);
   if (index !== -1) {
      customers.splice(index,1);
      generateCustomerList();
      statusElement.textContent = `${name} removed.`;
   } else {
      statusElement.textContent = `${name} is not found.`;
   }
   customerName.value = ""
};

topButton.onclick = function() {
   const topCustomer = customers.shift();
   if(topCustomer) {
      statusElement.textContent = `Top customer ${topCustomer} is removed form queue`;
      generateCustomerList();
   } else {
      statusElement.textContent = "No customers i nthe queue";
   }
}

