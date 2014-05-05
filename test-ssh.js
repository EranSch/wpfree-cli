module.exports = function(nconf){

  var Connection = require('ssh2'),
      clc        = require('cli-color');

  var c = new Connection();

  c.on('ready', function() {
    c.exec('sudo ee system status', function(err, stream) {
      if (err) throw err;
      stream.on('data', function(data, extended) {
        console.log((extended === 'stderr' ? 'STDERR: ' : '') + data);
      });
      stream.on('exit', function(code, signal) {
        c.end();
      });
    });
  });

  c.on('error', function(err) {
    console.log(clc.red.bold('Connection error\n' + err));
  });

  c.on('close', function(had_error) {
    console.log(clc.bold('Connection Closed'));
  });

  c.connect({
    host:         nconf.get('server:host'),
    port:         nconf.get('server:port'),
    username:     nconf.get('server:user'),
    privateKey:   require('fs').readFileSync(nconf.get('server:key'))
  });
  
};