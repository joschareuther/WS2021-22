var names = ["Ben", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo"];
window.addEventListener("load", function () {
    document.querySelector("main p span").innerHTML = names.length + "";
    document.querySelector("#buttonAufsteigend").addEventListener("click", buttonAufsteigendClicked);
    document.querySelector("#buttonAbsteigend").addEventListener("click", buttonAbsteigendClicked);
    document.querySelector("#buttonAlleAusser").addEventListener("click", buttonAlleAusserClicked);
});
function buttonAufsteigendClicked() {
    document.querySelector("#liste").innerHTML = "";
    for (var index = 0; index < names.length; index++) {
        document.querySelector("#liste").innerHTML += "<p>" + names[index] + "</p>";
    }
}
function buttonAbsteigendClicked() {
    document.querySelector("#liste").innerHTML = "";
    for (var index = names.length - 1; index >= 0; index--) {
        console.log(index);
        document.querySelector("#liste").innerHTML += "<p>" + names[index] + "</p>";
    }
}
function buttonAlleAusserClicked() {
    document.querySelector("#liste").innerHTML = "";
    for (var index = 0; index < names.length; index++) {
        if (names[index] != "Lea" && names[index] != "Paul" && names[index] != "Ben") {
            document.querySelector("#liste").innerHTML += "<p>" + names[index] + "</p>";
        }
    }
}
//# sourceMappingURL=script.js.map