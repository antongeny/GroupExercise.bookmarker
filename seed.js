const { db, Bookmark, Category } = require("./db");

const seedDb = async () => {
	await db.sync({ force: true, logging: false });

	const coding = await Category.create({
		name: "coding",
	});

	const search = await Category.create({
		name: "search",
	});

	const jobs = await Category.create({
		name: "jobs",
	});

	const google = await Bookmark.create({
		name: "Google",
		url: "https://www.google.com/",
		categoryId: search.name,
	});

	const pokemon = await Bookmark.create({
		name: "Pokémon",
		url: "https://www.pokemon.com/us/",
		categoryId: jobs.name,
	});
};

seedDb();
