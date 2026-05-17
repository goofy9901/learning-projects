"use strict";

const ul = document.querySelector("#ul");
const input = document.querySelector("#item");
const btn = document.querySelector("#btn");

const btnClick = function (e) {
  e.preventDefault();
  const newValue = input.value;
  input.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const newBtn = document.createElement("button");

  span.textContent = newValue;
  newBtn.textContent = "Delete";

  newBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(newBtn);
  ul.appendChild(li);

  input.focus();
};

btn.addEventListener("click", btnClick);
