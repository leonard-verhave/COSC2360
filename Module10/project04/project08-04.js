"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Leonard Verhave 
      Date:   10-24-24

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function() {
   // Retrieve information about the selected file
   let JSONfile = this.files[0];
   
   // Read the contents of the selected file
   let fr = new FileReader();
   fr.readAsText(JSONfile); 

   // Once the file has finished loading, parse the JSON file
   fr.onload=function(){ 
      const staff = JSON.parse(fr.result);
      makeStaffTable(staff);

   };
   
};

function makeStaffTable(staff) {
   let staffTable = document.createElement("table");
   let headerRow = document.createElement("tr");
   
   for (let prop in staff.directory[0]) {
      let headerCell = document.createElement("th");
      headerCell.textContent = prop.charAt(0).toUpperCase() + prop.slice(1);
      headerRow.appendChild(headerCell);
   }
   staffTable.appendChild(headerRow);


   for( let i = 0; i < staff.directory.length; i++) {
   let tableRow = document.createElement("tr");
   for(let prop in staff.directory[i]) {
      let tableCell = document.createElement("td");
      tableCell.textContent = staff.directory[i][prop];
      tableRow.appendChild(tableCell);
   }
   staffTable.appendChild(tableRow);
}

containerBox.innerHTML = "";
containerBox.appendChild(staffTable);
}