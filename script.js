const slide = document.querySelector('.img-slide');
const nextBtn = document.querySelector('.arrow-right');
const prevBtn = document.querySelector('.arrow-left');

let counter = 0;

nextBtn.addEventListener('click', () => {
    // Ek item ki width + gap calculate karna
    const itemWidth = document.querySelector('.img-item').clientWidth + 20;
    const maxScroll = slide.scrollWidth - slide.parentElement.clientWidth;

    if (counter < maxScroll) {
        counter += itemWidth;
        // Agar counter limit se bahar jaye to usay max par rok dein
        if (counter > maxScroll) counter = maxScroll;
        
        slide.style.transform = `translateX(-${counter}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    const itemWidth = document.querySelector('.img-item').clientWidth + 20;

    if (counter > 0) {
        counter -= itemWidth;
        // Negative mein jane se rokein
        if (counter < 0) counter = 0;
        
        slide.style.transform = `translateX(-${counter}px)`;
    }
});


// ======================gemini-section==================================
// 1. Array mein wahi images rakhein jo thumbnails mein hain
let images = [
    "./download (3).png", 
    "./download (4).png", 
    "./download (5).png", 
    "./download.png",
];

let currentIndex = 0;

const mainImg = document.getElementById('active-img');
const thumbs = document.querySelectorAll('.thumb');

function updateGallery(index) {
    currentIndex = index;
    
    // Main image change karne se pehle fade effect ke liye opacity kam karein (Optional)
    mainImg.style.opacity = "0";
    
    setTimeout(() => {
        mainImg.src = images[currentIndex];
        mainImg.style.opacity = "1";
    }, 200);

    // Thumbnails update karein
    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[currentIndex].classList.add('active');
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    updateGallery(currentIndex);
}

function currentSlide(index) {
    updateGallery(index);
}