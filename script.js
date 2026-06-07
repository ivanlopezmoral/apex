/* ===================================== */
/* CURSOR PREMIUM */
/* ===================================== */

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

    cursor.style.left = `${currentX}px`;
    cursor.style.top = `${currentY}px`;

    requestAnimationFrame(animateCursor);

}

animateCursor();

/* ===================================== */
/* DARK MODE */
/* ===================================== */

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");
    themeToggle.innerHTML = "☀️";

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = "☀️";

    } else {

        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = "🌙";

    }

});

/* ===================================== */
/* SCROLL REVEAL */
/* ===================================== */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);

reveals.forEach((item) => {

    revealObserver.observe(item);

});

/* ===================================== */
/* CONTADORES */
/* ===================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target =
                parseInt(counter.dataset.target);

            let current = 0;

            const increment = target / 80;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.innerText =
                        Math.floor(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        });

    },

    {
        threshold: 0.5
    }

);

counters.forEach((counter) => {

    counterObserver.observe(counter);

});

/* ===================================== */
/* NAVBAR AL HACER SCROLL */
/* ===================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.transform =
            "translateX(-50%) scale(.98)";

        navbar.style.backdropFilter =
            "blur(30px)";

    } else {

        navbar.style.transform =
            "translateX(-50%) scale(1)";

    }

});

/* ===================================== */
/* SCROLL SUAVE */
/* ===================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

/* ===================================== */
/* EFECTO TILT EN CARDS */
/* ===================================== */

const cards = document.querySelectorAll(".sim-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 12;

        const rotateX =
            ((y / rect.height) - 0.5) * -12;

        card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
            `;

    });

});

/* ===================================== */
/* ANIMACIÓN HERO */
/* ===================================== */

const heroContent =
    document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    if (heroContent) {

        heroContent.style.transform =
            `translateY(${scroll * 0.15}px)`;

        heroContent.style.opacity =
            1 - (scroll / 900);

    }

});

/* ===================================== */
/* EFECTO BRILLO GLASS */
/* ===================================== */

const glassCards =
    document.querySelectorAll(".glass");

glassCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.background = `
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,.35),
        rgba(255,255,255,.08) 60%
        )
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "";

    });

});

/* ===================================== */
/* FORMULARIO DEMO */
/* ===================================== */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "¡Gracias por inscribirte en APEX!"
        );

    });

}
