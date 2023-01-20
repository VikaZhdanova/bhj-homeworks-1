const links = document.querySelectorAll(".menu_main > li > a.menu__link");

for (let i = 0; i < links.length; ++i) {
    links[i].onclick = function () {
        if (this.parentElement.querySelectorAll("ul").length) {
            let isActive = this.parentElement.querySelector("ul").classList.contains('menu_active');
            document.querySelectorAll(".menu_main ul.menu.menu_sub.menu_active").forEach(function (item) {
                item.classList.remove("menu_active");
            });
            if (!isActive)
                this.parentElement.querySelector("ul").classList.add("menu_active");
            return false;
        }
    };

}
