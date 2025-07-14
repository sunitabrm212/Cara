document.addEventListener('DOMContentLoaded', () => {
    const bar = document.querySelector('#bar');
    const close = document.querySelector('#close');
    const nav = document.querySelector('#nav-bar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('show');
        });
    }

    if(close) {
        close.addEventListener('click', () => {
            nav.classList.remove('show');
        });
    }
});

// image 

const mainImage = document.querySelector("#main-img");
const smallImage = document.querySelectorAll(".sm-image");

smallImage[0].addEventListener("click", () => {
    mainImage.src = smallImage[0].src;
});

smallImage[1].addEventListener("click", () => {
    mainImage.src = smallImage[1].src;
});

smallImage[2].addEventListener("click", () => {
    mainImage.src = smallImage[2].src;
});

smallImage[3].addEventListener("click", () => {
    mainImage.src = smallImage[3].src;
});