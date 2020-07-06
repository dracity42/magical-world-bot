exports.config = {
	loggedInMessage: (client) => {
		return `Succesfully logged in as ${client.user.username}#${client.user.discriminator} running on ${client.guilds.cache.size} server(s)`
	},
	getToken: () => {
		return "INSERT TOKEN HERE BETWEEN THE QUOTES";
	}
};

exports.moduleDependencies = new Array();

exports.run = (client) => {
	client.on("ready", () => {
		console.log(exports.config.loggedInMessage(client));
	});
	client.login(exports.config.getToken());
};
