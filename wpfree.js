#!/usr/bin/env node

var program = require('commander'),
	config  = require('./config').config,
    nconf   = require('nconf');

nconf.file(config.confPath);

program
    .version('0.0.1');

program
    .command('init')
    .description('initial configuration of wpfree-cli')
    .action(function() {
        require('./setup').setup(config);
    });

program
    .command('list')
    .description('lists existing sites')
    .action(function(cmd) {
        require('./ssh-exec')(nconf, 'sudo ee site list');
    });

program
    .command('create <domain-name>')
    .description('run the given remote command')
    .action(function(cmd) {
        require('./ssh-exec')(nconf, 'sudo ee site create ' + cmd + ' --wpfc');
    });

program
    .command('test')
    .description('test for connectivity to WP Freedom server')
    .action(function(cmd) {
        require('./test-ssh')(nconf);
    });

program
    .command('*')
    .description('commang not found')
    .action(function(env) {
        program.help();
    });

program.parse(process.argv);
