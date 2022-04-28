const myFunction = (x) => {
  const bubbling = (e) => {
    const sidebar = document.querySelector(".sidebar");
    const toggler = document.querySelector(".fa-bars");
    const backdrop = document.querySelector(".backdrop");
    if (sidebar.classList.contains("active")) {
      if (!sidebar.contains(e.target) && !toggler.contains(e.target)) {
        sidebar.classList.remove("active");
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
let x = window.matchMedia("(max-width: 1520px)");
myFunction(x);
x.addEventListener("change", () => {
  myFunction(x);
});
