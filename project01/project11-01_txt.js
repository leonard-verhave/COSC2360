"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-01

      Project to retrieve the Astronomy Picture of the Day from NASA
      Author: 
      Date:   

      Filename: project11-01.js
*/


let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function() {
    const dateStr = dateBox.value; // Get the selected date from the dateBox
    const apiKey = 'DEMO_KEY';     // Use the public API key
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateStr}`;

    // Fetch the data from the NASA API
    fetch(url)
        .then(response => response.json())  // Convert response to JSON
        .then(json => showPicture(json))    // Call the showPicture function with the JSON data
        .catch(error => console.error("Request failed", error));  // Handle errors
};

// Function to display the picture or video
function showPicture(json) {
    if (json.media_type === "video") {
        // If the media type is video, create an iframe to display the video
        imageBox.innerHTML = `
            <h3>${json.title}</h3>
            <iframe width="560" height="315" src="${json.url}" title="${json.title}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>${json.explanation}</p>
        `;
    } else if (json.media_type === "image") {
        // If the media type is image, display the image
        imageBox.innerHTML = `
            <h3>${json.title}</h3>
            <img src="${json.url}" alt="${json.title}" width="560" />
            <p>${json.explanation}</p>
        `;
    } else {
        // If the media type is neither an image nor a video, show a fallback message
        imageBox.innerHTML = "Image not Available";
    }
}
