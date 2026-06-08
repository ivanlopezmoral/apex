/* ============================= */
/* DARK MODE */
/* ============================= */

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

/* ============================= */
/* SCROLL REVEAL */
/* ============================= */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

reveals.forEach(item => {
    revealObserver.observe(item);
});

/* ============================= */
/* CONTADORES */
/* ============================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = parseInt(counter.dataset.target);

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

    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ============================= */
/* NAVBAR */
/* ============================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.transform =
            "translateX(-50%) scale(.98)";

    } else {

        navbar.style.transform =
            "translateX(-50%) scale(1)";

    }

});

/* ============================= */
/* FORMULARIO DEMO */
/* ============================= */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("¡Gracias por inscribirte en APEX!");

    });

}
