import "../00_leds/leds.js"

let statusLEDum = 0;
let statusLEDdois = 0;
let statusLEDtres = 0;
let statusLEDquatro =0;
let statusLEDcinco = 0;

pinMode(26, "output");
pinMode(27, "output");
pinMode(13, "output");
pinMode(25, "output");

setInterval(() =>{
    statusLEDum = !statusLEDum
    digitalWrite(26, statusLEDum);

}, 250)
setInterval(()=>{
    statusLEDcinco =!statusLEDcinco;
    digitalWrite(25, statusLEDcinco);
}, 300)

setInterval (() =>{
statusLEDtres = !statusLEDtres
digitalWrite(13, statusLEDtres)
}, 500)



setInterval (() =>{
statusLEDtres = !statusLEDtres
digitalWrite(27, statusLEDtres)
}, 1000)

setInterval(()=>{
statusLEDquatro = !statusLEDquatro
digitalWrite(18, statusLEDquatro);
}, 2000)