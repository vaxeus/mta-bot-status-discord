const Discord = require("discord.js");
const Gamedig = require("gamedig");

module.exports = {
  name: "status",
  run(client, message, args) {
    Gamedig.query({
	type: "mtasa",
      host: "178.32.127.216",
      port: "22003",
    })
      .then((state) => {
        if (state["raw"]["numplayers"] === 0) {
          let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(state["name"])
            .addField("Status:", "Online", true)
            .addField(
              "Players:",
              state["raw"]["numplayers"] + "/" + state["maxplayers"],
              true
            )
          message.channel.send({ embed });
        } else {
          let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(state["name"])
            .addField("Status", "Online", true)
            .addField(
              "Players",
              state["raw"]["numplayers"] + "/" + state["maxplayers"],
              true
            )
          message.channel.send({ embed });
        }
      })
      .catch((error) => {
        let embed = new Discord.MessageEmbed()
          .setColor("RED")
          .setTitle(state["name"])
          .addField("Status:", "Offline")
		  .addField(
              "Players",
              state["raw"]["numplayers"] + "/" + state["maxplayers"],
              true
            )
        message.channel.send({ embed });
      });
  },
};
