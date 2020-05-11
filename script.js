/* 
   Two T's Bar and Grill
   Filename: script.js

   Author:   Timothy Grimes and Thomas Sander
   Date:     May 10, 2020
   
   Supporting files:
 */


/* create variables */
var list = document.querySelector(".choices-list");
var bar = document.querySelector(".choices-list li:first-of-type");
var bullriding = document.querySelector(".choices-list li:nth-of-type(2)");
var dog = document.querySelector(".choices-list li:nth-of-type(3)");
var steak = document.querySelector(".choices-list li:nth-of-type(4)");
var burger = document.querySelector(".choices-list li:last-of-type");
var figureImage = document.querySelector("article figure img");
var figureCaption = document.querySelector("article figure figcaption");

/* change image to bar */
function showBar() {
	figureImage.src = "bar.jpg";
	figureImage.alt = "the beautiful bar at Two T's Bar and Grill";
	figureCaption.textContent = "Two T's Bar";
}

/* change image to bullriding */
function showBullriding() {
	figureImage.src = "bullriding.jpg";
	figureImage.alt = "mechanical bullriding inside Two T's Bar and Grill";
	figureCaption.textContent = "Bullriding";
}

/* change image to dog */
function showDog() {
	figureImage.src = "dog.jpg";
	figureImage.alt = "dogs are welcome at Two T's Bar and Grill";
	figureCaption.textContent = "Dog";
}

/* change image to steak */
function showSteak() {
	figureImage.src = "steak.jpg";
	figureImage.alt = "a beautiful juicy steak";
	figureCaption.textContent = "Steak";
}

/* change image to burger */
function showBurger() {
	figureImage.src = "burger.jpg";
	figureImage.alt = "a beautiful burger";
	figureCaption.textContent = "Burger";
}

/* create event listeners for list item clicks */
bar.addEventListener("click", showBar, false);
bullriding.addEventListener("click", showBullriding, false);
dog.addEventListener("click", showDog, false);
steak.addEventListener("click", showSteak, false);
burger.addEventListener("click", showBurger, false);
