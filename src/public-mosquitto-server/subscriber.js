const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
  client.subscribe('/topic/UUID/presence', function (err) {
    console.log('subscribed')
  });

  client.subscribe('/topic/#', function (err) {
    console.log('subscribed')
  });
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic, message.toString())
})