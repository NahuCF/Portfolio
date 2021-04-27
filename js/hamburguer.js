const hamburguerBtn = document.querySelector(".hamburger-button");
const middleNav = document.querySelector(".middle-nav-container")

hamburguerBtn.addEventListener("click", () =>
{
    hamburguerBtn.classList.toggle("hamburguer-button--active");
    middleNav.classList.toggle("middle-nav-container--active");
});
