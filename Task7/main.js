// Problem 1
let P1 = document.getElementById("Problem1");
P1.onmouseover = function () {
  P1.style.backgroundColor = "yellow";
  P1.style.fontWeight = "bold";
};

P1.onmouseleave = function () {
  P1.style.backgroundColor = "white";
  P1.style.fontWeight = "normal";
};

// Problem 2
let P2 = document.getElementById("Problem2");
let img = document.createElement("img");
img.src = "download.png";
P2.insertAdjacentElement("afterend", img);
img.style.marginTop = "20px";
img.style.display = "none";
P2.onchange = function () {
  if (P2.value === "palestine") {
    img.style.display = "block";
  } else img.style.display = "none";
};

// Problem 3
// Password
let Pass = document.getElementById("Pass");
Pass.style.width = "60px";
// Repeat password
let RepeatPass = document.getElementById("RepeatPass");
RepeatPass.style.width = "60px";
// Short message
let ShortMessage = document.createElement("span");
ShortMessage.innerHTML = "Too short";
ShortMessage.style.color = "red";
Pass.insertAdjacentElement("afterend", ShortMessage);
ShortMessage.style.display = "none";
// Not match message
let NotMatchMessage = document.createElement("span");
NotMatchMessage.innerHTML = "The Two Password dont match";
NotMatchMessage.style.color = "red";
RepeatPass.insertAdjacentElement("afterend", NotMatchMessage);
NotMatchMessage.style.display = "none";
// Submit tag
let CreateSubmit = document.createElement("input");
CreateSubmit.type = "submit";
NotMatchMessage.insertAdjacentElement("afterend", CreateSubmit);
CreateSubmit.style.display = "none";
// Check password
// weak solution
// Pass.oninput = function () {
//   if (Pass.value < 6) ShortMessage.style.display = "inline";
//   else ShortMessage.style.display = "none";
// };
Pass.addEventListener("input", function () {
  if (Pass.value.length < 6) ShortMessage.style.display = "inline";
  else ShortMessage.style.display = "none";
});

// Check password match
RepeatPass.addEventListener("input", function () {
  if (RepeatPass.value === Pass.value) {
    NotMatchMessage.style.display = "none";
    if (Pass.value.length >= 6) CreateSubmit.style.display = "block";
  } else {
    NotMatchMessage.style.display = "inline";
    CreateSubmit.style.display = "none";
  }
});

// Problem 4

let ParaghaphP4 = document.querySelectorAll(".BoxP4 p"); // return array
let HideBtnP4 = document.querySelectorAll(".BoxP4 a");
let H3P4 = document.querySelectorAll(".BoxP4 h3");
HideBtnP4.forEach((element) => {
  element.onclick = function (e) {
    // addEventListener("click", function (e) {
    e.preventDefault();
    if (element.textContent === "Hide") {
      element.previousElementSibling.style.display = "none";
      element.textContent = "Show";
      element.previousElementSibling.previousElementSibling.style.display =
        "inline-block";
      element.parentElement.style.backgroundColor = "#eee";

      // element.previousElementSibling.previousElementSibling.appendChild(
      //   element
      // );
    } else if (element.textContent === "Show") {
      this.previousElementSibling.style.display = "block";
      element.textContent = "Hide";
      element.previousElementSibling.previousElementSibling.style.display =
        "block";
      element.parentElement.style.backgroundColor = "#fff";
    }
  };
  // });
});
