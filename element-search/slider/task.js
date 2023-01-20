function slideSetActive(index) {

    slides.forEach(function (item) {
        if (item.classList.contains("slider__item_active")) {
            item.classList.remove("slider__item_active")
        }
    });
    slides[index].classList.add("slider__item_active");
}

const slides = document.querySelectorAll("div.slider__item");
const arrSlides = Array.from(slides);

const arrows = document.querySelectorAll("div.slider__arrow");
arrows.forEach(function (item) {
    item.onclick = function () {
        if (this.classList.contains("slider__arrow_next")) {
            let index = arrSlides.findIndex(function (item) {
                //if (item.classList.contains("slider__item_active")) {
                //    return item
                //}
            });
            slideSetActive((index + 1) % arrSlides.length);
        }
        if (this.classList.contains("slider__arrow_prev")) {
            let index = arrSlides.findIndex(function (item) {
               // if (item.classList.contains("slider__item_active")) {
                //    return item
                //}
            });
            if (index > 0) {
                slideSetActive((index - 1))
            }
            if (index <= 0) {
                index = (arrSlides.length - 1);
                slideSetActive((index));
            }
        }
    }
});
