const servo = 18
const RGBR = 26
const RGBG = 16
const RGBB = 14
const RGB = 27
const BTNEsquerda = 25;
const BTNpisca = 19
const BTNDireita = 13
const Volante = 35;

pinMode( RGBR, "output")
pinMode( RGBG, "output")
pinMode( RGBB, "output")
pinMode( RGB, "output")
pinMode( BTNEsquerda, "input_pullup")
pinMode( BTNpisca, "input_pullup")
pinMode( BTNDireita, "input_pullup")

let statusLEDEsquerda = 0
let statusLEDPisca = 0 
let statusLEDDireita = 0

let statusLEDDirecaoDireita = 0

let flag_botaoEsq = 0
let flag_botaoPisca = 0
let flag_botaoDireita = 0

let flag_ledDDireita = 0;

let angAnterior = 0;

//POT + SERVO
setInterval(() =>{

    let ang = analogRead(Volante) * 180
   if(angAnterior != ang)
    {
        if(ang < 0) ang = 0
        else if ( ang > 180)  ang = 180;

        let pos = (ang / 18 + 2.5) / 100;

        analogWrite(servo, pos, {freq: 50})
        angAnterior = ang;

     
    }
},100)

//statusBotão
setInterval(() =>{
     //botões mecanicos
    if(digitalRead(BTNEsquerda)){
        flag_botaoEsq = 1;
    }
    else if (flag_botaoEsq == 1)
    {
        flag_botaoEsq = 0
        statusLEDEsquerda = !statusLEDEsquerda
        digitalWrite(RGBR, statusLEDEsquerda);
    }

    if(digitalRead(BTNDireita))
    {
        flag_botaoDireita = 1;

    }
    else if( flag_botaoDireita == 1)
    {
        flag_botaoDireita = 0
        statusLEDDireita = !statusLEDDireita
        digitalWrite(RGBB, statusLEDDireita)
    }

    if(digitalRead(BTNpisca))
    {
        flag_botaoPisca = 1
    }
    else if( flag_botaoPisca == 1)
    {
        flag_botaoPisca = 0;
        
       /*  digitalWrite(RGB, statusLEDPisca)
        digitalWrite(RGBG, statusLEDPisca) */
    }
})

//piscaAlerta
setInterval(() =>{

    if(flag_botaoPisca == 1){
        flag_botaoPisca = 0;
        statusLEDPisca = !statusLEDPisca
        digitalWrite(RGBG, statusLEDPisca)
    }else {
        digitalRead(RGBG, 0 )
    }

}, 250)