const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");

const database = sequelize.define("tags", {
	userName: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	userHP: Sequelize.INTEGER,
});

module.exports = database;