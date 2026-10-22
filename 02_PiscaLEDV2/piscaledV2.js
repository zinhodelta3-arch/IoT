let statusLED = 0;
const LED = 25;
const LED2 = 26;

pinMode(LED,"output");

setInterval(() => {
    statusLED = !statusLED
    digitalWrite(LED, statusLED)
}, 250)

setInterval(() => {
    statusLED =!statusLED
    digitalWrite(LED2, statusLED)
}, 500)