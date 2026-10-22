const LEDG = 27;
const LEDY = 13;
const LEDR = 26;
const LEDRGB = 12;

const LEDpedestreVerde = 19;
const LEDpedestreVermelho = 14;

let statusLED = 0;

pinMode(LEDG, "output");
pinMode(LEDY, "output");
pinMode(LEDR, "output");
pinMode(LEDpedestreVerde, "output");
pinMode(LEDpedestreVermelho, "output");
pinMode(LEDRGB, "output");


let pisca = setInterval(() =>{
    statusLED = !statusLED
    digitalWrite(LEDpedestreVermelho, 1);
}, 250)




function Semafaro ()
{
    digitalWrite(LEDG, 0 )
    digitalWrite(LEDY, 0 )
    digitalWrite(LEDR, 1 )

        digitalWrite(LEDpedestreVerde, 1);
        digitalWrite(LEDpedestreVermelho, 0);
        digitalWrite(LEDRGB, 1);
       clearInterval(pisca);

    setTimeout(() =>{
    
    digitalWrite(LEDG, 1 )
    digitalWrite(LEDY, 0 )
    digitalWrite(LEDR, 0 )

        digitalWrite(LEDpedestreVerde, 0);
        digitalWrite(LEDpedestreVermelho, 1);

        setTimeout(() => {

    digitalWrite(LEDG, 0 )
    digitalWrite(LEDY, 1 )
    digitalWrite(LEDR, 0 )

        digitalWrite(LEDpedestreVerde, 0);
        digitalWrite(LEDpedestreVermelho, 1);

    setTimeout(Semafaro, 2000);

        }, 3000)
    }, 5000)

}

function Pedestre()
{
    if( ledG == 1){
        
    }
}


Semafaro();

