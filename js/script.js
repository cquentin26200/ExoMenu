const active = document.querySelector(".active");
const menu = document.querySelector(".menu");

active.addEventListener("click", () => {
    if (menu.classList.contains("hide")) {
        menu.classList.replace("hide", ["show"]);
    } else {
        menu.classList.replace("show", ["hide"]);
    }
})

