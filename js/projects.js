const btnAnimeTorrents = document.querySelectorAll("#anime-torrents"),
      animeTorrents = document.querySelector(".single-container-animetorrents"),
      btnPortfolio = document.querySelectorAll("#porfolio"),
      portfolio = document.querySelector(".single-container-portfolio"),
      btnUserApi = document.querySelectorAll("#user-api"),
      userApi = document.querySelector(".single-container-userApi");

btnAnimeTorrents.forEach(btn =>
{
    btn.addEventListener("click", () =>
    {
        animeTorrents.classList.toggle("single-container-animetorrents--active");
    });
});

btnPortfolio.forEach(btn =>
{
    btn.addEventListener("click", () =>
    {
        portfolio.classList.toggle("single-container-porfolio--active");
    });
});

btnUserApi.forEach(btn =>
    {
        btn.addEventListener("click", () =>
        {
            userApi.classList.toggle("single-container-userApi--active");
        });
    });
    

