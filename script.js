/*день\ночь*/

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "☀";
    } else {
        themeButton.textContent = "☾";
    }

});


/*каруселька*/

const slides = document.querySelectorAll(".gallery__slide");

const prevButton = document.getElementById("prevButton");

const nextButton = document.getElementById("nextButton");

const currentSlide = document.getElementById("currentSlide");

const totalSlides = document.getElementById("totalSlides");


let slideIndex = 0;


/* Показываем количество фотографий */

totalSlides.textContent = slides.length;

/*показ фото*/

function showSlide(index) {

    slides.forEach(function (slide) {
        slide.classList.remove("gallery__slide--active");
    });


    slides[index].classList.add("gallery__slide--active");


    currentSlide.textContent = index + 1;
}


/*след фото*/

nextButton.addEventListener("click", function () {

    slideIndex = slideIndex + 1;


    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }


    showSlide(slideIndex);

});

/*пред фото*/

prevButton.addEventListener("click", function () {

    slideIndex = slideIndex - 1;


    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }


    showSlide(slideIndex);

});
