<img src="https://cdn.discordapp.com/attachments/736431978227826688/892157736819765278/ShopifyInfo.png">

<p align="center"><img src="https://media.discordapp.net/attachments/949047428387074048/979719107379331082/unknown.png"></p>
<p align="center"><img src="https://img.shields.io/npm/v/discord-dashboard"> <img src="https://img.shields.io/github/repo-size/breftejk/Discord.js-Web-Dashboard"> <img src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-green.svg"> <img src="https://img.shields.io/github/contributors/breftejk/Discord.js-Web-Dashboard?color=green"> <img src="https://img.shields.io/badge/node.js-16.6.0+-blue"> <img src="https://img.shields.io/github/package-json/dependency-version/breftejk/Discord.js-Web-Dashboard/discord.js"> <img src="https://img.shields.io/github/package-json/dependency-version/breftejk/Discord.js-Web-Dashboard/express"> </p>
<p align="center"><a href="https://discord.gg/EfVn2uW23j"> <img src="https://discordapp.com/api/guilds/803034737261936670/widget.png" alt="Discord server"/></a></p>

# MTA STATUS BOT.

- Just a bot on Discord that gives you some information about your server and also makes it easy to know what's around it. This bot was developed using node.js offices - discord.js v12
- The bot is open source and available to everyone

# Requirement

- NodeJs v19 [Link Download](https://nodejs.org/en/)
- Discord Token. [Get it from Discord Developers Portal](https://discord.dev/)
- discord.js package [discord.js v12](https://discord.js.org/#/)
- [@discord/gamedig](https://www.npmjs.com/package/gamedig) package

# Installation

- `1` . Clone the repo by running
```
git clone https://github.com/vaxeus/mta-bot-status-discord
```
- `2` . After cloning edit your `config.json`
```
    {
        token: "your bot token", // to get token https://discord.dev/
        prefix: "your prefix" // ex: #
    }
```
- `3` . edit your server config `command/status.js`
```
    Gamedig.query({
        type: "mtasa", 
        host: "178.32.127.216", // your server ip address
        port: "22003", // your server port
    })
```
- `4` . install your package's
```
npm install
```
- `5` . start your bot
```
node .
```
