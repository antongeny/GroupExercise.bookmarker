const express = require("express");
const app = express();

const { Bookmark, Category } = require("./db");

app.get("/", (req, res, next) => {
	//!create home page link
	res.redirect("./bookmarks");
});
app.get("/bookmarks", async (req, res, next) => {
	const bookmarks = await Bookmark.findAll({
		include: [Category],
	});
	res.send(`
	<body>
	${bookmarks
		.map(
			(Bookmark) => `
			<div>
			<ul>
			<li>

			<a href="${Bookmark.url}"><h1>${Bookmark.name}</h1></a>
			<a href="./categories/${Bookmark.categoryId}"><h3>${Bookmark.categoryId}</h3></a>
			<p>${Bookmark.url}</p>
			<li>
			</ul>
			</div>
			`
		)
		.join("")}
			</body>
			`);
});

app.get("/bookmarks/categories", async (req, res, next) => {
	const categories = await Category.findAll();
	const name = await req.params.name;
	res.send(`
		<body>
		<h1>Types of bookmark categories</h1>
		${categories
			.map(
				(Category) => `
				<div>
				<li>
				<a href="./categories/${Category.name}">${Category.name}</a>
				</li>

				</div>
				`
			)
			.join("")}
				</body>
				`);
});
app.get("/bookmarks/categories/:name", async (req, res, next) => {
	const name = await req.params.name;
	const targetBookmarks = await Bookmark.findAll({
		where: { categoryId: name },
	});

	res.send(`
		<body>
		<h1>Bookmark Category: ${name}</h1>
			<a href="/bookmarks/categories">back</a>
			${targetBookmarks
				.map(
					(bookmark) => `
						<div>
							<li>
							<a href="${bookmark.url}">${bookmark.name}</a>
							</li>

						</div>
					`
				)
				.join("")}
		</body>
	`);
});

// app.get("/posts/:id", (req, res) => {
// 	const post = postBank.find(req.params.id);
// 	res.send(postDetails(post));
// });

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Connected to PORT: ${PORT}`);
});
