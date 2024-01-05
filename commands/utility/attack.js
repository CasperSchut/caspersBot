const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("attack")
		.setDescription("Attacks the current enemy."),
	async execute(interaction) {
		const userName = interaction.user.username;
		const database = require("../../models/guild");
		const dataRow = await database.findOne({ where: { userName: userName } });
		if (!dataRow) {
			interaction.reply("Please register yourself using `/stats` first.");
		}
		else {
			interaction.reply("Attack failed...");
		}
	},
};