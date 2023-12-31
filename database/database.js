const Sequelize = require("sequelize");
const sequelize = new Sequelize("database", "user", "password", {
	dialect: "sqlite",
	host: "localhost",
	storage: "../database/database.sqlite",
	logging: false,
});

module.exports = sequelize;
