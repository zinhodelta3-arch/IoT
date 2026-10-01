const POTR = 35;

pinMode(26, "output");

setInterval(() =>{
    let valorPotR = analogRead(POTR)  * 100;
    console.log("Pontenciometro Vermelho: " + valorPotR);
}, 100);