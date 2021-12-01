
window.addEventListener('load', function(){
    
var btn: HTMLElement = document.querySelector('button');


btn.addEventListener('click', function(){
    if(btn.getAttribute('class')=='active'){
        btn.setAttribute('class', '');
    } else {
        btn.setAttribute('class', 'active');
    }
    btn.setAttribute('class', 'active');
})

    
});




var tmp: number = 20;



if (tmp == 10){
    console.log("var1 is 10");
} else if(tmp == 20) {
    console.log("var1 is 20 (and not 10)");
}else{
    console.log("var1 is neigher 10 nor 20");
}