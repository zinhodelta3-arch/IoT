const LEDR = 26;
const LEDY = 25;

pinMode(LEDR, "output");
pinMode(LEDY, "output");

function PiscaLED()
{
    digitalWrite(LEDR, 1);
    digitalWrite(LEDY, 0);

    setTimeout(() =>
    {
        digitalWrite(LEDR, 0);
        digitalWrite(LEDY, 1);
        setTimeout(PiscaLED, 250)
        }, 500);
}

PiscaLED();