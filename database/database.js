const Sequelize = require("sequelize");
const sequelize = new Sequelize("database", "user", "password", {
	dialect: "sqlite",
	host: "localhost",
	storage: "./db.sqlite",
	logging: false,
});

module.exports = sequelize;
