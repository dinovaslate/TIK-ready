const lookout = document.querySelector(".look-out");
const backdrop = document.querySelector(".beta");
const bubbling = (e) => {
  if (!lookout.contains(e.target)) {
    lookout.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.classList.remove("active");
    removeListener();
  }
};
const isOn = () => {
  if (lookout.classList.contains("active")) {
    document.addEventListener("click", bubbling);
  }
};
const removeListener = () => {
  document.removeEventListener("click", bubbling);
};
const myFunction = (x) => {
  if (x.matches) {
    document.addEventListener("click", isOn);
  } else {
    document.removeEventListener("click", isOn);
  }
};
let y = window.matchMedia("(max-width: 1035px)");
myFunction(y);
y.addEventListener("change", () => {
  myFunction(y);
});
