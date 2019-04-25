"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init run");
  closeEye();
}

function closeEye() {
  document.querySelector(".one").classList.remove("close_eye");
  document.querySelector(".two").classList.add("close_eye");

  setTimeout(openEye, 1000);
}

function openEye() {
  document.querySelector(".one").classList.add("close_eye");
  document.querySelector(".two").classList.remove("close_eye");
  setTimeout(closeEye, 1500);
}
