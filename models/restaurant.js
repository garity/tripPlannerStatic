const Sequelize = require('sequelize');
const dbConnection = require('./_db');

const Restaurant = dbConnection.define('restaurant', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cuisine: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
});

module.exports = Restaurant;