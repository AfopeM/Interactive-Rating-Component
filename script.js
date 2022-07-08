"use strict";

let rating = document.querySelectorAll(".rating");
const pickedRating = document.getElementById("picked-rating");
const submit = document.querySelector(".btn");
const startState = document.querySelector(".start-state");
const endState = document.querySelector(".end-state");

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", function (e) {
    pickedRating.textContent = i + 1;
  });
}

submit.addEventListener("click", function () {
  startState.classList.add("hidden");
  endState.classList.remove("hidden");
});
