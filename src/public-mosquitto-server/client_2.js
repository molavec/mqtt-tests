
const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    setInterval(() => {
      client.publish('/topic/DUID/presence', 'Client 2');
      client.publish('/topic/3333/presence', 'Client 2 - 3333');

    }, 3000);
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})