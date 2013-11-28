var nconf = require('nconf');

// setup global config
nconf.argv()
     .env();

nconf.defaults({
  'NODE_ENV' : 'development',
  'PORT'     : 8998,
  'HOSTNAME' : '0.0.0.0',
  'PROTOCOL' : 'http' 
});

module.exports = nconf
