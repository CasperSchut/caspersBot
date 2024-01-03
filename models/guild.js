const Sequelize = require("sequelize");
const sequelize = require("../database/database");

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
		allowNull: true,
	},
});

module.exports = Tags;