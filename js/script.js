const menuButtons = document.querySelector("#header-buttons__menu");
const sideBar = document.querySelector("aside");

menuButtons.addEventListener("click", () => {
  sideBar.classList.toggle("disabled");
});
