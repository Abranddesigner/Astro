// ===== Typing Animation for Banner =====
const bannerImages = document.querySelectorAll('#banner-slider img');
const bannerText = document.querySelector('#banner-slider .banner-text');
const bannerTexts = [
    `ASTROLOGY EXPERT - Love, Marriage, Family & Business Solutions`,
    `Love Marriage Specialist - All Life Problem Solutions`,
    `Husband Wife Dispute & Relationship Problem Solutions`
];
let bannerIndex = 0;
let charIndex = 0;
let typingInterval;

function typeText(text) {
    bannerText.textContent = text.substring(0, charIndex);
    charIndex++;
    if (charIndex > text.length) {
        clearInterval(typingInterval);
        setTimeout(changeBanner, 2000); // delay before next banner
    }
}

function changeBanner() {
    bannerImages[bannerIndex].classList.remove('active');
    bannerIndex = (bannerIndex + 1) % bannerImages.length;
    bannerImages[bannerIndex].classList.add('active');

    charIndex = 0;
    typingInterval = setInterval(() => typeText(bannerTexts[bannerIndex]), 50);
}

changeBanner(); // start first time

// ===== Scroll Animation for Boxes =====
const boxes = document.querySelectorAll('.box');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });
boxes.forEach(box => observer.observe(box));

// ===== Testimonial Slider =====
const testimonials = document.querySelectorAll('.testimonial');
let testimonialIndex = 0;
function changeTestimonial() {
    testimonials[testimonialIndex].classList.remove('active');
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    testimonials[testimonialIndex].classList.add('active');
}
setInterval(changeTestimonial, 5000);

// ===== Hamburger Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header-mid nav');
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// ===== Stats Counter Animation =====
const counters = document.querySelectorAll('.stat h3');
const speed = 200; // smaller = faster
const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const updateCount = () => {
                    const increment = Math.ceil(target / speed);
                    if (count < target) {
                        count += increment;
                        counter.textContent = count;
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.textContent = target;
                    }
                };
                updateCount();
            });
            observer.disconnect(); // run only once
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));
