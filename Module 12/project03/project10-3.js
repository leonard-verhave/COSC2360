"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Author: leonard verhave
    Date:   11-8-24

    Filename: project10-03.js
*/

let bikeFind, bikeDraw;

function showMap() {
    let bikeMap = document.getElementById("bikeMap");
    let bikeDirectionsDiv = document.getElementById("bikeDirections");
    let startingPoint = document.getElementById("startingPoint");
    let endingPoint = document.getElementById("endingPoint");

    bikeFind = new google.maps.DirectionsService();
    bikeDraw = new google.maps.DirectionsRenderer();

    let Boulder = new google.maps.LatLng(40.01753, -105.26496);

    let myMap = new google.maps.Map(bikeMap, {
        zoom: 12,
        center: Boulder
    });

    bikeDraw.setMap(myMap);

    startingPoint.addEventListener("change", drawRoute);
    endingPoint.addEventListener("change", drawRoute);
}

function drawRoute() {
    let startingPoint = document.getElementById("startingPoint");
    let endingPoint = document.getElementById("endingPoint");
    let bikeDirectionsDiv = document.getElementById("bikeDirections");

    if (startingPoint.selectedIndex !== 0 && endingPoint.selectedIndex !== 0) {
        let bikeRoute = {
            origin: startingPoint.value,
            destination: endingPoint.value,
            travelMode: google.maps.TravelMode.BICYCLING
        };

        bikeFind.route(bikeRoute, function (result, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                bikeDraw.setDirections(result);
                bikeDraw.setPanel(bikeDirectionsDiv);
            } else {
                bikeDirectionsDiv.innerHTML = "Directions Unavailable: " + status;
            }
        });
    }
}