const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const dir = './directory';
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (!(message.content.startsWith(config.prefix))) 
    { return; }

    message.content.toLowerCase;
    msg = message.content.toLowerCase();

    number = -1;
    folder = -1;

    
    for (var i = 0; i < config.folder.length; i++) {
        if (msg === config.prefix + config.folder[i]) {
            folder = i;
            fs.readdir('./' + config.folder[i], (err, files) => {
                number = files.length;
                imageNumber = Math.floor(Math.random() * number) + 1;
                console.log(imageNumber);
                message.channel.send ({files: ["./" + config.folder[folder] + "\\" + imageNumber + ".png"]} )
            });
            break;
        }
    }
    
});

client.login(config.token);