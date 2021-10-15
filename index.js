// random image folder to discord bot
// jake tanda

const { Client, Intents } =  require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift();

    if (fs.readdirSync('./files/').includes(command)) {
        fs.readdir('./files/' + command, (err, files) => {
            folderSize = files.length;

            // Get selected image number
            if (!args.length) {
                imageNumber = Math.floor(Math.random() * folderSize) + 1;
            } else {
                imageNumber = args[0];

                // Invalid image number
                if (imageNumber > folderSize || imageNumber < 1) { 
                    return message.channel.send("Possible arguments: " + config.prefix + command + " [1-" + folderSize + "]."); 
                }
            }

            message.channel.send ({files: ["./files/" + command + "\\" + files[imageNumber-1]]} )
        });
    }
});

client.login(config.token);
