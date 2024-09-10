let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlides(step) {
    showSlide(currentSlide + step);
}

// Auto slide every 3 seconds
setInterval(() => {
    moveSlides(1);
}, 4000);

// Initialize the slider
showSlide(currentSlide);
