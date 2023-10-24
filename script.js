"use strict";

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const key = document.getElementById("key");
const keyCode = document.getElementById("keyCode");
const code = document.getElementById("code");


window.addEventListener('keydown', (e) => {

  btn.style.display = "none";
  container.style.display = "flex";

  key.textContent = e.key === " " ? "Space" : e.key;
  // e.keyCode is depricated
  keyCode.textContent = e.keyCode;
  code.textContent = e.code;
});