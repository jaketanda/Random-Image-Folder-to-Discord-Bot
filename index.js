// random image folder to discord bot
// jake tanda

const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const client = new Discord.Client();

// Ready up the bot.
client.once('ready', () => {
    console.log('Ready!');
});

// When a user messages in the discord channel
client.on('message', message => {
    // return if a command is not being called
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    // split command into command and arguments
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // instantiate variables
    var number = -1; // number of items in the folder
    var folder = -1; // the number of the folder in the folder array in config.json

    // loop to find the proper folder for the command
    for (var i = 0; i < config.folder.length; i++) {
        // if the command matches the current folder
        if (command === config.folder[i] || command === "random") {
            if (command === "random")
            { i = Math.floor(Math.random() * config.folder.length); } // set it to a random folder.

            folder = i; // set the folder number to the current folder
            
            // get the number of files in the folder.
            fs.readdir('./' + config.folder[i], (err, files) => {
                number = files.length; // set the number of files to the number variable

                if (!args.length || command === "random")
                { imageNumber = Math.floor(Math.random() * number) + 1; } // random integer of the images in the folder.
                else // specific image in the folder.
                { 
                    imageNumber = args[0] * 1; 
                    if (imageNumber > number)
                    { return message.channel.send("Possible arguments: " + config.prefix + command + " [1-" + number + "]."); }
                } 

                console.log(imageNumber);
                message.channel.send ({files: ["./" + config.folder[folder] + "\\" + imageNumber + ".png"]} ) // attach the random png to the channel
            });
            return;
        }
    }
});

// login the bot
client.login(config.token);
