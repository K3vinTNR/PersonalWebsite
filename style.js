document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            if (link.href && link.href.includes(".html")) {
                e.preventDefault(); 
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = link.href;
                }, 500); 
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");
    const contactInfo = document.querySelector(".contact-info");

    if (contactForm) {
        contactForm.style.opacity = "0";
        contactForm.style.transform = "translateY(20px)";
        setTimeout(() => {
            contactForm.style.transition = "opacity 1s ease, transform 1s ease";
            contactForm.style.opacity = "1";
            contactForm.style.transform = "translateY(0)";
        }, 100);
    }

    if (contactInfo) {
        contactInfo.style.opacity = "0";
        contactInfo.style.transform = "translateY(20px)";
        setTimeout(() => {
            contactInfo.style.transition = "opacity 1.5s ease, transform 1.5s ease";
            contactInfo.style.opacity = "1";
            contactInfo.style.transform = "translateY(0)";
        }, 300);
    }

    const submitButton = document.querySelector(".btn-primary");
    if (submitButton) {
        submitButton.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
        });
        submitButton.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
        submitButton.addEventListener("click", function (e) {
            e.preventDefault(); 
            alert("Terima kasih! Pesan Anda telah terkirim."); 
        });
    }
    
});