"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: leonard verhave
      Date:   9-30-24

      Filename: project05-03.js
*/
const sourceDoc = document.getElementById("source_doc");
const toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";


for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {
    if (n.nodeName === heading) {

        const anchor = document.createElement("a");
        anchor.setAttribute("name","doclnk" + headingCount);
        n.insertBefore(anchor,n.firstChild);

        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = n.textContent;
        link.href = "#doclink" + headingCount;

        listItem.appendChild(link);
        toc.appendChild(listItem);
        headingCount++;

    }
}