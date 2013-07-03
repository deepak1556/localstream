var localstream = require('localstream');

localstream.set("bar", foo);
localstream.get("bar")

localstream.on('storage', function(data) {
    console.log(data);
});

localstream.end();