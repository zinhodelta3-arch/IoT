const SERVO_PIN = 18;

let ang = 0 ;
let angAnterior = 0;

setInterval(() =>{

    if(angAnterior != ang)
    {
            if(ang < 0 ) ang = 0;
            else if (ang > 180) ang = 180;
     let pos = (ang / 18 + 2.5) / 100;
    analogWrite(SERVO_PIN, pos, {freq: 50});
        angAnterior = ang
    }

}, 100 )