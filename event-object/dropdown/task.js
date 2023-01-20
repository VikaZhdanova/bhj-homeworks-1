const value = document.querySelector("div.dropdown__value");
const list = document.querySelector("ul")

value.onclick = function () {
    list.className = "dropdown__list dropdown__list_active";
};

const item = document.querySelectorAll("li.dropdown__item");
const arrItem = Array.from(item);

for (let i = 0; i < arrItem.length; i++) {
    arrItem[i].onclick = function () {
        list.className = "dropdown__list";
        document.querySelector("div.dropdown__value").textContent = arrItem[i].textContent;
        return false;
    };
};