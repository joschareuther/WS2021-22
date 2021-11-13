var text1_1 : string = "Die Emission von ";
var text1_2:string=" ist "
var text1_3 : string = "kg CO2."

var text2_1 :string="Relativ zur Gesamtemission der Welt verursacht ";
var text2_2:string=" damit "
var text2_3 :string="%";

var text3_1:string="Für ";
var text3_2:string=" hat sich 2018 im Vergleich zu 2008 die Emission um ";
var text3_3:string="% verändert.";

var text4_1:string="2018 im Vergleich zu 2008 sind das ";
var text4_2:string="kg CO2."

var EU:string="Europa";
var SA:string="Südamerika";
var NA:string="Nordamerika";
var Af:string="Afrika";
var As:string="Asien";
var Au:string="Australien";

var EU2018 : number = 4209.3;
var EU2008:number= 4965.7;

var SA2018 : number = 1261.5;
var SA2008:number= 1132.6;

var NA2018 : number = 6035.6;
var NA2008:number= 6600.4;

var Af2018 : number = 1235.5;
var Af2008:number= 1028;

var As2018 : number = 16274.1;
var As2008:number= 12954.7;

var Au2018 : number = 2100.5;
var Au2008:number= 1993;

var hundert:number=100;
var alles:number= EU2018+SA2018+NA2018+Af2018+As2018+Au2018;


var resultEU2:number = hundert / alles * EU2018;
var resultEU3:number= hundert / EU2008 * EU2018 - hundert;
var resultEU4:number= EU2018 - EU2008;

var resultSA2:number= hundert / alles * SA2018;
var resultSA3:number= hundert / SA2008 * SA2018 - hundert;
var resultSA4:number= SA2018 - SA2008;

var resultNA2:number= hundert / alles * NA2018;
var resultNA3:number= hundert / NA2008 * NA2018 - hundert;
var resultNA4:number= NA2018 - NA2008;

var resultAf2:number= hundert / alles * Af2018;
var resultAf3:number= hundert / Af2008 * Af2018 - hundert;
var resultAf4:number= Af2018 - Af2008;

var resultAs2:number= hundert / alles * As2018;
var resultAs3:number= hundert / As2008 * As2018 - hundert;
var resultAs4:number= As2018 - As2008;

var resultAu2:number= hundert / alles * Au2018;
var resultAu3:number= hundert / Au2008 * Au2018 - hundert;
var resultAu4:number= Au2018 - Au2008;

console.log(text1_1 + EU +text1_2 +EU2018 + text1_3);
console.log(text2_1 + EU + text2_2 + resultEU2 + text2_3);
console.log(text3_1 + EU + text3_2 + resultEU3 + text3_3);
console.log(text4_1 + resultEU4 + text4_2);


console.log(text1_1 + SA +text1_2 + SA2018 + text1_3);
console.log(text2_1 + SA + text2_2 + resultSA2 + text2_3);
console.log(text3_1 + SA + text3_2 + resultSA3 + text3_3);
console.log(text4_1 + resultSA4 + text4_2);


console.log(text1_1 + NA +text1_2 +NA2018 + text1_3)
console.log(text2_1 + NA + text2_2 + resultNA2 + text2_3);
console.log(text3_1 + NA + text3_2 + resultNA3 + text3_3);
console.log(text4_1 + resultNA4 + text4_2);


console.log(text1_1 + Af +text1_2 +Af2018 + text1_3)
console.log(text2_1 + Af + text2_2 + resultAf2 + text2_3);
console.log(text3_1 + Af + text3_2 + resultAf3 + text3_3);
console.log(text4_1 + resultAf4 + text4_2);


console.log(text1_1 + As +text1_2 +As2018 + text1_3)
console.log(text2_1 + As + text2_2 + resultAs2 + text2_3);
console.log(text3_1 + As + text3_2 + resultAs3 + text3_3);
console.log(text4_1 + resultAs4 + text4_2);


console.log(text1_1 + Au +text1_2 +Au2018 + text1_3)
console.log(text2_1 + Au + text2_2 + resultAu2 + text2_3);
console.log(text3_1 + Au + text3_2 + resultAu3 + text3_3);
console.log(text4_1 + resultAu4 + text4_2);