const reveal = document.querySelectorAll("div.reveal");

window.onscroll = function(){  
    for (let i = 0; i < reveal.length; i++) {
    let viewportHeight = window.innerHeight;
    let { top, bottom } = reveal[i].getBoundingClientRect();
    if ((top < viewportHeight) == true) {
        reveal[i].classList.add("reveal_active");
    }

    if ((bottom < 0) == true) {
        reveal[i].classList.remove("reveal_active");
    }
}
};