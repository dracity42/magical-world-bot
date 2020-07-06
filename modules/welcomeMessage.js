exports.config = {
	channelSelector: (member) => {
		return member.guild.channels.cache.find(x => x.name == "general");
	},
	message: (channel, member) => {
		return `Welcome to the server <@${member.id}> :)`
	}
},

exports.moduleDependencies = [
	"login.js",
];

exports.run = (client, modules) => {
	client.on("guildMemberAdd", (member) => {
		let channel = exports.config.channelSelector(member);
		let message = exports.config.message(channel, member);

		channel.send(message);
	});
};

