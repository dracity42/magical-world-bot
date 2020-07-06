const fs = require("fs");
const path = require("path");

// Loads the bot
console.log("Loading client...");
const Discord = require("discord.js");
const client = new Discord.Client();

// loads modules into memory
let modules = new Object();
console.log("Loading modules into memory...");
fs.readdirSync("./modules/").forEach(moduleFileName => {
	let module = require(path.join(__dirname, "modules", moduleFileName));

	modules[moduleFileName] = module;
});

// Checks for unmet dependencies
console.log("Checking for unmet dependencies...");
let moduleKeys = Object.keys(modules);
moduleKeys.forEach(moduleKey => {
	let module = modules[moduleKey];
	if(!module.moduleDependencies) return;

	module.moduleDependencies.forEach(dependency => {
		if(!moduleKeys.includes(dependency)) throw `${moduleKey} is missing dependency ${dependency}`
	});
});

// After unmet dependencies are checked, injects them into client
console.log("Injecting modules into client...");
moduleKeys.forEach(moduleKey => {
	let runFunc = modules[moduleKey].run;

	if(runFunc) runFunc(client, modules);
});

console.log("Finished loading modules into client");
