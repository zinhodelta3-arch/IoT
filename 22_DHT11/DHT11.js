const DHT_PIN = 27;

const LED = 26;

let dht = require("dht11.js").connect(DHT_PIN);

pinMode(LED, "output");
//TOPIC
const DHT_TOPIC = "kvoa/dht"
//--------------------------------------------------------------------------------------\\
//config do WI-FI e MQTT:)
//--------------------------------------------------------------------------------------\\
const WIFI_SSID = "WIFI_IOT"; 
const WIFI_PASS = "WIFI_IOT";
const MQTT_BROKER = "10.189.87.230"
const MQTT_ID = "ESP32 do kvoazin0001";
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
// \----------------------------------------------------------------------------------/
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


mqtt.on("message", (topic, message) =>
{
    console.log(topic + ":" + message);

    if(topic == DHT_TOPIC){
        console.log("Temperatura: ", temp, "\n", "umidade: ", um);
    }
})

setInterval(() =>{
let temp = dht.readTemperature();
let um = dht.readHumidity();
let message = "T: " + temp + ", " + "U: " + um;
console.log("Temperatura: ", temp, "\n", "umidade: ", um);

mqtt.publish(DHT_TOPIC, message);

if(um > 67)
{
    digitalWrite(LED, 1)
}
else
{
    digitalWrite(LED, 0)
}

}, 1000)