const POTR = 35;
const POTB = 34;
const POTG = 36;
const POTsA = 39;
const LEDR = 26;
const LEDG = 25;
const LEDB = 17;



const LEDR2 = 27;
const LEDG2 = 14;
const LEDB2 = 13;

pinMode(LEDR, "output");
pinMode(LEDR2, "output");

pinMode(LEDG, "output");
pinMode(LEDG2, "output");

pinMode(LEDB, "output");
pinMode(LEDB2, "output");
pinMode(23, "output");
pinMode(18, "output");

setInterval(() =>{
    let valorPotR = analogRead(POTR) * 1.00025;
    let valorPotB = analogRead(POTB) * 1.00025;
    let valorPotG = analogRead(POTG)* 1.00025;
    let valorPotA = analogRead(POTsA)* 1.00025;
    let angulo = 270 * valorPotR ;
    // console.log("Pontenciometro Vermelho: " + valorPotR.toFixed(2));
    // console.log("Pontenciometro Azul: " + valorPotB.toFixed(2));
    // console.log("Pontenciometro Verde: " + valorPotG.toFixed(2));
     console.log("angulo do potenciometro vermelho: ", angulo.toFixed(0), "\n");


    // analogWrite(26, 1)
    // analogWrite(25, 1)
    // analogWrite(17, 1)
    
   /*  analogWrite(LEDR, analogRead(POTR))
    analogWrite(LEDR2, analogRead(POTR))
    
    analogWrite(LEDG, analogRead(POTG))
    analogWrite(LEDG2, analogRead(POTG))
    
    analogWrite(LEDB, analogRead(POTB))
    analogWrite(LEDB2, analogRead(POTB)) */
    analogWrite(23, analogRead(POTR));
    analogWrite(18, 1 - analogRead(POTR));

}, 100);    