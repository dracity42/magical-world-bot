exports.run = (localConfig) => {

	moduleMap.push({
		eventName: "message",
		callback: (message) => {
			console.log("a message was sent!");
		}
	});

};
