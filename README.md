localstream
===========

```javascript

npm install localstream
```

use html5 localstorage with node stream api

```javascript

var ls = require('localstream');
```

```ls``` is a stream and speaks stream events: ```storage```, ```error``` and ```end```. that means you can pipe storage to anything that accepts streams, such as an XHR.

##Example

```javascript

ls.on('storage', function(data){
  console.log(data);    
})

ls.on('error', function(err){
  console.log(err);
})

ls.set("key", value);
ls.get("key");
```
