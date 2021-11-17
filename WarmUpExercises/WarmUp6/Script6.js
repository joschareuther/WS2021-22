var anzahl = 0;
function buttonClicked() {
    anzahl++;
    document.querySelector("#result").innerHTML = anzahl + "";
}
window.addEventListener("load", function () {
    document.querySelector("#button2").addEventListener("click", buttonClicked);
});
//# sourceMappingURL=Script6.js.map