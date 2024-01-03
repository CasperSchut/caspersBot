const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("stats")
		.setDescription(
			"Presents the stats of this user. Adds a new user, if this command is used for the first time.",
		),
	async execute(interaction) {
		const { codeBlock } = require("../../functions/codeBlock");
		const msg = codeBlock("fix", "Hallo");
		await interaction.reply(msg);
	},
};