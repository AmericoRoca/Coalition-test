let backgroundImageUrl;

const carrousel = document.querySelector(".carrousel");
const body = document.body;

carrousel.addEventListener("click", function(event) {
    const clickedImage = event.target;
    if (clickedImage.classList.contains("carrousel-image")) {
        backgroundImageUrl = clickedImage.getAttribute("src");
        body.style.backgroundImage = `url(${backgroundImageUrl})`;
    }
});