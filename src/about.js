const toggleCard = (elem) => {
  const query = document.querySelector(elem);
  query.querySelector(".barco").classList.toggle("active");
  query.querySelector(".backdrop").classList.toggle("active");
  query.querySelector(".desc").classList.toggle("active");
};
window.toggleCard = toggleCard;
