import proxy from "./controller";
window.addEventListener("load", () => {
  window.slideOne();
  window.slideTwo();
});
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");

let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

window.slideOne = function slideOne(e) {
  let values = document.querySelector("#label-1");
  setBubble(sliderOne, values);
  fillColor();
  proxy.AddFilter("price", `${sliderTwo.value * 5}-${sliderOne.value * 5}`);
};
window.slideTwo = function slideTwo() {
  let values = document.querySelector("#label-2");
  setBubble(sliderTwo, values);

  fillColor();
  proxy.AddFilter("price", `${sliderTwo.value * 5}-${sliderOne.value * 5}`);
};
window.setBubble = function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = `$${val * 5}`;
  bubble.style.left = `calc(${newVal}% + (${10 - newVal * 0.2}px))`;
};

const buttonRiple = (event, color = "#fff6") => {
  ripple(event.currentTarget, event, 20, color);
};
window.buttonRiple = buttonRiple;
window.fillColor = function fillColor() {
  let percent1 = (sliderOne.value / sliderMaxValue) * 100;
  let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  if (percent2 < percent1) {
    let temp = percent1;
    percent1 = percent2;
    percent2 = temp;
  }
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
};
window.ripple = function ripple(parent, event, maxScale, color) {
  parent.style.position = "relative";
  parent.style.overflow = "hidden";
  const rect = parent.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.left = `${event.clientX - rect.x}px`;
  ripple.style.top = `${event.clientY - rect.y}px`;
  ripple.style.setProperty("--size", maxScale);
  ripple.style.setProperty("--color", color);
  const hasripple = parent.getElementsByClassName("ripple")[0];
  if (hasripple) {
    hasripple.remove();
  }
  parent.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 1200);
};
let accheads = document.querySelectorAll(".accordion-head");
for (const acchead of accheads) {
  acchead.addEventListener("click", (event) => {
    acchead.classList.toggle("active");
    acchead.nextSibling.nextSibling.classList.toggle("active");
    ripple(event.currentTarget, event, 100, "#ccc");
  });
}
let grids = document.querySelectorAll(".grid-item");
for (const grid of grids) {
  grid.addEventListener("click", (event) => {
    ripple(event.currentTarget, event, 20, "#fff");
    for (const grid of grids) {
      grid.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
  });
}
let menuLists = document.querySelectorAll(".menu-list");
const toggle = (qs) => {
  document.querySelector(qs).classList.toggle("active");
};
window.toggle = toggle;
for (const menuList of menuLists) {
  menuList.addEventListener("click", (event) => {
    for (const child of menuList.children) {
      child.classList.remove("active");
    }
    event.target.classList.add("active");
    if (event.currentTarget.hasAttribute("has-title")) {
      document.querySelector(
        event.currentTarget.getAttribute("has-title")
      ).innerText = event.target.innerText;
    }
  });
}

const slider = document.querySelector(".carousel-images");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.style.cursor = "grabbing";
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.style.cursor = "pointer";
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.style.cursor = "pointer";
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
