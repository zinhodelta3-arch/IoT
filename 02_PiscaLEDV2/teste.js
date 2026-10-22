const leds = require('../00_leds/leds');
let statusLED = 0;

pinMode(leds.LED26, "output");

setInterval(() =>{
    statusLED = !statusLED;
    digitalWrite(leds.LED26, statusLED)
})