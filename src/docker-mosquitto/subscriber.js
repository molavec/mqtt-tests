const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://192.168.43.179', { port: 1883 })

client.on('connect', function () {
  console.log('connected');
  client.subscribe('/topic/UUID/presence', function (err) {
    console.log('subscribed')
  });

  client.subscribe('/topic/#', function (err) {
    console.log('subscribed')
  });
})

client.on("error", function (error) {
  console.log(error)
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic, message.toString())
})