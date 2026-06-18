document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // ENQUIRY FORM VALIDATION
    // ==========================
    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (e) {

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const wigType = document.getElementById("wig-type").value;
            const message = document.getElementById("message").value.trim();

            if (!name) {
                alert("Please enter your name.");
                return e.preventDefault();
            }

            if (!email) {
                alert("Please enter your email address.");
                return e.preventDefault();
            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return e.preventDefault();
            }

            if (!wigType) {
                alert("Please select a wig type.");
                return e.preventDefault();
            }

            if (!message) {
                alert("Please enter your enquiry message.");
                return e.preventDefault();
            }
        });
    }

    // ==========================
    // CONTACT FORM VALIDATION
    // ==========================
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {

            const name =
                contactForm.querySelector('input[name="name"]').value.trim();

            const email =
                contactForm.querySelector('input[name="email"]').value.trim();

            const message =
                contactForm.querySelector('textarea[name="message"]').value.trim();

            if (!name) {
                alert("Please enter your full name.");
                return e.preventDefault();
            }

            if (!email) {
                alert("Please enter your email address.");
                return e.preventDefault();
            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return e.preventDefault();
            }

            if (!message) {
                alert("Please enter your message.");
                return e.preventDefault();
            }

            alert("Thank you! Your message has been sent.");
        });
    }

});
