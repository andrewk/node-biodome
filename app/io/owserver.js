var owjs = require('owjs')
  , conf = require('../../config/app')

var OwserverIO = function(deviceAddress) {
  var self = this;
  self.deviceAddress = deviceAddress;
  self.client = new owjs.Client({host: conf.get('owserver_ip')});

  this.read = function(callback) {
    self.client.read(self.deviceAddress, function(err, result) {
      callback(err, result);
    });
  };

  this.write = function(value, callback) {
    self.client.write(self.deviceAddress, value, function(err, result) {
      callback(err, result);
    });
  }
};

module.exports = OwserverIO;
