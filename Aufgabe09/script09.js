// tslint:disable-next-line: typedef
window.addEventListener("load", function () {
    var Todo;
    ((Todo) => {
        // 1. Select the div element using the id property
        var app = document.getElementById("app");
        // 2. Create a new <p></p> element programmatically
        var p = document.createElement("p"); // <p></p>
        // 3. Add the text content
        p.textContent = "Erstelle hier deine ToDo-Liste:";
        // 4. Append the p element to the div element
        app.appendChild(p);
        document.querySelector("#addButton").addEventListener("click", addTextToHtml);
        var input = document.querySelector("#inputTodo");
        function addTextToHtml() {
            var textVonEingabefeld;
            if (input.value != "")
                textVonEingabefeld = input.value;
            // Textfeld leeren
            input.value = "";
            // 1. Select the div element using the id property
            var app = document.getElementById("app");
            // 2. Create a new <p></p> element programmatically
            // tslint:disable-next-line: typedef
            var p = document.createElement("p");
            // 3. Add the text content
            p.textContent = textVonEingabefeld;
            p.addEventListener("click", erledigt);
            // 4. Append the p element to the div element
            app === null || app === void 0 ? void 0 : app.appendChild(p);
        }
        // tslint:disable-next-line: typedef
        function erledigt() {
            if (this.style.textDecoration == "line-through") {
                this.style.textDecoration = "none";
                this.style.color = "#2f4f4f";
            }
            else {
                this.style.textDecoration = "line-through";
                this.style.color = "#ff0000";
            }
        }
    })(Todo || (Todo = {}));
});
//# sourceMappingURL=script09.js.map