let nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
});

let navbarLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");

navbarLinks.forEach(link => {
    link.addEventListener("click", () => {
        navCollapse.classList.remove("show");
    });
});

let changeModeBtn = document.querySelector("#mode");
let body = document.body;

let currentMode = localStorage.getItem("theme") || "white";
applyTheme(currentMode);

changeModeBtn.addEventListener("click", () => {
    currentMode = currentMode === "white" ? "black" : "white";
    applyTheme(currentMode);
    localStorage.setItem("theme", currentMode);
});

function applyTheme(mode) {
    if (mode === "black") {
        body.classList.add("black");
        body.classList.remove("white");
    } else {
        body.classList.add("white");
        body.classList.remove("black");
    }
}

