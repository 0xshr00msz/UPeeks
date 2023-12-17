const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slides");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let slideIndex = 0;

slides[slideIndex].classList.add('active');
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

function prevSlide(){
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
    slides[slideIndex].classList.add('active');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide(){
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
    slides[slideIndex].classList.add('active');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}