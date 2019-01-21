const Discord = require("discord.js");
const client = new Discord.Client();




client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("You",{type: 'listening'});
  
  });
  
client.login("NTM2OTc0NTczMzg4NjkzNTU0.DyegsQ.d3GvHOmc5R-RYItCxTHXmdb90yk")
