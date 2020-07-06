const fs = require("fs");
const path = require("path");

// Paths to main config file
const configDirectory = "./configs/";
const primaryConfigFileName = "config.js";

// Loads the configs and modules into eventMap
console.log("Parsing configs...");

global.eventMap = new Array();

fs.readdir(configDirectory, (error, fileNames) => {
	if(error) throw "There was an error reading the config folder";
	if(!fileNames.includes(primaryConfigFileName)) throw "Could not find config.js";

	let config = require(path.join(configDirectory, primaryConfigFileName));
	
	config.moduleConfig.forEach(moduleConfig => {
		if(!moduleConfig.enabled || !moduleConfig.enabled == true) return;

		let module = require(path.join(configDirectory, moduleConfig.entry));

		module.run(require(path.join(configDirectory, moduleConfig.config)));
	});
});
