let currentSlide = 0;
const intervalTime = 3000;

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function showSlide(index) {
    const slides = document.querySelector('.slider-inner');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    currentSlide = index;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, intervalTime);