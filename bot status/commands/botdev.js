const Discord = require("discord.js");

module.exports = {
  name: "bot",
  async run(client, message, args) {
    let embed = new Discord.MessageEmbed()

      .setColor("RED")
	  .addField("Bot name :", `${client.user.tag}`,true)
	  .addField("developed by :", "<@721037514667720811>",true)
	  .addField("Server :", "https://discord.gg/AawhAQMYjb",true)
    message.channel.send(embed);
  },
};