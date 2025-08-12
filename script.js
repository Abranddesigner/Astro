// ===== Banner Slider =====
const bannerImages = document.querySelectorAll('#banner-slider img');
const bannerText = document.querySelector('#banner-slider .banner-text');
const bannerTexts = [
    `<h2>ASTROLOGY EXPERT</h2>
     <p>Love Problem Solution Expert<br>
     Love Marriage, Family, Breakup, Business, Money Problems</p>
     <a href="tel:8290465859" class="btn call-btn">Call Now</a>
     <a href="https://wa.me/918290465859" target="_blank" class="btn whatsapp-btn">WhatsApp</a>`,

    `<h2>ASTROLOGY EXPERT</h2>
     <p>Love Marriage Specialist<br>
     Love Marriage, Family, Breakup, Business, Money Problems</p>
     <a href="tel:8290465859" class="btn call-btn">Call Now</a>
     <a href="https://wa.me/918290465859" target="_blank" class="btn whatsapp-btn">WhatsApp</a>`,

    `<h2>ASTROLOGY EXPERT</h2>
     <p>Husband Wife Dispute Solution<br>
     Love Marriage, Family, Breakup, Business, Money Problems</p>
     <a href="tel:8290465859" class="btn call-btn">Call Now</a>
     <a href="https://wa.me/918290465859" target="_blank" class="btn whatsapp-btn">WhatsApp</a>`
];
let bannerIndex = 0;

function changeBanner() {
    bannerImages[bannerIndex].classList.remove('active');
    bannerIndex = (bannerIndex + 1) % bannerImages.length;
    bannerImages[bannerIndex].classList.add('active');
    bannerText.classList.remove('fade-in');
    void bannerText.offsetWidth; // reflow
    bannerText.innerHTML = bannerTexts[bannerIndex];
    bannerText.classList.add('fade-in');
}
setInterval(changeBanner, 5000);

// ===== Typing Animation for Top Header Slide Text =====
function typingEffect(element, text, speed = 100) {
    let i = 0;
    element.textContent = "";
    function typeChar() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        } else {
            setTimeout(() => typingEffect(element, text, speed), 3000);
        }
    }
    typeChar();
}
const slideTextEl = document.querySelector('.header-top .slide-text');
if (slideTextEl) {
    typingEffect(slideTextEl, slideTextEl.textContent.trim(), 80);
}

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
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// ===== Stats Counting Animation =====
const counters = document.querySelectorAll('.count');
let statsStarted = false;

function countUp(counter) {
    const target = +counter.getAttribute('data-target');
    const speed = target / 200;
    let count = 0;
    const updateCount = () => {
        count += speed;
        if (count < target) {
            counter.textContent = Math.ceil(count);
            requestAnimationFrame(updateCount);
        } else {
            counter.textContent = target;
        }
    };
    updateCount();
}

const statsSection = document.querySelector('.stats-banner');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !statsStarted) {
            statsStarted = true;
            counters.forEach(countUp);
        }
    }, { threshold: 0.4 });
    statsObserver.observe(statsSection);
}

