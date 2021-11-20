alert("Untersuchen Sie die Konsole!!");

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



console.log(text1_1 + Europa + text1_2 + EU2018 + text1_3);
console.log(text2_1 + Europa + text2_2 + resultEU2 + text2_3);
console.log(text3_1 + Europa + text3_2 + resultEU3 + text3_3);
console.log(text4_1 + resultEU4 + text1_3);


console.log(text1_1 + Südamerika + text1_2 + SA2018 + text1_3);
console.log(text2_1 + Südamerika + text2_2 + resultSA2 + text2_3);
console.log(text3_1 + Südamerika + text3_2 + resultSA3 + text3_3);
console.log(text4_1 + resultSA4 + text1_3);



console.log(text1_1 + Nordamerika + text1_2 + NA2018 + text1_3);
console.log(text2_1 + Nordamerika + text2_2 + resultNA2 + text2_3);
console.log(text3_1 + Nordamerika + text3_2 + resultNA3 + text3_3);
console.log(text4_1 + resultNA4 + text1_3);



console.log(text1_1 + Afrika + text1_2 + AF2018 + text1_3);
console.log(text2_1 + Afrika + text2_2 + resultAF2 + text2_3);
console.log(text3_1 + Afrika + text3_2 + resultAF3 + text3_3);
console.log(text4_1 + resultAF4 + text1_3);



console.log(text1_1 + Asien + text1_2 + AS2018 + text1_3);
console.log(text2_1 + Asien + text2_2 + resultAS2 + text2_3);
console.log(text3_1 + Asien + text3_2 + resultAS3 + text3_3);
console.log(text4_1 + resultAS4 + text1_3);



console.log(text1_1 + Australien + text1_2 + AU2018 + text1_3);
console.log(text2_1 + Australien + text2_2 + resultAU2 + text2_3);
console.log(text3_1 + Australien + text3_2 + resultAU3 + text3_3);
console.log(text4_1 + resultAS4 + text1_3);
