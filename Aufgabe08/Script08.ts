window.addEventListener("load", function(){

    var samp = [new Audio("audios/Audio4.mp3"), new Audio("audios/Audio3.mp3"), new Audio("audios/Audio2.mp3"),
    new Audio("audios/Audio6.mp3"), new Audio("assets/hihat.mp3"), new Audio("assets/kick.mp3"),
    new Audio("assets/snare.mp3"), new Audio("audios/Audio7.mp3"), new Audio("audios/Audio8.mp3"),
    new Audio("assets/.mp3")];

// tslint:disable-next-line: typedef
    document.querySelector("#button1").addEventListener("click", function () { (samp[0]).play(); });
// tslint:disable-next-line: typedef
    document.querySelector("#button2").addEventListener("click", function () { (samp[1]).play(); });
    document.querySelector("#button3").addEventListener("click", function () { (samp[2]).play(); });
    document.querySelector("#button4").addEventListener("click", function () { (samp[3]).play(); });
    document.querySelector("#button5").addEventListener("click", function () { (samp[4]).play(); });
    document.querySelector("#button6").addEventListener("click", function () { (samp[5]).play(); });
    document.querySelector("#button7").addEventListener("click", function () { (samp[6]).play(); });
    document.querySelector("#button8").addEventListener("click", function () { (samp[7]).play(); });
    document.querySelector("#button9").addEventListener("click", function () { (samp[8]).play(); });
    document.querySelector("#Play").addEventListener("click", function () { beatFunktion(); });


    var btn = document.querySelector("#Play");

    function beatFunktion() {
        if (btn.getAttribute("class") == "fas fa-play") {
            btn.setAttribute("class", "fas fa-stop")
            beat.stop();
        }
        else {
            btn.setAttribute("class", "fas fa-play")
            rhytmus();
            
        }
};


