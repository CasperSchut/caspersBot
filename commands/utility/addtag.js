const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("addtag")
		.setDescription("Adds a tag.")
		.addStringOption((option) => option.setName("name").setDescription("Sets the name of the tag."))
		.addStringOption((option) => option.setName("description").setDescription("Sets the description of the tag.")),
	async execute(interaction) {
		const tagName = interaction.options.getString("name");
		const tagDescription = interaction.options.getString("description");
		const Tags = require("../../models/guild");

		try {
			const tag = await Tags.create({
				name: tagName,
				description: tagDescription,
				username: interaction.user.username,
			});

			return interaction.reply(`Tag ${tag.name} added.`);
		}
		catch (error) {
			if (error.name === "SequelizeUniqueConstraintError") {
				return interaction.reply("That tag already exists.");
			}

			return interaction.reply("Something went wrong with adding a tag.");
		}
	},
};