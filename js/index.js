var inlineWordContainer = document.querySelectorAll(".inline-word-container"),
    inlineWordChildren = document.querySelectorAll(".inline-word > div");

inlineWordContainer.forEach(function(container)
{
    container.addEventListener("mouseenter", function()
    {
        container.classList.add("inline-word-container--active");;

        inlineWordChildren.forEach(function(children)
        {
            setTimeout(function()
            {
                container.classList.remove("inline-word-container--active");
            }, 2000);
        });
    });
});