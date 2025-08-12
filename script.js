// ===== Typing Animation for Banner with Buttons =====
const bannerImages = document.querySelectorAll('#banner-slider img');
const bannerText = document.querySelector('#banner-slider .banner-text');
const bannerTexts = [
    `<h2>ASTROLOGY EXPERT</h2>
     <p>Love, Marriage, Family & Business Solutions</p>
     <a href="tel:8290465859" class="btn call-btn">Call Now</a>
     <a href="https://wa.me/918290465859" target="_blank" class="btn whatsapp-btn">WhatsApp</a>`,

    `<h2>Love Marriage Specialist</h2>
     <p>All Types of Life Problem Solutions</p>
     <a href="tel:8290465859" class="btn call-btn">Call Now</a>
     <a href="https://wa.me/918290465859" target="_blank" class="btn whatsapp-btn">WhatsApp</a>`,

    `<h2>Husband Wife Dispute Solution</h2>
     <p>Relationship & Family Problem Solutions</p>
     <a href="tel:8290465859" class="btn call-btn">Call Now</a>
     <a href="https://wa.me/918290465859" target="_blank" class="btn whatsapp-btn">WhatsApp</a>`
];
let bannerIndex = 0;
let charIndex = 0;
let typingInterval;

function typeText(text) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;
    const fullText = tempDiv.innerHTML;
    bannerText.innerHTML = fullText.substring(0, charIndex);
    charIndex++;
    if (charIndex > fullText.length) {
        clearInterval(typingInterval);
        setTimeout(changeBanner, 2000);
    }
}

function changeBanner() {
    bannerImages[bannerIndex].classList.remove('active');
    bannerIndex = (bannerIndex + 1) % bannerImages.length;
    bannerImages[bannerIndex].classList.add('active');

    charIndex = 0;
    typingInterval = setInterval(() => typeText(bannerTexts[bannerIndex]), 30);
}

changeBanner();

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
const speed = 200;
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
            observer.disconnect();
        }
    });
}, { threshold: 0.5 });
counters.forEach(counter => counterObserver.observe(counter));
