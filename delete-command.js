require("dotenv").config();
const { REST, Routes } = require("discord.js");

const rest = new REST().setToken(process.env.TOKEN);

// change "commandId" to the actual command id before running script

// for guild-based commands
rest.delete(Routes.applicationGuildCommand(process.env.ID, process.env.GUILDID, "commandId"))
	.then(() => console.log("Successfully deleted guild command"))
	.catch(console.error);

// for global commands
rest.delete(Routes.applicationCommand(process.env.ID, "commandId"))
	.then(() => console.log("Successfully deleted application command"))
	.catch(console.error);