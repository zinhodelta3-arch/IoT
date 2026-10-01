const POT = 35;
const LED = 17;

setInterval(() =>
{
    let valorPot = analogRead(POT);
    analogWrite(LED, valorPot);

    console.log("Brilho do LED: " + (valorPot*100).toFixed(0) + "%")
}
)
