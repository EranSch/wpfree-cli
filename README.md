wpfree-cli
==========

A CLI interface for managing sites and deployments on the WP Freedom platform. 

**Not quite ready for mainstream currently. If you wish to use this now, you'll need to make sure you've got [EasyEngine](https://rtcamp.com/easyengine/) installed on your server and a user configured for SSH'ing into the server with a private key AND said user will need NOPASSWD declared when sudo'ing the `ee` command. Like I said, this project will need a while before it's ready for mainstream :)**


##WP Freedom
WP Freedom is currently in the early stages of conception. WP Freedom is a deployment and hosting platform that can be installed and run on your personal server or VPS. The platform is optimized specifically for hosting multiple WordPress sites and is backed with modern tools for account managment, diff-backups, staging, and deployments. 


##Usage
Currently, this tool should just be run as `node wpfree.js` although you can leave off the ".js". Eventually this will be ready for global installation via `npm -g` but we're not there yet. Here's how to get the most out of your wpfree-cli experience: 

1. *ProTip:* Set up an alias in your shell so you don't have to type `node wpfree` all the time while we're in development. I went with `wpfree` :)
2. `node wpfree init` to configure settings for the remote server
3. `node wpfree test` to ensure configuration details are solid. 
4. `node wpfree create <example.com>` to build and enable a new WordPress site on your remote server. 
5. More to come soon :)

##`wpfree --help`
```

  Usage: wpfree [options] [command]

  Commands:

    init                   initial configuration of wpfree-cli
    list                   lists existing sites
    create <domain-name>   run the given remote command
    test                   test for connectivity to WP Freedom server
    *                      command not found

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```

##Goals
- ~~Persist local configuration~~
- ~~Issue commands to remote server via SSH~~
- View site backups
- Clone remote site to local directory, import into Vagrant env
- Push local site to remote
- Deploy new site from local
- Duplicate remote site to remote staging

##Contribution
I would absolutely welcome any assistence on this project as well as the WP Freedom platform. I'm a student and a freelancer so I've limited time to work on this passion project. That said, please contact me if you wish to join the crew or, if nothing else, pull requests are always welcome :)
