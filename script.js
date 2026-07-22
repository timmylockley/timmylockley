document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Menu Burger Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // 2. Highlight Active Page in Navigation
    const currentLocation = location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(item => {
        const linkPath = item.getAttribute('href');
        // Set active if it matches, or if we are on the root domain and it's the index page
        if (linkPath === currentLocation || (currentLocation === "" && linkPath === "index.html")) {
            item.classList.add('active');
        }
    });

    // 3. Contact Form Submission (Mockup)
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            btn.textContent = "Sending...";
            
            setTimeout(() => {
                alert("Message received! We will be in touch shortly.");
                contactForm.reset();
                btn.textContent = "Send Message";
            }, 1000);
        });
    }
});
