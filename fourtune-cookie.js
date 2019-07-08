/*
 Used code from cse 154 lecture
 */
"use strict";

window.addEventListener("load", init);

/**
 * Sets up the click event listener for the mystery box picture so that whenever
 * it is clicked, it will "open the box" to show what's inside.
 */
function init() {
  let cookie = document.getElementById("box-btn");
  cookie.addEventListener("click", openCookie);
}

/**
 * Changes the image of the fourtune to reveal what's inside.
 */
function openCookie() {
  // 1. Get the box image
  alertFunction();
  let cookie = document.getElementById("cookie");
  // 2. Change the box image's src attribute!
  cookie.src = "img/open-cookie.jpg";
  cookie.alt = "A Fourtune Cookie"
}

function alertFunction() {
    let myVar = setTimeout(alertFunc, 1000);
  }
  
  function alertFunc() {
    alert("Have a nice day");
  }
