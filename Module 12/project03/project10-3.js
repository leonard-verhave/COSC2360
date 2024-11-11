"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Author: leonard verhave
    Date:   11-8-24

    Filename: project10-03.js
*/


// Declare global variables for DirectionsService and DirectionsRenderer
let bikeFind, bikeDraw;

// This function will be the callback for the Google Maps API
function showMap() {
    // Page objects
    let bikeMap = document.getElementById("bikeMap");
    let bikeDirectionsDiv = document.getElementById("bikeDirections");
    let startingPoint = document.getElementById("startingPoint");
    let endingPoint = document.getElementById("endingPoint");

    // Create new DirectionsService and DirectionsRenderer objects
    bikeFind = new google.maps.DirectionsService();
    bikeDraw = new google.maps.DirectionsRenderer();

    // Define the LatLng object for Boulder, Colorado
    let Boulder = new google.maps.LatLng(40.01753, -105.26496);

    // Create a new map centered on Boulder
    let myMap = new google.maps.Map(bikeMap, {
        zoom: 12,
        center: Boulder
    });

    // Set the DirectionsRenderer's map to the created map
    bikeDraw.setMap(myMap);

    // Event listeners for changes in the starting point and ending point selection lists
    startingPoint.addEventListener("change", drawRoute);
    endingPoint.addEventListener("change", drawRoute);
}

// Define the drawRoute() function
function drawRoute() {
    let startingPoint = document.getElementById("startingPoint");
    let endingPoint = document.getElementById("endingPoint");
    let bikeDirectionsDiv = document.getElementById("bikeDirections");

    // Only proceed if both the starting point and ending point have been selected
    if (startingPoint.selectedIndex !== 0 && endingPoint.selectedIndex !== 0) {

        // Define the bikeRoute object with origin and destination
        let bikeRoute = {
            origin: startingPoint.value,  // Starting point (latitude, longitude string)
            destination: endingPoint.value,  // Ending point (latitude, longitude string)
            travelMode: google.maps.TravelMode.BICYCLING  // Set travel mode to BICYCLING
        };

        // Use the DirectionsService's route method to get directions
        bikeFind.route(bikeRoute, function (result, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                // Apply the results to the DirectionsRenderer object
                bikeDraw.setDirections(result);
                bikeDraw.setPanel(bikeDirectionsDiv); // Display turn-by-turn directions in the directions div
            } else {
                // If the directions request fails, display an error message
                bikeDirectionsDiv.innerHTML = "Directions Unavailable: " + status;
            }
        });
    }
}

