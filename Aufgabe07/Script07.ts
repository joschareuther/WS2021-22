var samp = [new Audio('audios/Audio4.mp3'), new Audio('audios/Audio3.mp3'), new Audio('audios/Audio2.mp3'),
new Audio('audios/Audio6.mp3'), new Audio('assets/hihat.mp3'), new Audio('assets/kick.mp3'),
new Audio('assets/snare.mp3'), new Audio('audios/Audio7.mp3'), new Audio('audios/Audio8.mp3'),
new Audio('assets/.mp3')];

document.querySelector("#button1").addEventListener("click", function () { playSample(samp[0], "", ""); });
document.querySelector("#button2").addEventListener("click", function () { playSample(samp[1], "", ""); });
document.querySelector("#button3").addEventListener("click", function () { playSample(samp[2], "", ""); });
document.querySelector("#button4").addEventListener("click", function () { playSample(samp[3], "", ""); });
document.querySelector("#button5").addEventListener("click", function () { playSample(samp[4], "", ""); });
document.querySelector("#button6").addEventListener("click", function () { playSample(samp[5], "", ""); });
document.querySelector("#button7").addEventListener("click", function () { playSample(samp[6], "", ""); });
document.querySelector("#button8").addEventListener("click", function () { playSample(samp[7], "", ""); });
document.querySelector("#button9").addEventListener("click", function () { playSample(samp[8], "", ""); });
document.querySelector("#playbutton").addEventListener("click", function () { playSample(samp[4], samp[5], samp[6]); });

function playSample(ton, snare, hihat) {
    setInterval(function () { ton.play(); }, 0);
    setInterval(function () { snare.play(); }, 1000);
    setInterval(function () { hihat.play(); }, 2000);
}


