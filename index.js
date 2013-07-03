var stream = require('stream');
var util = require('util');

function LocalStream(cb) {
    var me = this;
    stream.Stream.call(this);
    this.readable = true;
    this.writable = true;
    if(cb) {
	this.cb = cb;
    }
    me.ls = new localStorage();
    me.ls.on('storage', function(res) {
	this.emit('storage', res);
    })
}

util.inherits(LocalStream, stream.Stream);

LocalStream.prototype.get = function(data) {
    this.ls.getItem(data);
}

LocalStream.prototype.set = function() {
    this.ls.setItem(data, value);
}

LocalStream.prototype.remove = function() {
    this.ls.removeItem(data);
} 

LocalStream.prototype.end = function() {
    this.emit('end');
}

module.exports = function(cb) {
    return new LocalStream(cb);
}

module.exports.LocalStream = LocalStream;