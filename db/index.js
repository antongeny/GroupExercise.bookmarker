const Sequelize = require("sequelize");
const DB_URL = process.env.DB_URL || "postgres://localhost:5432/bookmarker";
const db = new Sequelize(DB_URL);

const Category = db.define("Category", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

const Bookmark = db.define("bookmark", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	url: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	categoryId: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

Category.hasMany(Bookmark);
Bookmark.belongsTo(Category);

module.exports = {
	db,
	Bookmark,
	Category,
};
