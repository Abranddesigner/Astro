// ===== Banner Slider =====
const bannerImages = document.querySelectorAll('#banner-slider img');
const bannerText = document.querySelector('#banner-slider .banner-text');
const bannerTexts = [
    `<h2>ASTROLOGY EXPERT</h2>
     <p>Love Problem Solution Expert<br>
     Marriage Problems, Husband-Wife Problems, Extra Affair Problems, Foreign Trip Problems, Business Problems, Money Problems</p>
     <a href="tel:8290465859" class="btn call-btn">Call Now</a>
     <a href="https://wa.me/918290465859" target="_blank" class="btn whatsapp-btn">WhatsApp</a>`,

    `<h2>ASTROLOGY EXPERT</h2>
     <p>Love Marriage Specialist<br>
     Marriage Problems, Husband-Wife Problems, Extra Affair Problems, Foreign Trip Problems, Business Problems, Money Problems</p>
     <a href="tel:8290465859" class="btn call-btn">Call Now</a>
     <a href="https://wa.me/918290465859" target="_blank" class="btn whatsapp-btn">WhatsApp</a>`,

    `<h2>ASTROLOGY EXPERT</h2>
     <p>Husband Wife Dispute Solution<br>
     Marriage Problems, Husband-Wife Problems, Extra Affair Problems, Foreign Trip Problems, Business Problems, Money Problems</p>
     <a href="tel:8290465859" class="btn call-btn">Call Now</a>
     <a href="https://wa.me/918290465859" target="_blank" class="btn whatsapp-btn">WhatsApp</a>`
];
let bannerIndex = 0;

function changeBanner() {
    bannerImages[bannerIndex].classList.remove('active');
    bannerIndex = (bannerIndex + 1) % bannerImages.length;
    bannerImages[bannerIndex].classList.add('active');

    bannerText.classList.remove('fade-in');
    void bannerText.offsetWidth; // reflow for animation restart
    bannerText.innerHTML = bannerTexts[bannerIndex];
    bannerText.classList.add('fade-in');
}

setInterval(changeBanner, 5000);

// ===== Scroll Animation for Boxes =====
const boxes = document.querySelectorAll('.box');
const boxObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

boxes.forEach(box => boxObserver.observe(box));

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

const runCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const speed = 50;
    let count = 0;

    const updateCount = () => {
        const increment = Math.ceil(target / speed);
        if (count < target) {
            count += increment;
            counter.innerText = count;
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            runCounter(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    statsObserver.observe(counter);
});

