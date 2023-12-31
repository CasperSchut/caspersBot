const Sequelize = require("sequelize");
const sequelize = require("../database/database");

module.exports = sequelize.define("guild", {
	id: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	welcomeChannelId: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	welcomeRoleId: {
		type: Sequelize.STRING,
		allowNull: true,
	},
});
