/* ========================= */
/* CURSOR PERSONALIZADO */
/* ========================= */
/* ===================================== */Add a comment on line R1Add diff commentMarkdown input:  edit mode selected.WritePreviewHeadingBoldItalicQuoteCodeLinkUnordered listNumbered listTask listMentionReferenceMore Formatting tools items 0Saved repliesAdd FilesPaste, drop, or click to add filesCancelComment
/* CURSOR PREMIUM */
/* ===================================== */

const cursor = document.querySelector(".cursor");

@@ -11,223 +11,333 @@ let currentX = 0;
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
    cursor.style.left = `${currentX}px`;
    cursor.style.top = `${currentY}px`;

    requestAnimationFrame(animateCursor);

}

animateCursor();

/* ========================= */
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
/* ========================= */
/* ===================================== */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
const revealObserver = new IntersectionObserver(

    entries.forEach(entry => {
    (entries) => {

        if (entry.isIntersecting) {
        entries.forEach((entry) => {

            entry.target.classList.add("active");
            if (entry.isIntersecting) {

        }
                entry.target.classList.add("active");

    });
            }

}, {
    threshold: 0.15
});
        });

    },

    {
        threshold: 0.15
    }

);

reveals.forEach((item) => {

reveals.forEach(item => {
    revealObserver.observe(item);

});

/* ========================= */
/* ===================================== */
/* CONTADORES */
/* ========================= */
/* ===================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
const counterObserver = new IntersectionObserver(

    entries.forEach(entry => {
    (entries) => {

        if (!entry.isIntersecting) return;
        entries.forEach((entry) => {

        const counter = entry.target;
        const target = Number(counter.dataset.target);
            if (!entry.isIntersecting) return;

        let current = 0;
            const counter = entry.target;

        const increment = target / 80;
            const target =
                parseInt(counter.dataset.target);

        const updateCounter = () => {
            let current = 0;

            current += increment;
            const increment = target / 80;

            if (current < target) {
            const updateCounter = () => {

                counter.innerText = Math.floor(current);
                current += increment;

                requestAnimationFrame(updateCounter);
                if (current < target) {

            } else {
                    counter.innerText =
                        Math.floor(current);

                counter.innerText = target;
            }
                    requestAnimationFrame(updateCounter);

        };
                } else {

        updateCounter();
                    counter.innerText = target;

        counterObserver.unobserve(counter);
                }

    });
            };

}, {
    threshold: 0.5
});
            updateCounter();

            counterObserver.unobserve(counter);

        });

    },

    {
        threshold: 0.5
    }

);

counters.forEach((counter) => {

counters.forEach(counter => {
    counterObserver.observe(counter);

});

/* ========================= */
/* NAVBAR SCROLL */
/* ========================= */
/* ===================================== */
/* NAVBAR AL HACER SCROLL */
/* ===================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(10,10,15,.75)";
        navbar.style.backdropFilter = "blur(25px)";
        navbar.style.border = "1px solid rgba(255,255,255,.08)";
        navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,.3)";
        navbar.style.transform =
            "translateX(-50%) scale(.98)";

        navbar.style.backdropFilter =
            "blur(30px)";

    } else {

        navbar.style.background = "rgba(255,255,255,.05)";
        navbar.style.boxShadow = "none";
        navbar.style.transform =
            "translateX(-50%) scale(1)";

    }

});

/* ========================= */
/* PARALLAX HERO */
/* ========================= */
/* ===================================== */
/* SCROLL SUAVE */
/* ===================================== */

const hero = document.querySelector(".hero-content");
document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

window.addEventListener("scroll", () => {
        anchor.addEventListener("click", function (e) {

    const scroll = window.scrollY;
            e.preventDefault();

    hero.style.transform =
        `translateY(${scroll * 0.2}px)`;
            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

});
            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

/* ========================= */
/* BOTONES MAGNÉTICOS */
/* ========================= */
        });

const buttons = document.querySelectorAll(".cta");
    });

/* ===================================== */
/* EFECTO TILT EN CARDS */
/* ===================================== */

const cards = document.querySelectorAll(".sim-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

buttons.forEach(button => {
        const rect =
            card.getBoundingClientRect();

    button.addEventListener("mousemove", (e) => {
        const x =
            e.clientX - rect.left;

        const rect = button.getBoundingClientRect();
        const y =
            e.clientY - rect.top;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY =
            ((x / rect.width) - 0.5) * 12;

        const moveX = (x - rect.width / 2) / 6;
        const moveY = (y - rect.height / 2) / 6;
        const rotateX =
            ((y / rect.height) - 0.5) * -12;

        button.style.transform =
            `translate(${moveX}px, ${moveY}px)`;
        card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            `;

    });

    button.addEventListener("mouseleave", () => {
    card.addEventListener("mouseleave", () => {

        card.style.transform =
            `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
            `;

        button.style.transform =
            "translate(0px,0px)";
    });

});

/* ========================= */
/* ANIMACIÓN CARDS */
/* ========================= */
/* ===================================== */
/* ANIMACIÓN HERO */
/* ===================================== */

const cards = document.querySelectorAll(
    ".sim-card, .event, .card"
);
const heroContent =
    document.querySelector(".hero-content");

cards.forEach((card, index) => {
window.addEventListener("scroll", () => {

    card.style.transitionDelay =
        `${index * 100}ms`;
    const scroll = window.scrollY;

});
    if (heroContent) {

/* ========================= */
/* GLOW DINÁMICO */
/* ========================= */
        heroContent.style.transform =
            `translateY(${scroll * 0.15}px)`;

document.addEventListener("mousemove", (e) => {
        heroContent.style.opacity =
            1 - (scroll / 900);

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    }

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
/* ===================================== */
/* EFECTO BRILLO GLASS */
/* ===================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
const glassCards =
    document.querySelectorAll(".glass");

    anchor.addEventListener("click", function (e) {
glassCards.forEach(card => {

        e.preventDefault();
    card.addEventListener("mousemove", (e) => {

        const target = document.querySelector(
            this.getAttribute("href")
        );
        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        if (target) {
        const y =
            e.clientY - rect.top;

            target.scrollIntoView({
                behavior: "smooth"
            });
        card.style.background = `
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,.35),
        rgba(255,255,255,.08) 60%
        )
        `;

        }
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
