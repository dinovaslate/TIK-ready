const myFunction = (x) => {
  const bubbling = (e) => {
    const lookout = document.querySelector(".look-out");
    const toggler = document.querySelector(".card");
    const backdrop = document.querySelector(".beta");
    if (lookout.classList.contains("active")) {
      if (!lookout.contains(e.target) && !toggler.contains(e.target)) {
        lookout.classList.remove("active");
        backdrop.classList.remove("active");
      }
    }
  };
  if (x.matches) {
    document.addEventListener("click", bubbling);
  } else {
    document.removeEventListener("click", bubbling);
  }
};
let y = window.matchMedia("(max-width: 1035px)");
myFunction(y);
y.addEventListener("change", () => {
  myFunction(y);
});
