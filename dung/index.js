// Select element: document.querySelector();
const h1El = document.querySelector("#text>h1");
h1El = 1;
const divEl = h1El.parentElement;
const name = "Quan";
divEl.insertAdjacentHTML("beforeend", `
  <h2>${name}</h2>
  <h3>World</h3>
`)

let clickCount = 0;
const button = document.querySelector("#test");
const spanEl = button.nextElementSibling.lastElementChild;
console.log({spanEl});
button.addEventListener("click", function() {
  // Phan code nay se chay khi ma click vao button
  clickCount = clickCount + 1;
  spanEl.innerHTML = clickCount;
});

const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  const posY = window.scrollY;
  if (posY >= 204) {
    nav.style.backgroundColor = "red";
    nav.style.color = "white";
  } else {
    nav.style.color = "red";
    nav.style.backgroundColor = "white";
  }
});
