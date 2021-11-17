# mta-bot-status-discord
بوت عرض معلومات سيرفر ل لعبة mta
https://cdn.discordapp.com/attachments/746051407836217474/786896575142035526/unknown.png
# How to configure bot?

> npm i discord.js
> npm i gamedig

# How to link bot to file?

config.json

{
token: "",
prefix: ""
}

# How do I run the bot?

node index.js

# How do I connect my server to a bot

command/status.js

    Gamedig.query({
	type: "mtasa",
      host: "178.32.127.216", // عنوان الخادم
      port: "22003", // بورت حق الخادم
    })

# All rights reserved by `natural.#4171`

https://discord.gg/ez7wy2EUdG
