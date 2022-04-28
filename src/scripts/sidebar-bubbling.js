document.addEventListener("click", (e) => {
  const sidebar = document.querySelector(".sidebar");
  const toggler = document.querySelector(".fa-bars");
  const backdrop = document.querySelector(".backdrop");
  if (sidebar.classList.contains("active")) {
    if (!sidebar.contains(e.target) && !toggler.contains(e.target)) {
      sidebar.classList.remove("active");
      backdrop.classList.remove("active");
    }
  }
});
