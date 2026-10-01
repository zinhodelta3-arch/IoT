const POTR = 35;
const POTB = 34;
const POTG = 36;


pinMode(26, "output");
pinMode(25, "output");
pinMode(17, "output");

setInterval(() =>{
    let valorPotR = analogRead(POTR)   * 100 * 1.00025;
    let valorPotB = analogRead(POTB)   * 100 * 1.00025;
    let valorPotG = analogRead(POTG)   * 100 * 1.00025;
    let angulo = 270 * valorPotR / 100;
    console.log("Pontenciometro Vermelho: " + valorPotR.toFixed(2));
    console.log("Pontenciometro Azul: " + valorPotB.toFixed(2));
    console.log("Pontenciometro Verde: " + valorPotG.toFixed(2));
    console.log("angulo do potenciometro vermelho: ", angulo.toFixed(0), "\n");

    let valorFixed = valorPotR.toFixed(2);
    if(valorFixed < 33){
        digitalWrite(26, 1)
        digitalWrite(25, 0)
        digitalWrite(17, 0)
    }
    else if(valorFixed >= 33 && valorFixed <66){
        digitalWrite(26, 1)
        digitalWrite(25, 1)
        digitalWrite(17, 0)
    }
    else if(valorFixed >= 66){
        digitalWrite(26, 0)
        digitalWrite(25, 1)
        digitalWrite(17, 0)
    }
}, 100);