const hamburgerBtn = document.querySelector(".hamburger-button");
const middleNav = document.querySelector(".middle-nav-container")

hamburgerBtn.addEventListener("click", () =>
{
    hamburgerBtn.classList.toggle("hamburger-button--active");
    middleNav.classList.toggle("middle-nav-container--active");
});
