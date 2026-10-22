const LED = 26;
const LEDG = 27;
const LEDRGBR = 17;
const LEDRGBG = 16;
const LEDRGBB = 18;
const BT = 25;
const BTOFF = 13;
const BTdual = 23;



let flag_botao = 0;
let flag_botao_off = 0;
let flag_botao_dual = 0;
let botao_dual_off = 0;
let status_led_dual = 0;

let status_red_rgb = 0;
let status_green_rgb = 1;

pinMode(LED, "output");
pinMode(LEDG, "output")

pinMode(LEDRGBR, "output");
pinMode(LEDRGBG, "output");
pinMode(LEDRGBB, "output");

pinMode(BT, "input_pullup");
pinMode(BTOFF, "input_pullup");
pinMode(BTdual, "input_pullup");

/* setInterval(() =>{

    if(digitalRead(BT) == 0)
   {
      flag_botao = 1; 
     }
     else if (flag_botao == 1)
      {
      flag_botao = 0;
       status_led = !status_led;
       digitalWrite(LED, status_led)
   }
 }, 100)*/

setInterval(() => {
  
  if(digitalRead(BT) == 0)
  {
    flag_botao = 1;
  } else if (flag_botao == 1)
  {
    flag_botao = 0
    digitalWrite(LED, 1);
    digitalWrite(LEDG, 0);
    digitalWrite(LEDRGBB, 1);
    digitalWrite(LEDRGBR, 0);
    digitalWrite(LEDRGBG, 0);
    
  }

  if(digitalRead(BTOFF) == 0)
  {
    flag_botao_off = 1
  } else if (flag_botao_off == 1)
  {
    flag_botao_off = 0
    digitalWrite(LED, 0);
    digitalWrite(LEDG, 1);
    digitalWrite(LEDRGBB, 1);
    digitalWrite(LEDRGBR, 0);
    digitalWrite(LEDRGBG, 0);
  }

  if(digitalRead(BTdual) == 0)
{
  flag_botao_dual = 1
} else if (flag_botao_dual == 1)
{
  flag_botao_dual = 0
    status_led_dual  = !status_led_dual
    digitalWrite(LED, status_led_dual);
    digitalWrite(LEDG, status_led_dual);

    if (status_led_dual == 1)
    {
      digitalWrite(LEDRGBR, 0);
      digitalWrite(LEDRGBG, 1);
      digitalWrite(LEDRGBB, 0);
    }
    else
    {
      digitalWrite(LEDRGBR, 1);
      digitalWrite(LEDRGBG, 0);
      digitalWrite(LEDRGBB, 0);
    }
 
    
}

}, 100);

// setInterval(() =>{

//   if(digitalRead(BT) == 0 )
//   {
//     flag_botao = 1;
//   } else if (flag_botao == 1)
//   {
//     flag_botao = 0
//     status_led = 1;
//     digitalWrite(LED, status_led);
//   }

//   if(digitalRead(BTOFF) == 0)
//   {
//     flag_botao_off = 1;

//   } else if (flag_botao_off == 1)
//   {
//     flag_botao_off = 0
//     status_led = 0;
//     digitalWrite(LED, status_led);
//   }

// })

