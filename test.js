const btn = 34;
const led = 17;

pinMode(led, "output");
pinMode(btn, "input_pullup");
let statusLED = 0
setInterval(() =>{

    if (digitalRead(btn) == 0) {
        flag_botao = 1;
}
else if (flag_botao == 1) {
        flag_botao = 0;
        statusLED = !statusLED;
        digitalWrite(led, statusLED)
}

}, 100)