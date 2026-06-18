ocument.addEventListener("DOMContentLoaded", function () {

    // =========================
    // 1. MOBILE MENU TOGGLE
    // =========================
    const navContainer = document.querySelector(".nav-container");
    const navLinks = document.querySelector(".nav-links");

    if (navContainer && navLinks) {
        const hamburger = document.createElement("div");
        hamburger.classList.add("hamburger");
        hamburger.innerHTML = "☰";
        navContainer.prepend(hamburger);

        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("open");
        });
    }

    // =========================
    // 2. ACTIVE LINK HIGHLIGHT
    // =========================
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    // =========================
    // 3. PRODUCT FILTER (products.html)
    // =========================
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".product-card");

    if (filterButtons.length > 0 && productCards.length > 0) {

        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {

                // remove active class
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const filter = btn.textContent.toLowerCase();

                productCards.forEach(card => {
                    const type = card.querySelector(".product-type")?.textContent.toLowerCase();

                    if (filter === "all wigs") {
                        card.style.display = "block";
                    }
                    else if (type && type.includes(filter.split(" ")[0])) {
                        card.style.display = "block";
                    }
                    else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }

    // =========================
    // 4. CONTACT FORM HANDLING
    // =========================
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector("button[type='submit']");
            const originalText = submitBtn.textContent;

            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            setTimeout(() => {
                alert("Message sent successfully! We will get back to you soon.");
                contactForm.reset();

                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1200);
        });
    }

    // =========================
    // 5. SMOOTH SCROLL (optional UX improvement)
    // =========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});
