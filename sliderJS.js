// переменные

const slider = document.querySelector('.main-div-slider');
const sliderImages = document.querySelectorAll('.main-img-slider');
const sliderLine = document.querySelector('.main-div-slider-line');
const lineDots = document.querySelector('.main-div-dots');
const dotActive = document.querySelector('.main-dot-active');

const firstDot = document.querySelector('.dot-first-banner');
const secondDot = document.querySelector('.dot-second-banner');
const thirdDot = document.querySelector('.dot-third-banner');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

let dotCount = 0;
let dotWidth = 22;

// клик на точки

firstDot.addEventListener('click', goFirstBanner);
secondDot.addEventListener('click', goSecondBanner);
thirdDot.addEventListener('click', goThirdBanner);

// переключение точками

function goFirstBanner() {
    if (firstDot && dotCount == 1) {
        dotCount = 0;
        sliderCount = 0;
    }

    if (firstDot && dotCount == 2) {
        dotCount = 0;
        sliderCount = 0;
    }

    rollDot();
    rollSlider();
}

function goSecondBanner() {
    if (secondDot && dotCount == 0) {
        dotCount = 1;
        sliderCount = 1;
    }

    if (secondDot && dotCount == 2) {
        dotCount = 1;
        sliderCount = 1;
    }

    rollDot();
    rollSlider();
}

function goThirdBanner() {
    if (thirdDot && dotCount == 0) {
        dotCount = 2;
        sliderCount = 2;
    }

    if (thirdDot && dotCount == 1) {
        dotCount = 2;
        sliderCount = 2;
    }

    rollDot();
    rollSlider();
}

// перелистывание

function nextSlide() {
    sliderCount++;

    if(sliderCount >= sliderImages.length) {
        sliderCount = 0;
    };

    rollSlider();
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function nextDot() {
    dotCount++;

    if(dotCount >= 3) {
        dotCount = 0;
    };

    rollDot();
}

function rollDot() {
    dotActive.style.transform = `translateX(${dotCount * dotWidth}px)`;
}

// автопролистывание 

setInterval(() => {
    nextDot()
}, 5000);

setInterval(() => {
    nextSlide()
}, 5000);