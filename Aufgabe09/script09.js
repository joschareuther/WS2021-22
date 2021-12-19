// tslint:disable-next-line: typedef
window.addEventListener("load", function () {
    // tslint:disable-next-line: variable-name
    var Todo;
    ((_Todo) => {
        // tslint:disable-next-line: typedef
        let app = document.getElementById("app");
        // tslint:disable-next-line: typedef
        let p = document.createElement("p"); // <p></p>
        p.textContent = "Erstelle hier deine ToDo-Liste:";
        app.appendChild(p);
        document.querySelector("#addButton").addEventListener("click", addTextToHtml);
        // tslint:disable-next-line: typedef
        var input2 = document.getElementById("inputTodo");
        input2.addEventListener("keydown", function (e) {
            if (e.keyCode === 13) { //checks whether the pressed key is "Enter"
                addTextToHtml();
            }
        });
        // tslint:disable-next-line: typedef
        let input = document.querySelector("#inputTodo");
        // tslint:disable-next-line: typedef
        function addTextToHtml() {
            var textVonEingabefeld;
            if (input2.value != "")
                textVonEingabefeld = input2.value;
            input2.value = "";
            // tslint:disable-next-line: typedef
            var app = document.getElementById("app");
            // tslint:disable-next-line: typedef
            var p = document.createElement("p");
            p.textContent = textVonEingabefeld;
            p.addEventListener("click", erledigt);
            // tslint:disable-next-line: typedef
            const newLocal = void 0;
            // tslint:disable-next-line: no-unused-expression
            app === null || app === void 0 ? newLocal : app.appendChild(p);
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