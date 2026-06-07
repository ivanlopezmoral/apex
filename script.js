/* ========================= */
/* CURSOR PERSONALIZADO */
/* ========================= */

const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {

    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();

/* ========================= */
/* SCROLL REVEAL */
/* ========================= */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: 0.15
});

reveals.forEach(item => {
    revealObserver.observe(item);
});

/* ========================= */
/* CONTADORES */
/* ========================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 80;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;
            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ========================= */
/* NAVBAR SCROLL */
/* ========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(10,10,15,.75)";
        navbar.style.backdropFilter = "blur(25px)";
        navbar.style.border = "1px solid rgba(255,255,255,.08)";
        navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,.3)";

    } else {

        navbar.style.background = "rgba(255,255,255,.05)";
        navbar.style.boxShadow = "none";
    }

});

/* ========================= */
/* PARALLAX HERO */
/* ========================= */

const hero = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    hero.style.transform =
        `translateY(${scroll * 0.2}px)`;

});

/* ========================= */
/* BOTONES MAGNÉTICOS */
/* ========================= */

const buttons = document.querySelectorAll(".cta");

buttons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) / 6;
        const moveY = (y - rect.height / 2) / 6;

        button.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0px,0px)";
    });

});

/* ========================= */
/* ANIMACIÓN CARDS */
/* ========================= */

const cards = document.querySelectorAll(
    ".sim-card, .event, .card"
);

cards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 100}ms`;

});

/* ========================= */
/* GLOW DINÁMICO */
/* ========================= */

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.body.style.background = `
    radial-gradient(
    circle at ${x * 100}% ${y * 100}%,
    rgba(139,92,246,.12),
    #050507 40%
    )
    `;
});

/* ========================= */
/* SCROLL SUAVE LINKS */
/* ========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
