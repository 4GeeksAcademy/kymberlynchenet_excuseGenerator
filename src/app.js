/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //write your code here
  let who = ["The cat", "My sister", "The zombie", "My bird"];
  let action = ["ate", "hid", "crushed", "broke", "stole"];
  let what = ["my computer", "my phone", "the key", "the car"];
  let when = [
    "after the class",
    "when I was eating",
    "while I was sleeping",
    "during my dinner",
    "while I was laughing"
  ];

  function generatorExcuse() {
    let whoRandom = Math.floor(Math.random() * who.length);
    let actionRandom = Math.floor(Math.random() * action.length);
    let whatRandom = Math.floor(Math.random() * what.length);
    let whenRandom = Math.floor(Math.random() * when.length);

    let excuse =
      who[whoRandom] +
      " " +
      action[actionRandom] +
      " " +
      what[whatRandom] +
      " " +
      when[whenRandom];
    return excuse;
  }
  document.querySelector("#the_excuse").innerHTML = generatorExcuse();
};
