// Banner Slider
const bannerImages = document.querySelectorAll('#banner-slider img');
const bannerText = document.querySelector('#banner-slider .banner-text');
const bannerTexts = [
    `<h2>ASTROLOGY EXPERT</h2><p>Love Problem Solution Expert<br>Wedding Problems, Desired Love, Family Problems, Marriage Problems, Husband-Wife Problems, Extra Affair Problems, Foreign Trip Problems, Love Breakup Problems, Love Marriage, Business Problems, Money Problems</p><a href="tel:6350262865" class="btn call-btn">Call Now</a><a href="https://wa.me/6350262865" class="btn whatsapp-btn">WhatsApp</a>`,
    `<h2>ASTROLOGY EXPERT</h2><p>Love Marriage Specialist<br>Wedding Problems, Desired Love, Family Problems, Marriage Problems, Husband-Wife Problems, Extra Affair Problems, Foreign Trip Problems, Love Breakup Problems, Love Marriage, Business Problems, Money Problems</p><a href="tel:6350262865" class="btn call-btn">Call Now</a><a href="https://wa.me/6350262865" class="btn whatsapp-btn">WhatsApp</a>`,
    `<h2>ASTROLOGY EXPERT</h2><p>Husband Wife Dispute Solution<br>Wedding Problems, Desired Love, Family Problems, Marriage Problems, Husband-Wife Problems, Extra Affair Problems, Foreign Trip Problems, Love Breakup Problems, Love Marriage, Business Problems, Money Problems</p><a href="tel:6350262865" class="btn call-btn">Call Now</a><a href="https://wa.me/6350262865" class="btn whatsapp-btn">WhatsApp</a>`
];
let bannerIndex = 0;

function changeBanner() {
    bannerImages[bannerIndex].classList.remove('active');
    bannerIndex = (bannerIndex + 1) % bannerImages.length;
    bannerImages[bannerIndex].classList.add('active');
    bannerText.innerHTML = bannerTexts[bannerIndex];
}

setInterval(changeBanner, 5000);

// Scroll Animation for Boxes
const boxes = document.querySelectorAll('.box');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

boxes.forEach(box => observer.observe(box));

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
let testimonialIndex = 0;

function changeTestimonial() {
    testimonials[testimonialIndex].classList.remove('active');
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    testimonials[testimonialIndex].classList.add('active');
}

setInterval(changeTestimonial, 5000);
