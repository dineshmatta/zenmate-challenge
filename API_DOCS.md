## API Endpoints

### `/nodes`

<http://js-challenge.zenmate.io/nodes/>

Returns a list of nodes (servers) with the following attributes:

- __id__ (string) the identifier of the node (can be used as a public name)
- __country__ (string) the country that the server is located in
- __online__ (boolean) if the public can connect to that node

#### Example return value:
```
[
  {
    "id": "de01",
    "country": "Germany",
    "online": true
  },
  {
    "id": "de02",
    "country": "Germany",
    "online": true
  },
  ...
  {
    "id": "us01",
    "country": "United States",
    "online": false
  },
  ...
  {
    "id": "hk03",
    "country": "Hong Kong",
    "online": false
  }
]
```

### `/nodes/:id`

<http://js-challenge.zenmate.io/nodes/de01>

Returns details on a specific node by id. The attributes are similar to above with some additions:

- __id__ (string) the identifier of the node (can be used as a public name)
- __country__ (string) the country that the server is located in
- __online__ (boolean) if the public can connect to that node
- __premium__ (boolean) if true, only premium users can connect to that node
- __load__ (int) the current load in percent. Load is the amount of connections that a node currently channels relative to the maximum it can handle.
- __load_history__ (array[int]) historical data on the load of that node. holds up to 2000 integers, if that many are available. statistics are collected every 5 seconds so 2000 elements in this array would cover about 10000 seconds of uptime/downtime

#### Example return value:
```
{
  "id": "de01",
  "country": "Germany",
  "online": true,
  "premium": true,
  "load": 70,
  "load_history": [
    68,
    70,
    69,
    78,
    ...
    63,
    70
  ]
}
```

#### Errors:

- __404 - Resource not found__ if the node id doesn't exist

### `/events`

<http://js-challenge.zenmate.io/events>

Returns a list of noticeable events that we want to make our users aware of. Event attributes are

- __node__ (object) a node object containing the same attributes as in the `/nodes` endpoint
- __type__ (string) the type of message, signaling what changed, can be "online"|"offline", "free"|"premium" or "high load"
- __message__ (string) the actual message from the server
- __date__ (string) a badly formatted datetime string

#### Example return value:
```
[
  {
    "node": {
      "id": "hk01",
      "country": "Hong Kong",
      "online": true
    },
    "type": "high load",
    "message": "hk01 is experiencing a surge in traffic.",
    "date": "2015-07-21T14:50:16.894300962+02:00"
  },
  {
    "node": {
      "id": "de05",
      "country": "Germany",
      "online": true
    },
    "type": "free",
    "message": "de05 has become a free node",
    "date": "2015-07-21T14:49:37.894174293+02:00"
  }
]
```
