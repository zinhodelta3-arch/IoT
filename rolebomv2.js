const LDR = 34;
const POT = 35;
const LEDY = 23;
const LEDG = 18;
const BTN = 17;


pinMode(26, "output");
pinMode(LEDY, "output");
pinMode(LEDG, "output");
pinMode(BTN, "input_pullup");

let statusLED = 0;


setInterval(() => {
    let statusBotao = digitalRead(BTN);
    //Valor que varia de 0 a 100 (0% a 100%)
    let valorLDR = analogRead(LDR) * 100;
    console.log("Valor do LDR: ", valorLDR.toFixed(0) + "%")
    /* 
        if(valorLDR > 80){
            digitalWrite(26, 1);
            algo = 1
              if(algo = 1 )
                {
                    analogWrite(23, analogRead(POT));
                    analogWrite(18, 1 - analogRead(POT));
                }
                else
                {
                    algo = 0
                }
        }else
        {
            algo = 0
            digitalWrite(26, 0);
            digitalWrite(26, 0);
            digitalWrite(26, 0);
        } */



    if (digitalRead(BTN) == 0) {
        flag_botao = 1;
    }
    else if (flag_botao == 1) {
        flag_botao = 0;
        statusLED = !statusLED;
        digitalWrite(26, statusLED)
    }

    if(statusLED == 0 )
    {
        analogWrite(23, analogRead(POT));
        analogWrite(18, 1 - analogRead(POT));
    }else if (statusLED == 1)
    {
        if(valorLDR > 70){
            digitalWrite(23, 1);
            digitalWrite(18, 1);
        }
        else{
            digitalWrite(23, 0);
            digitalWrite(18, 0)
        }
    }

    /* 
        if(valorLDR > 80){
            let algo = 1
            digitalWrite(26, 1)
            if(algo == 1){
                analogWrite(23, analogRead(POT));
                analogWrite(18, 1 - analogRead(POT));
            }
        }else if (valorLDR < 80 )
        {
            algo = 0 
            digitalWrite(26, 0)
            digitalWrite(23, 0)
            digitalWrite(18, 0)
        }
     */

}, 

)