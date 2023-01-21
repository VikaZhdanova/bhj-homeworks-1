const rotator = document.querySelectorAll("span.rotator__case");

setInterval(() => {
    let rotatorActive = document.querySelector("span.rotator__case_active");
    let nextElement = rotatorActive.nextElementSibling;
    rotatorActive.classList.toggle("rotator__case_active");
    if (nextElement == null) {
        rotator[0].classList.toggle("rotator__case_active");
    }
    else {
        nextElement.classList.toggle("rotator__case_active");
    }
}, 1000);