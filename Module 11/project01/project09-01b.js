"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: leonard verhave
      Date:  10-31-24

      Filename: project09-01b.js
*/

let query = location.search.slice(1);

let queryVariable = query.replace(/\+/g,"");

let decodeQuery = decodeURIComponent(queryVariable);

let cardFields = decodeQuery.split("&");

for (let item of cardFields) {
      let nameValue = item.split("=");
      let name = nameValue[0];
      let value = nameValue[1];

      if (document.getElementById(name)) {
            document.getElementById(name).textContent = decodeURIComponent(value);
      }
}

