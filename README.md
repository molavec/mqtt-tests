# MQTT tests

Multiple test to get started with MQTT.

## Public Mosquitto Server

This test offer most simple test to start with MQTT:

* It use public `https://test.mosquitto.org/` server
* client.js - publish 2 topics
* client_2.js - publish same 2 topics that client.js to demonstrate that many devices can publish same topic.
* subscriber.js - subscribe to general `/topic`

Ejecute in different terminal
```bash
node client.js
```

```bash
node subscriber.js
```


## Docker Mosquitto

This test offer most simple test to start with MQTT:

* It use Docker mosquito server.
* client_2.js - publish same 2 topics that client.js to demonstrate that many devices can publish same topic.
* subscriber.js - subscribe to general `/topic`

Up Server:
```bash
docker compose up -d
```

Ejecute in different terminal
```bash
node client.js
```

```bash
node subscriber.js
```

