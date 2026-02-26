"use strict";

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const ul = document.querySelector("#ul");

const clickBtn = function (e) {
  e.preventDefault();
  const newValue = input.value;
  const li = document.createElement("li");
  ul.appendChild(li);
  li.textContent = input.value;
  input.value = "";
  const newBtn = document.createElement("button");
  newBtn.textContent = "DELETE";
  li.appendChild(newBtn);
  newBtn.addEventListener("click", function () {
    li.remove();
  });
};

btn.addEventListener("click", clickBtn);
