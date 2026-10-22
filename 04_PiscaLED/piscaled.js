let statusLEDR = 0;
let statusLEDY = 0;
const LEDR = 25;
const LEDY = 26;

pinMode(LEDR,"output");
pinMode(LEDY,"output");

setInterval(() => {
    statusLEDR = !statusLEDR
    digitalWrite(LEDR, statusLEDR)
}, 500)

setInterval(() => {
    statusLEDY = !statusLEDY
    digitalWrite(LEDY, statusLEDY)
}, 100)


/*
setInterval(() => {
    statusLED = !statusLED
    digitalWrite(LED, statusLED)
}, 250)

setInterval(() => {
    statusLED =!statusLED
    digitalWrite(LED2, statusLED)
}, 500)
*/