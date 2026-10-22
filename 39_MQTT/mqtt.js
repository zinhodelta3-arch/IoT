const POT = 35;

//a parte
const POTR = 34;
const POTG = 36;
const POTB = 39;

const LED = 17;

//a parte
const LEDR= 27;
const LEDG = 13;
const LEDB = 23;

pinMode(LED, "output");

//a parte
pinMode(LEDR, "output");
pinMode(LEDG, "output");
pinMode(LEDB, "output");

//obs= "a parte" = eu q decidir colocar a mais

//--------------------------------------------------------------------------------------\\
//config do WI-FI :)
//--------------------------------------------------------------------------------------\\
const WIFI_SSID = "WIFI_IOT"; 
const WIFI_PASS = "WIFI_IOT";
const MQTT_BROKER = "10.189.87.230"
const MQTT_ID = "ESP32 do kvoazin0001"

let wifi = require("Wifi");
let mqtt = require("MQTT").create(MQTT_BROKER, {client_id: MQTT_ID})
wifi.connect(WIFI_SSID, {password: WIFI_PASS});

wifi.on("connected", () =>{
    console.log("Wi-Fi conectado :)");
    console.log("conctando-se ao MQTT");
    mqtt.connect();
    //obs: foi o professor que colocou essa carinha dessa vez :)
})

wifi.on("disconnected", () =>{
    console.log("Wi-Fi desconectado :(");
    console.log("Conectando-se novamente...")
    wifi.connect(WIFI_SSID, {password: WIFI_PASS});
    //obs: foi o professor que colocou essa carinha dessa vez :)
})

//------------------------------------------------------------------------\\
mqtt.on("connected", () =>{
    console.log("MQTT conectado :)");
    //obs: foi o professor que colocou essa carinha dessa vez :)
})

mqtt.on("disconnected", () =>{
    console.log("MQTT desconectado :(");
    console.log("Conectando-se novamente...")
    mqtt.connect();
    //obs: foi o professor que colocou essa carinha dessa vez :)
})

mqtt.publish(led, "padrao")0000000

setInterval(() =>
{
    let valorPot = analogRead(POT);
    
    let valorPotR = analogRead(POTR);
    let valorPotG = analogRead(POTG);
    let valorPotB = analogRead(POTB);
    analogWrite(LED, valorPot);

    analogWrite(LEDR, valorPotR);
    analogWrite(LEDG, valorPotG);
    analogWrite(LEDB, valorPotB);

    /* console.log("Brilho do LED: " + (valorPot*100).toFixed(0) + "%") */
}
)
