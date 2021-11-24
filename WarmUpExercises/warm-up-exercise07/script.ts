
var colors: string[] = ["rgb(1,88,224)", "#ff0088", "yellow", "rgba(0,0,100,0.5)","bisque", "rgb(230, 130, 140)", "#0577", "hsl(2, 100%, 60%, 0.7)"]

var key:number=0;

function colorchange(){
    document.querySelector("body").style.background = colors[key];
    key ++;
}

window.addEventListener('load', function(){
    document.querySelector('#buttonA').addEventListener('click', colorchange);
});