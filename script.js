// JavaScript to toggle the sliding text visibility
document.querySelectorAll('.toggle-content').forEach(button => {
    button.addEventListener('click', function () {
        const text = this.nextElementSibling; // The hidden-text div
        text.classList.toggle('show');
    });
});

// JavaScript to handle the sliding text
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slider p span");
    let current = 0;
    const total = slides.length;
    const intervalTime = 3000; // 3 seconds
    let slideInterval;

    // Function to show the next slide
    const showNextSlide = () => {
        // Remove 'active' from the current slide
        slides[current].classList.remove("active");

        // Calculate the next slide index
        current = (current + 1) % total;

        // Add 'active' to the next slide
        slides[current].classList.add("active");
    };

    // Initialize the first slide
    slides[current].classList.add("active");

    // Start the slider interval
    slideInterval = setInterval(showNextSlide, intervalTime);

    // Optional: Pause slider on mouse enter and resume on mouse leave
    const slider = document.querySelector(".slider");
    slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
    slider.addEventListener("mouseleave", () => {
        slideInterval = setInterval(showNextSlide, intervalTime);
    });

    // Back-to-Top Button Functionality
    const backToTopButton = document.getElementById('back-to-top');

    // Show the button after scrolling down 300px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Scroll smoothly to the top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // JavaScript for Scroll-Triggered Animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.getAttribute('data-animate');

                // Determine which animation class to add based on data-animate
                switch(animationType) {
                    case 'fade-in':
                        element.classList.add('animate-fade-in');
                        break;
                    case 'slide-up':
                        element.classList.add('animate-slide-up');
                        break;
                    case 'slide-right':
                        element.classList.add('animate-slide-right');
                        break;
                    case 'slide-left':
                        element.classList.add('animate-slide-left');
                        break;
                    case 'zoom-in':
                        element.classList.add('animate-zoom-in');
                        break;
                    case 'flip-in':
                        element.classList.add('animate-flip-in');
                        break;
                    case 'bounce-in':
                        element.classList.add('animate-bounce-in');
                        break;
                    case 'rotate-in':
                        element.classList.add('animate-rotate-in');
                        break;
                    default:
                        element.classList.add('animate-fade-in');
                }

                // Optionally unobserve the element after animation
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Testimonials Slider Functionality (optional enhancement)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonialSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        testimonialSlider.classList.add('active');
        startX = e.pageX - testimonialSlider.offsetLeft;
        scrollLeft = testimonialSlider.scrollLeft;
    });

    testimonialSlider.addEventListener('mouseleave', () => {
        isDown = false;
        testimonialSlider.classList.remove('active');
    });

    testimonialSlider.addEventListener('mouseup', () => {
        isDown = false;
        testimonialSlider.classList.remove('active');
    });

    testimonialSlider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonialSlider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        testimonialSlider.scrollLeft = scrollLeft - walk;
    });

    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simple form validation (can be enhanced)
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if(name && email && message) {
            // Here you would typically send the form data to the server
            // For demonstration, we'll just display a success message
            formMessage.textContent = "Merci pour votre message! Nous vous répondrons bientôt.";
            formMessage.style.color = "green";
            contactForm.reset();
        } else {
            formMessage.textContent = "Veuillez remplir tous les champs.";
            formMessage.style.color = "red";
        }
    });

    // Newsletter Subscription Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterMessage = document.getElementById('newsletter-message');

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newsletterEmail = document.getElementById('newsletter-email').value.trim();

        if(newsletterEmail) {
            // Here you would typically add the email to your mailing list
            // For demonstration, we'll just display a success message
            newsletterMessage.textContent = "Merci pour votre abonnement à la newsletter!";
            newsletterMessage.style.color = "green";
            newsletterForm.reset();
        } else {
            newsletterMessage.textContent = "Veuillez entrer un email valide.";
            newsletterMessage.style.color = "red";
        }
    });
});
