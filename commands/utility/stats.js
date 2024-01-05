const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("stats")
		.setDescription(
			"Presents the stats of this user. Adds a new user, if this command is used for the first time.",
		),
	async execute(interaction) {
		const { codeBlock } = require("../../functions/codeBlock");
		const userName = interaction.user.username;
		const database = require("../../models/guild");
		const dataRow = await database.findOne({ where: { userName: userName } });

		if (!dataRow) {
			await database.create({
				userName: interaction.user.username,
				userHP: 30,
			});
			const msg = codeBlock("fix", `Hello ${interaction.user.username}\nYou have been added to our database!\nYou have 30 HP.`);
			await interaction.reply(msg);
		}
		else {
			const userHP = dataRow.get("userHP");
			const msg = codeBlock("fix", `${interaction.user.username}\n${userHP} HP`);
			await interaction.reply(msg);
		}

	},
};