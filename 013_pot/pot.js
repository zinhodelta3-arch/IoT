const POT = 35;

setInterval(() =>
{
    //Valor que varia de 0 a 100 (0% a 100%)
    let valorPot = analogRead(POT) * 100;

    console.log("Valor do Pot: ", valorPot.toFixed(0) + "%")
}

)