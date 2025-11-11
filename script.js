const myCarousel = document.querySelector('#carouselTorino');
const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    ride: 'carousel'
});

// MENU HAMBURGUESA
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".toggle").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.target);
        target.classList.toggle("oculto");
    });
});
