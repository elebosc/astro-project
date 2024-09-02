const mobileMenu = document.querySelector("#mobile-menu")
const mobileMenuBtn = document.querySelector("#mobile-menu-btn")
const langMenu = document.querySelector("#lang-menu")
const langMenuBtn = document.querySelector("#lang-menu-btn")

mobileMenuBtn.addEventListener("click", () => { mobileMenu.classList.toggle("hidden") })
langMenuBtn.addEventListener("click", () => { langMenu.classList.toggle("hidden") })