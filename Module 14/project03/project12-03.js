"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: leonard verhave
      Date:   11-23-24

      Filename: project12-03.js
*/
$(document).ready(function () {
      $("article > h2").click(function (){
            var heading = $(this);

            var list = heading.next();

            var headingIamge = heading.find("img");

            list.slideToggle(500);

            var currentSrc = headingIamge.attr("src");

            if (currentSrc === "plus.png") {
                  headingIamge.attr ("src", "minus.png");
            } else {
                  headingIamge.attr ("src", "plus.png");
            }
      })
});
