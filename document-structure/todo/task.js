const input = document.getElementById("task__input");

const taskList = document.getElementById("tasks__list");

const button = document.getElementById("tasks__add");

input.addEventListener("keyup", function () {

    if (input.value.length > 0) {
        button.onclick = function () {

            taskList.insertAdjacentHTML("beforeend", `
            <div class="task">
            <div class="task__title"></div>
            <a href="#" class="task__remove">&times;</a>
            </div>
          `);

            let task = document.getElementsByClassName("task");

            let taskTitle = document.getElementsByClassName("task__title");
            taskTitle = Array.from(taskTitle);

            taskTitle.forEach(function (item) {
                if (item.textContent.length == 0) {
                    item.textContent = input.value;
                }
            });

            input.value = " ";

            let taskRemove = document.getElementsByClassName("task__remove");
            taskRemove = Array.from(taskRemove);

            taskRemove.forEach(function (item) {
                item.onclick = function () {
                    taskRemoveIndex = taskRemove.indexOf(item);
                    task[taskRemoveIndex].remove();
                    taskRemove.splice(taskRemoveIndex, 1);
                }
            });
            return false
        }

    }
});