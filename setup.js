module.exports = function(nconf) {

    var fs 		  = require('fs-extra'),
        clc    	  = require('cli-color'),
        prompt    = require('prompt'),
        newConfig = function(){ 

        	var props  = [
        			{
        				name: 'host',
        				message: 'Server Hostname'
        			},
        			{
        				name: 'user',
        				message: 'Remote Username'
        			},
        			{
        				name: 'port',
        				message: 'SSH Port'
        			},
        			{
        				name: 'key',
        				message: 'Path to RSA Key'
        			}
        		];

        	console.log(clc.green.bold('WP Freedom CLI Configuration'));

        	prompt.start();

        	prompt.get(props, function (err, result) {
        	  if (err) throw err;
        	  nconf.set('server:host', result.host);
        	  nconf.set('server:user', result.user);
        	  nconf.set('server:port', result.port);
        	  nconf.set('server:key', result.key);
        	  nconf.save();
        	});        	

        };

        prompt.message = "[wpfree-cli] ".green;


    fs.exists(nconf.stores.file.file, function(exists) {
        if (!exists) {
            fs.outputJson(nconf.stores.file.file, {name: 'wp-free local configfiguration'}, function(err){
            	if (err) throw err;
        		newConfig();
            });
        }else{
        	fs.readJson(nconf.stores.file.file, function(err, data) {
        	  console.log(clc.green.bold('Current Configuration below.'));
        	  console.dir(data);
        	  prompt.start();
        	  prompt.get([{
        	  	name: 'reconfigure',
        	  	message: 'Do you want to reset wpfree-cli\'s configuration [Y/N]'.red
        	  }], function(err, res){
        	  	if (err) throw err;
        	  	if(res.reconfigure == 'y' || res.reconfigure == 'Y'){
        	  		fs.remove(nconf.stores.file.file, function(err){
        	  			if (err) throw err;
        	  			newConfig();
        	  		});
        	  	}
        	  });
        	});
        }
    });    
};