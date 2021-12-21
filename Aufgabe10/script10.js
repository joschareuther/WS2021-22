window.addEventListener("load", function () {
    const input = document.getElementById("toDo");
    const wrapper = document.getElementById("todoWrapper");
    let todoCount = 0;
    let openCount = 0;
    let doneCount = 0;
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            createToDo();
            clearInput();
        }
    });
    function updateCounter() {
        document.querySelector("#counterToDos").innerHTML = String(todoCount);
    }
    function updateOpenCounter() {
        document.querySelector("#counterOpen").innerHTML = String(openCount);
    }
    function updatedoneCounter() {
        document.querySelector("#counterDone").innerHTML = String(doneCount);
    }
    function clearInput() {
        input.value = "";
    }
    function createToDo(todoText) {
        todoCount++;
        openCount++;
        updateCounter();
        updateOpenCounter();
        updatedoneCounter();
        const todoItem = document.createElement("div");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");
        const trashButton = document.createElement("i");
        todoItem.className = "todoItem";
        checkbox.type = "checkbox";
        checkbox.className = "checkBox";
        checkbox.addEventListener("click", function (event) {
            let isChecked = checkbox.checked;
            if (isChecked === true) {
                doneCount++;
                openCount--;
            }
            else {
                doneCount--;
                openCount++;
            }
            updateOpenCounter();
            updatedoneCounter();
        });
        label.innerHTML = todoText;
        label.className = "divLabel";
        trashButton.className = "fas fa-trash-alt";
        wrapper.appendChild(todoItem);
        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);
        todoItem.appendChild(trashButton);
        trashButton.addEventListener("click", function () {
            deleteItem(todoItem);
            if (checkbox.checked === true) {
                doneCount--;
            }
            else {
                openCount--;
            }
            updateOpenCounter();
            updatedoneCounter();
        });
    }
    function deleteItem(item) {
        wrapper.removeChild(item);
        todoCount--;
        updateCounter();
    }
    const artyom = new Artyom();
    artyom.addCommands({
        indexes: ["Add Task *"],
        smart: true,
        action: function (i, wildcard) {
            createToDo(wildcard);
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    document.querySelector("#Artyom").addEventListener("click", function () {
        startContinuousArtyom();
        document.querySelector("#Artyom").disabled = true;
    });
});
//# sourceMappingURL=script10.js.map