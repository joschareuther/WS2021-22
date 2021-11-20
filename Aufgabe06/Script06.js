var text1_1 = "Die Emission von ";
var text1_2 = " ist ";
var text1_3 = " kg CO2.";
var text2_1 = "Relativ zur Gesamtemission der Welt verursacht";
var text2_2 = " damit ";
var text2_3 = "%.";
var text3_1 = "Für";
var text3_2 = " hat sich 2018 im Vergleich zu 2008 die Emission um ";
var text3_3 = "% verändert.";
var text4_1 = "2018 im Vergleich zu 2008 sind das ";
var Europa = " Europa";
var Südamerika = " Südamerika";
var Nordamerika = " Nordamerika";
var Afrika = " Afrika";
var Asien = " Asien";
var Australien = " Australien";
var CO2 = "kg CO2";
var EU2018 = 4209.3;
var SA2018 = 1261.5;
var NA2018 = 6035.6;
var AF2018 = 1192.1;
var AS2018 = 16274.1;
var AU2018 = 2100.5;
var EU2008 = 4965.7;
var SA2008 = 1132.6;
var NA2008 = 6600.4;
var AF2008 = 1028;
var AS2008 = 12954.7;
var AU2008 = 1993;
var hundert = 100;
var gesamt = EU2018 + SA2018 + NA2018 + AF2018 + AS2018 + AU2018;
var resultEU2 = hundert / gesamt * EU2018;
var resultEU3 = hundert / EU2008 * EU2018 - hundert;
var resultEU4 = EU2018 - EU2008;
var resultSA2 = hundert / gesamt * SA2018;
var resultSA3 = hundert / SA2008 * SA2018 - hundert;
var resultSA4 = SA2018 - SA2008;
var resultNA2 = hundert / gesamt * NA2018;
var resultNA3 = hundert / NA2008 * NA2018 - hundert;
var resultNA4 = NA2018 - NA2008;
var resultAF2 = hundert / gesamt * AF2018;
var resultAF3 = hundert / AF2008 * AF2018 - hundert;
var resultAF4 = AF2018 - AF2008;
var resultAS2 = hundert / gesamt * AS2018;
var resultAS3 = hundert / AS2008 * AS2018 - hundert;
var resultAS4 = AS2018 - AS2008;
var resultAU2 = hundert / gesamt * AU2018;
var resultAU3 = hundert / AU2008 * AU2018 - hundert;
var resultAU4 = AU2018 - AU2008;
function myFunction(Land) {
    document.querySelector("#titleRegion").innerHTML = Land;
    document.querySelector("#subtitleRegion").innerHTML = Land;
}
document.querySelector(".europe").addEventListener("click", function () { myFunction(Europa); });
document.querySelector(".northamerica").addEventListener("click", function () { myFunction(Nordamerika); });
document.querySelector(".southamerica").addEventListener("click", function () { myFunction(Südamerika); });
document.querySelector(".africa").addEventListener("click", function () { myFunction(Afrika); });
document.querySelector(".asia").addEventListener("click", function () { myFunction(Asien); });
document.querySelector(".australia").addEventListener("click", function () { myFunction(Australien); });
//# sourceMappingURL=Script06.js.map