"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: Leonard Verhave
      Date:   10-24-24
      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/

const box = {
   width: BOX_WIDTH,
   height: BOX_HEIGHT,
   xPos: 0,
   yPos: 0
}

function Ball(size) {
   this.radius = size;
   this.xPos = null;
   this.yPos = null;
   this.xVelocity = null;
   this.yVelocity = null;
}

Ball.prototype.moveWithin = function(container) {
   const ballTop = this.yPos;
   const ballLeft = this.xPos;
   const ballBottom = this.yPos + this.radius;
   const ballRight = this.xPos + this.radius;

   if (ballTop < 0 || ballBottom > container.height) {
      this.yVelocity = -this.yVelocity;
      this.yPos += this.yVelocity; 
   }

   if (ballLeft < 0 || ballRight > container.width) {
      this.xVelocity = -this.xVelocity;
      this.xPos += this.xVelocity; 
    }

    this.yPos += this.yVelocity;
    this.xPos += this.xVelocity;
}

/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.position = "relative"; 
// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {
   const newBall = new Ball(BALL_RADIUS);
   newBall.xPos = (BOX_WIDTH - BALL_RADIUS) / 2;
   newBall.yPos = (BOX_HEIGHT - BALL_RADIUS) / 2;
   newBall.xVelocity = rand(-10, 10);
   newBall.yVelocity = rand(-10, 10);

   let ballImage = document.createElement("div");
   ballImage.className = "ball";
   ballImage.style.width = BALL_RADIUS + "px";
   ballImage.style.height = BALL_RADIUS + "px";
   ballImage.style.position = "absolute";
   ballImage.style.left = newBall.xPos + "px";
   ballImage.style.top = newBall.yPos + "px";
   ballImage.style.backgroundColor = "red"; 
   ballImage.style.borderRadius = "50%"; 

   boxImage.appendChild(ballImage);

   window.setInterval(function() {
      newBall.moveWithin(box);
      ballImage.style.top = newBall.yPos + "px";
      ballImage.style.left = newBall.xPos + "px";
      boxImage.style.top = box.yPos + "px";
      boxImage.style.left = box.xPos + "px";
    }, 25);
}

/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
    let size = maxVal - minVal + 1;
    return Math.floor(minVal + size * Math.random()); 
}