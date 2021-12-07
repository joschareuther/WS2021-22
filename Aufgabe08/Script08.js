window.addEventListener("load", function () {
    var sound = [".assets/A.mp3", "assets/C.mp3", "assets/F.mp3",
        "assets/G.mp3", "assets/hihat.mp3", "assets/kick.mp3",
        "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/snare.mp3"];
    var beatplay = [sound[4], sound[5], sound[8]];
    var index = 0;
    var beat;
    var beatRemix;
    var btn = document.querySelector("#Play");
    var btn2 = document.querySelector("#Remix");
    function playSample(sample) {
        var sounds = new Audio(sample);
        sounds.play();
    }
    function beatFunktion() {
        if (btn.getAttribute("class") == "fas fa-play") {
            btn.setAttribute("class", "fas fa-stop");
            beat = setInterval(playbeat, 500);
        }
        else {
            btn.setAttribute("class", "fas fa-play");
            clearInterval(beat);
        }
        function playbeat() {
            playSample(beatplay[index]);
            index++;
            if (index == 2) {
                index = 0;
            }
        }
    }
    var min = 0;
    var max = 8;
    var remixnumber = Math.round(Math.random() * (max - min)) + min;
    console.log(remixnumber);
    function Remix() {
        if (btn2.getAttribute("class") == "fas fa-random") {
            btn2.setAttribute("class", "fas fa-stop");
            beatRemix = setInterval(remixRechnung, 500);
        }
        else {
            btn2.setAttribute("class", "fas fa-random");
            clearInterval(beatRemix);
        }
        function remixRechnung() {
            beatplay = [];
            beatplay.push(sound[remixnumber], sound[remixnumber + 1], sound[remixnumber + 2]);
            playSample(beatplay[index]);
            index++;
            if (index == 2) {
                index = 0;
            }
        }
    }
    function deleteRemix() {
        beatplay = [];
        var remixnumber2 = Math.round(Math.random() * (max - min)) + min;
        remixnumber = remixnumber2;
    }
    document.querySelector("#button1").addEventListener("click", function () { playSample(sound[0]); });
    document.querySelector("#button2").addEventListener("click", function () { playSample(sound[1]); });
    document.querySelector("#button3").addEventListener("click", function () { playSample(sound[2]); });
    document.querySelector("#button4").addEventListener("click", function () { playSample(sound[3]); });
    document.querySelector("#button5").addEventListener("click", function () { playSample(sound[4]); });
    document.querySelector("#button6").addEventListener("click", function () { playSample(sound[5]); });
    document.querySelector("#button7").addEventListener("click", function () { playSample(sound[6]); });
    document.querySelector("#button8").addEventListener("click", function () { playSample(sound[7]); });
    document.querySelector("#button9").addEventListener("click", function () { playSample(sound[8]); });
    document.querySelector("#Play").addEventListener("click", function () { beatFunktion(); });
    document.getElementById("#Remix").addEventListener("click", Remix);
    document.getElementById("#Alt").addEventListener("click", deleteRemix);
});
//# sourceMappingURL=Script08.js.map