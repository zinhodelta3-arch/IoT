const LEDG = 27;
const LEDY = 13;
const LEDR = 26;

const LEDpedestreVerde = 19;
const LEDpedestreVermelho = 14;

let statusLED = 0;

pinMode(LEDG, "output");
pinMode(LEDY, "output");
pinMode(LEDR, "output");
pinMode(LEDpedestreVerde, "output");
pinMode(LEDpedestreVermelho, "output");


let pisca = setInterval(() =>{
    statusLED = !statusLED
    digitalWrite(LEDpedestreVermelho, 1);
}, 250)




function Semafaro ()
{
    digitalWrite(LEDG, 0 )
    digitalWrite(LEDY, 0 )
    digitalWrite(LEDR, 1 )


    setTimeout(() =>{
    
    digitalWrite(LEDG, 1 )
    digitalWrite(LEDY, 0 )
    digitalWrite(LEDR, 0 )


        setTimeout(() => {

    digitalWrite(LEDG, 0 )
    digitalWrite(LEDY, 1 )
    digitalWrite(LEDR, 0 )



    setTimeout(Semafaro, 2000);

        }, 3000)
    }, 5000)

}

function Pedestre()
{
    digitalWrite(LEDpedestreVerde, 1)
    digitalWrite(LEDpedestreVermelho, 0)

    setTimeout(() => {
        
        setTimeout(() =>{
            digitalWrite(LEDpedestreVerde, 0);
            digitalWrite(LEDpedestreVermelho, 1);
        
            setTimeout(Pedestre(), )
        },)
    }, )
}


Semafaro();
Pedestre();
