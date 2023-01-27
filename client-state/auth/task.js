let btn = document.getElementById("signin__btn");

let welcome = document.getElementById("welcome");

let signin = document.getElementById("signin");

let xhr = new XMLHttpRequest();

let input = document.querySelectorAll("input");

btn.onclick = function () {
    console.log(input[0].value.length > 0 && input[1].value.length > 0);
    if (input[0].value.length > 0 && input[1].value.length > 0) {
        let formData = new FormData(document.forms.signin__form);
        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
        xhr.send(formData);
        xhr.addEventListener('readystatechange', function () {
            if (xhr.readyState === xhr.DONE) {
                let response = JSON.parse(xhr.response);
                console.log(response);

                if (response.success == true) {
                    signin.classList.remove("signin_active");
                    welcome.classList.add("welcome_active");
                    welcome.textContent = welcome.textContent + response.user_id;

                    localStorage.setItem("id", response.user_id);
                }

                else {
                    confirm("Неверный логин/пароль")
                }
            }
        })
    };
    return false
}

let id = localStorage.getItem("id");

if (id != null) {
    signin.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
    welcome.textContent = welcome.textContent + id;
}