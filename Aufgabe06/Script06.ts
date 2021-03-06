var text1_1: string="Die Emission von ";
var text1_2: string=" ist ";
var text1_3: string=" kg CO2.";

var text2_1: string="Relativ zur Gesamtemission der Welt verursacht";
var text2_2: string=" damit ";
var text2_3: string="%.";

var text3_1: string="Für";
var text3_2: string=" hat sich 2018 im Vergleich zu 2008 die Emission um ";
var text3_3: string="% verändert.";

var text4_1: string="2018 im Vergleich zu 2008 sind das ";

var Europa:string=" Europa";
var Südamerika:string=" Südamerika";
var Nordamerika:string=" Nordamerika";
var Afrika:string=" Afrika";
var Asien: string=" Asien";
var Australien:string=" Australien";
var CO2:string="kg CO2";


var EU2018:number= 4209.3;
var SA2018:number= 1261.5;
var NA2018:number= 6035.6;
var AF2018:number= 1192.1;
var AS2018:number= 16274.1;
var AU2018:number= 2100.5;

var EU2008:number= 4965.7;
var SA2008:number= 1132.6;
var NA2008:number= 6600.4;
var AF2008:number= 1028;
var AS2008:number= 12954.7;
var AU2008:number= 1993;

var hundert:number=100;
var gesamt:number= EU2018+SA2018+NA2018+AF2018+AS2018+AU2018;


var resultEU2:number = hundert / gesamt * EU2018;
var resultEU3:number= hundert / EU2008 * EU2018 - hundert;
var resultEU4:number= EU2018 - EU2008;

var resultSA2:number= hundert / gesamt * SA2018;
var resultSA3:number= hundert / SA2008 * SA2018 - hundert;
var resultSA4:number= SA2018 - SA2008;

var resultNA2:number= hundert / gesamt * NA2018;
var resultNA3:number= hundert / NA2008 * NA2018 - hundert;
var resultNA4:number= NA2018 - NA2008;

var resultAF2:number= hundert / gesamt * AF2018;
var resultAF3:number= hundert / AF2008 * AF2018 - hundert;
var resultAF4:number= AF2018 - AF2008;

var resultAS2:number= hundert / gesamt * AS2018;
var resultAS3:number= hundert / AS2008 * AS2018 - hundert;
var resultAS4:number= AS2018 - AS2008;

var resultAU2:number= hundert / gesamt * AU2018;
var resultAU3:number= hundert / AU2008 * AU2018 - hundert;
var resultAU4:number= AU2018 - AU2008;


document.querySelector(".europe").addEventListener("click", function () { myFunction(Europa, EU2018, resultEU2, resultEU3, resultEU4); });
document.querySelector(".northamerica").addEventListener("click", function () { myFunction(Nordamerika, NA2018, resultNA2, resultNA3, resultNA4); });
document.querySelector(".southamerica").addEventListener("click", function () { myFunction(Südamerika, SA2018, resultSA2, resultSA3, resultSA4); });
document.querySelector(".africa").addEventListener("click", function () { myFunction(Afrika, AF2018, resultAF2, resultAF3, resultAF4); });
document.querySelector(".asia").addEventListener("click", function () { myFunction(Asien, AS2018, resultAS2, resultAS3, resultAS4); });
document.querySelector(".australia").addEventListener("click", function () { myFunction(Australien, AU2018, resultAU2, resultAU3, resultAU4); });

function myFunction(Land, Emissionen, Relativ, GrowthRateinp, GrowthRateabsolute) {
    document.querySelector("#titleRegion").innerHTML = Land;
    document.querySelector("#subtitleRegion").innerHTML = Land;
    document.querySelector("#Emission").innerHTML = Emissionen.toFixed(2);
    document.querySelector("#Relative").innerHTML = Relativ.toFixed(2) + "%";
    document.querySelector("#Growth").innerHTML = GrowthRateinp.toFixed(2) + "%";
    document.querySelector("#GrowthRate").innerHTML = GrowthRateabsolute.toFixed(2);
    var Grafik = document.querySelector(".chart");
    Grafik.style.height = Relativ + "px";}
