let promt = document.getElementsByClassName("has-tooltip");;
promt = Array.from(promt);

promt.forEach(function (item) {

    item.onclick = function () {
        let promtPlace = item.getBoundingClientRect();
        console.log(promtPlace.bottom, promtPlace.left);

        let tooltips = document.querySelectorAll("div.tooltip");
        tooltips.forEach(function (element) {
            if (element.classList.contains("tooltip_active")) {
                element.classList.remove("tooltip_active");
                return false
            }
        });

        if (item.nextElementSibling == null || item.nextElementSibling.classList.contains("tooltip") == false) {

            item.insertAdjacentHTML("afterend", '<div class="tooltip" style="left: 0; top: 0"></div>');

            let tooltip = item.nextElementSibling;

            tooltip.textContent = item.getAttribute("title");

            tooltip.classList.add("tooltip_active");

            tooltip.style.top = (String(promtPlace.bottom) + "px");
            tooltip.style.left = (String(promtPlace.left) + "px")

            return false

        }
    }
});