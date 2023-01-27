const tab = document.querySelectorAll("div.tab");
const arrTab = Array.from(tab);

const content = document.querySelectorAll("div.tab__content");
const arrContent = Array.from(content);


for (let i = 0; i < arrTab.length; i++) {
    arrTab[i].onclick = function () {
        if (arrTab[i].classList.contains("tab")) {
            let activeTab = document.querySelector("div.tab_active");
            activeTab.classList.remove("tab_active");
            arrTab[i].classList.add("tab_active");
        };

        let number = arrTab.indexOf(arrTab[i]);
        arrContent.forEach(function (element, index) {
            if (index != number) {
                element.className = "tab__content";
            }
            else {
                element.className = "tab__content tab__content_active";
            }
        })
    };
};