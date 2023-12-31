const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("addtag")
		.setDescription("Adds a tag."),
	async execute(interaction) {
		const tagName = interaction.options.getString("name");
		const tagDescription = interaction.options.getString("description");

		try {
			const Sequelize = require("sequelize");
			const sequelize = new Sequelize("database", "user", "password", {
				host: "localhost",
				dialect: "sqlite",
				logging: false,
				storage: "database.sqlite",
			});
			const Tags = sequelize.define("tags", {
				name: {
					type: Sequelize.STRING,
					unique: true,
				},
				description: Sequelize.TEXT,
				username: Sequelize.STRING,
				usage_count: {
					type: Sequelize.INTEGER,
					defaultValue: 0,
					allowNull: false,
				},
			});
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