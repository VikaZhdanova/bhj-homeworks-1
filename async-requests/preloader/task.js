let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

let img = document.querySelector("img");

let items = document.getElementById("items");

xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === xhr.DONE) {

        let response = JSON.parse(xhr.responseText);

        img.classList.remove("loader_active");

        response = response.response;
        let valutes = response.Valute;

        let information = []
        for (let key in valutes) {
            information.push(valutes[key]);
        }

        information.forEach(function (element, index) {

            items.insertAdjacentHTML("beforeend", `
        <div class="item">
        <div class="item__code">
        USD
    </div>
    <div class="item__value">
        32
    </div>
    <div class="item__currency">
        руб.
    </div>
    </div>
          `)

            let itemCode = document.querySelectorAll("div.item__code");
            itemCode[index].textContent = element.CharCode;

            let itemValue = document.querySelectorAll("div.item__value");
            itemValue[index].textContent = element.Value;

        });

    }
})