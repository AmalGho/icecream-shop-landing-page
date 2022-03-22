const toggleBtn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".menu-container");
const i = document.querySelector(".fa-bars");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    i.classList.toggle("fa-times");
});