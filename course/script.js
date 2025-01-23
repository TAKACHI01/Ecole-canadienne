// JavaScript to toggle the sliding text visibility for About section
document.querySelectorAll('.toggle-content').forEach(button => {
    button.addEventListener('click', function () {
        const text = this.nextElementSibling; // The hidden-text div
        text.classList.toggle('show');
        // Rotate the button on click
        this.classList.toggle('active');
    });
});
// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    hamburger.classList.toggle('active');
});

// Close the menu when clicking outside
window.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('show');
        hamburger.classList.remove('active');
    }
});

// Smooth Scroll for Buttons
document.querySelectorAll('.btn-scroll').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const targetSection = document.querySelector(targetID);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Modal Functionality for Course Details
const modal = document.getElementById('courseModal');
const closeButton = document.querySelector('.close-button');

// Open modal when clicking on a course card
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

// Close modal when clicking the close button
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// Additional Animations on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate__animated').forEach(element => {
    observer.observe(element);
});

// Enhance Testimonials Slider with Auto Scroll
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

function showNextTestimonial() {
    testimonials[testimonialIndex].classList.remove('active');
    testimonialIndex = (testimonialIndex + 1) % totalTestimonials;
    testimonials[testimonialIndex].classList.add('active');
}

setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds

// Initialize first testimonial
testimonials[testimonialIndex].classList.add('active');

// Add active class styling in CSS
// .testimonial-card.active {
//     transform: scale(1.05);
//     box-shadow: 0 8px 16px rgba(0,0,0,0.3);
// }
