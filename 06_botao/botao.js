const LED = 26;
const BT = 25;


pinMode(LED, "output");
pinMode(BT, "input_pullup");

 setInterval(() =>{
     let status_botao = digitalRead(BT);

    if(status_botao == 0)
   {
        // console.log("LED ligado")
       digitalWrite(LED, 1);
     }else{
        // console.log("LED desligado")
        digitalWrite(LED, 0);
   }
 }, 100)
