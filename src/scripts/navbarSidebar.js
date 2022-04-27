const toggle = (qs) => {
    document.querySelector(qs).classList.toggle("active");
  };
  window.toggle = toggle;
  
  let collapse = document.querySelector(".collapse");
  collapse.addEventListener("click", (event) => {
    collapse.classList.toggle("active");
    collapse.nextSibling.nextSibling.classList.toggle("active");
  });
  let accheads = document.querySelectorAll(".accordion-head");
  for (const acchead of accheads) {
    acchead.addEventListener("click", (event) => {
      ripple(event.currentTarget, event, 100, "#ccc");
    });
  }
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
  const buttonRiple = (event, color = "#fff6") => {
    ripple(event.currentTarget, event, 20, color);
  };
  window.buttonRiple = buttonRiple;
  
  const lis = document.querySelectorAll("li");
  for (const li of lis) {
    li.addEventListener("click", (e) => {
      buttonRiple(e, "#ccc");
    });
  }
  