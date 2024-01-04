const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("stats")
		.setDescription(
			"Presents the stats of this user. Adds a new user, if this command is used for the first time.",
		),
	async execute(interaction) {
		const { EmbedBuilder } = require("discord.js");
		const userAvatar = interaction.user.displayAvatarURL();
		const exampleEmbed = new EmbedBuilder()
			.setColor(0x78c0df)
			.setTitle("Title")
			.setDescription("Description")
			.setThumbnail(userAvatar)
			.addFields(
				{ name: "Title", value: "Content" },
			);
		interaction.reply({ embeds: [exampleEmbed] });
	},
};