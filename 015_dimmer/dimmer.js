const POT = 35;

/* const POTR = 34;
const POTG = 36;
const POTB = 39;

const LED = 17;


const LEDR= 27;
const LEDG = 13;
const LEDB = 23;

pinMode(LED, "output");
pinMode(LEDR, "output");
pinMode(LEDG, "output");
pinMode(LEDB, "output");
 */
setInterval(() =>
{
    let valorPot = analogRead(POT);
    
/*     let valorPotR = analogRead(POTR);
    let valorPotG = analogRead(POTG);
    let valorPotB = analogRead(POTB);
    analogWrite(LED, valorPot);

    analogWrite(LEDR, valorPotR);
    analogWrite(LEDG, valorPotG);
    analogWrite(LEDB, valorPotB); */

    console.log("Brilho do LED: " + (valorPot*100).toFixed(0) + "%")
}
)
