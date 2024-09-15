/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Leonard Verhave
      Date:   9-14-24

      Filename: project03-01.js
*/

document.addEventListener('DOMContentLoaded', () => {
      const menuItems = document.getElementsByClassName('menuItem');
  
      function calcTotal() {
          let orderTotal = 0;
          for (let i = 0; i < menuItems.length; i++) {
              if (menuItems[i].checked) {

                  orderTotal += Number(menuItems[i].value);
              }
          }
          document.getElementById('billTotal').textContent = formatCurrency(orderTotal);
      }

for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', calcTotal);
      }

function formatCurrency(amount) {
      return '$' + amount.toFixed(2);
      }
  });