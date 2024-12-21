
document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "./img1.jpg",
        "./img2.jpg",
        "./img3.jpg"
    ];

    let currentIndex = 0;

    function changeBackground() {
        document.querySelector(".background-image").style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    
    changeBackground();

    
    setInterval(changeBackground, 3000);
});
