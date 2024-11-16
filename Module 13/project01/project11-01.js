"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-01

      Project to retrieve the Astronomy Picture of the Day from NASA
      Author: leonard verhave
      Date:   11-15-24

      Filename: project11-01.js
*/
let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function() {
    const dateStr = dateBox.value;
    const apiKey = "DEMO_KEY";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateStr}`;

    fetch(url)
    .then(response => response.json()) 
    .then(json => showPicture(json))  
    .catch(error => console.error(error)); 
};

function showPicture(json) {
    if (json.media_type === "video") {
        imageBox.innerHTML = `
            <h3>${json.title}</h3>
            <iframe width="500" height="300" src="${json.url}" title="${json.title}" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>${json.explanation}</p>`;

    } else if (json.media_type === "image") {
        imageBox.innerHTML = `
            <h3>${json.title}</h3>
            <img src="${json.url}" alt="${json.title}" width="560" />
            <p>${json.explanation}</p>`;
            
    } else {
        imageBox.innerHTML = "Image not Available";  
    }
};
