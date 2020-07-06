const Discordjs = require("discord.js");

const client = new Discordjs.Client();

client.on("guildMemberAdd", (member) => {
	let welcomeMessage = `Welcome <@${member.id}> :)`;
	client.guilds.cache.get("720959499917197382").channels.cache.get("721342821545803836").send(welcomeMessage);
});

client.on("message", (message) => {
	if(message.author.id == "195275473024974849"){
		if(message.content.startsWith(">testEvent")){
			let temp = message.content.split(" ");

			let eventName = temp[1];
			let target = temp[2];

			eval(`client.emit("${eventName}", ${target})`);
		}
	}
});

client.login("");
