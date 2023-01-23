const chat = document.querySelector("div.chat-widget");
const chatRedSide = document.querySelector("div.chat-widget__side");

chatRedSide.onclick = function () {
    chat.classList.add("chat-widget_active");
};

const form = document.querySelector("input");
const robotMessages = ["Мне некогда", "Не грубите мне", "Погуглите сами", "Как это понимать?"];

form.addEventListener("keyup", function (event) {

    if (event.key == "Enter" && form.value.length > 0) {
        const messages = document.querySelector('.chat-widget__messages');

        messages.innerHTML += `
          <div class="message message_client">
            <div class="message__time"></div>
            <div class="message__text"></div>
          </div>
          <div class="message">
          <div class="message__time"></div>
          <div class="message__text"></div>
        </div>
        `;

        let message = document.querySelectorAll("div.message");

        let time = new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" });

        message.forEach(function (item) {
            if (item.classList.contains("message_client")) {

                if (item.children[0].textContent.length == 0) {
                    item.children[0].textContent = time;
                    item.children[1].textContent = form.value;
                }

            }

            if (item.classList.contains("message_client") == false) {
                if (item.children[1].textContent.length == 0) {
                    item.children[0].textContent = time;
                    let rand = Math.floor(Math.random() * robotMessages.length);
                    item.children[1].textContent = robotMessages[rand];
                }
            }
        })
    }
});