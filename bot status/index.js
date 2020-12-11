const Discord = require("discord.js");
const { token, prefix } = require("./config.json");
const client = new Discord.Client();
const fs = require("fs");
client.prefix = prefix;
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
const http = require("http");
const express = require("express");
const app = express();
const Gamedig = require("gamedig");
let playersSize;


for (const file of commandFiles) { 
  const command = require(`./commands/${file}`); // by : zef

  client.commands.set(command.name, command); // by : zef
}

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`); // by : zef
	client.user.setActivity('Developer : ! Pé , mm0.#0007', { type: 'PLAYING' }) // by : zef
 });

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return; // by : zef
  const args = message.content.slice(prefix.length).trim().split(/ +/); // by : zef
  const command = args.shift().toLowerCase(); // by : zef
  if (!client.commands.has(command)) return; // by : zef

  try {
    client.commands.get(command).run(client, message, args); // by : zef
  } catch (error) {
    console.error(error); // by : zef
    message.reply("حدث خطأ أثناء محاولة تشغيل هذا الأمر!"); // by : zef
  }
});


client.login(token);
