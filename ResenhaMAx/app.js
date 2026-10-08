const LEDrgbR = 17
const LEDrgbG = 13
const LEDrgbB = 4
const LEDR = 26
const LEDG = 25
const LEDB = 18
const POT = 35
const LDR = 34
const btUp = 16
const btTouch = 14

//config
pinMode(LEDrgbR, "output");
pinMode(LEDrgbG, "output");
pinMode(LEDrgbB, "output");
pinMode(LEDR, "output");
pinMode(LEDG, "output");
pinMode(LEDB, "output");
pinMode(btUp, "input_pullup");
let btTouchB = require("touch.js").connect(btTouch);
let statusLED = 0

setInterval(() =>{

//configs
let valorPot = analogRead(POT);
let valorLDR = analogRead(LDR) * 100;


//Botão Mecanico

if (digitalRead(btUp) == 0) {
        flag_botao = 1;
}
else if (flag_botao == 1) {
        flag_botao = 0;
        statusLED = !statusLED;
        digitalWrite(LEDrgbR, statusLED)
        digitalWrite(LEDR, statusLED)
}


    //Potenciometro
analogWrite(LEDrgbG, valorPot);
analogWrite(LEDG, valorPot)
/* console.log("Brilho do LED: " + (valorPot*100).toFixed(0) + "%") */

//Touch
/* console.log("Botao: " + btTouchB.read()); */

if(btTouchB.read() < 35){
    digitalWrite(LEDrgbB, 1)
    digitalWrite(LEDB, 1)
}else{
    digitalWrite(LEDrgbB, 0)
    digitalWrite(LEDB, 0)
}
//LDR
/* console.log("Valor do LDR: ", valorLDR.toFixed(0) + "%") */
if(valorLDR < 80)
{
    digitalWrite(LEDrgbR, 1)
    digitalWrite(LEDrgbG, 1)
    digitalWrite(LEDrgbB, 1)
    digitalWrite(LEDR, 1)
     digitalWrite(LEDG, 1)
    digitalWrite(LEDB, 1)
}
if(valorLDR < 80)
{
     digitalWrite(LEDG, 1)

}

}, 100)

