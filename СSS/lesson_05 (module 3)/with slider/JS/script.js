document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.adv__list_slider');
    const slides = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.slider-btn_prev');
    const nextButton = document.querySelector('.slider-btn_next');
    let currentIndex = 0;
    const maxIndex = 3; 

    function updateSlider() {
        const translateX = -currentIndex * 100;
        slider.style.transform = `translateX(${translateX}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        if (currentIndex < 0) currentIndex = maxIndex;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % (maxIndex + 1);
        updateSlider();
    });

    updateSlider();
});
