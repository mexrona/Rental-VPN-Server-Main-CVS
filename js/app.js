/*
1. Fixed Header
2. Logo Scroll
3. Nav Links Active
4. Burger
*/



/* 1. Fixed Header */
const header = document.querySelector("#header");


window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;


    if (scrollPos > 0) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});



/* 2. Logo Scroll */
const logo = document.querySelector("#logo");
const links = document.querySelectorAll(".nav__link");


logo.addEventListener("click", event => {
    event.preventDefault();


    links.forEach(link => {
        link.classList.remove("active");
    });


    window.scrollTo(0, 0);
});



/* 3. Nav Links Active */
links.forEach(link => {
    link.addEventListener("click", () => {


        links.forEach(link => {
            link.classList.remove("active");
        });

        link.classList.add("active");


    });
});



/* 4. Burger */
const nav = document.querySelector("#nav");
const burger = document.querySelector("#burger");


burger.addEventListener("click", () => {
    if (!nav.classList.contains("active")) {
        nav.classList.add("active");
        burger.classList.add("active");
    } else {
        nav.classList.remove("active");
        burger.classList.remove("active");
    }
});
