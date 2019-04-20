// random image folder to discord bot
// jake tanda

const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const dir = './directory';
const client = new Discord.Client();

// Ready up the bot.
client.once('ready', () => {
    console.log('Ready!');
});

// When a user messages in the discord channel
client.on('message', message => {
    // return if a command is not being called
    if (!(message.content.startsWith(config.prefix))) 
    { return; }

    // convert command to lowercase
    message.content.toLowerCase;
    msg = message.content.toLowerCase();

    // instantiate variables
    number = -1; // number of items in the folder
    folder = -1; // the number of the folder in the folder array in config.json

    // loop to find the proper folder for the command
    for (var i = 0; i < config.folder.length; i++) {
        // if the command matches the current folder
        if (msg === config.prefix + config.folder[i]) {
            folder = i; // set the folder number to the current folder
            
            // get the number of files in the folder.
            fs.readdir('./' + config.folder[i], (err, files) => {
                number = files.length; // set the number of files to the number variable
                imageNumber = Math.floor(Math.random() * number) + 1; // random integer of the images in the folder.
                message.channel.send ({files: ["./" + config.folder[folder] + "\\" + imageNumber + ".png"]} ) // attach the random png to the channel
            });
            break;
        }
    }
});

// login the bot
client.login(config.token);
