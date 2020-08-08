# Random Image Folder to Discord Bot (RIFtDB)
Discord bot for randomly loading images from different folders.

## Setup
1. Edit config.json to include your bot's specific token.
2. Change the names of the testfolders to whatever is desired -- these will be the command names. 
  There can be an unlimited amount of folders. 
3. Add/set the names of the folders to config.json under the 'folder' array.
4. Add your .png image files to the folders. They must be named as numbers sequentially starting from 1.
5. Install [node.js](https://nodejs.org/en/).
5. Install the required packages by running `npm install`.
6. Add the bot to your server using [this link](https://discordapi.com/permissions.html).
7. `node index.js`
8. Enjoy!

## Commands
- `![foldername]` - attaches a random image from the folder in the directory of index.js.
- `![foldername] [int]` - attaches a specific image from the folder specified by config.json
- `!random` - attaches a random image from every possible folder specified by config.json

## Known issue
- The commands ARE case sensitive, so make sure you type the command exactly how the folder is written.
