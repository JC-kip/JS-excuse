/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My Grandpa", "The weather", "A burglar"];
  let action = ["ate", "threw away", "broke", "stole"];
  let what = ["my homework", "my laptop", "the car"];
  let when = ["yesterday!", "this morning!", "last week!", "during my lunch!"];

  function selectArrayElement(arrayName, arrayLength) {
    let randomNumber = Math.floor(Math.random() * arrayLength);
    let selectedElement = arrayName[randomNumber];
    return selectedElement;
  }
  let randomWho = selectArrayElement(who, who.length);
  let randomAction = selectArrayElement(action, action.length);
  let randomWhat = selectArrayElement(what, what.length);
  let randomWhen = selectArrayElement(when, when.length);

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  const htmlElement = document.querySelector("#excuse");
  htmlElement.innerHTML = excuse;
};
