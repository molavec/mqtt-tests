const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    setInterval(() => {
      client.publish('/topic/DUID/presence', Math.random().toString(36));
      client.publish('/topic/3333/presence', Math.random().toString(36));

    }, 3000);
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})