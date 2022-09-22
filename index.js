const { Bookmark, Category } = require("./db");

const express = require("express");
const app = express();

app.get("/", async (req, res, next) => {
	res.send("Hello World");
});
// app.get("/", async (res, req, next) => {
// 	const bookmarks = await Bookmark.findAll({
// 		include: [Category.id],
// 	});
// 	res.send(`
//     <body>
//             ${bookmarks
// 							.map(
// 								(Bookmark) => `
//           <div>
//             <h2>${Bookmark.name}</h2>
//             <h3>${Bookmark.categoryId}</h3>
//             <p>${Bookmark.url}</p>
//           </div>
//       `
// 							)
// 							.join("")}
//     </body>
//   `);
// });

const PORT = 3000;

app.listen(PORT, (test) => {
	console.log(`Connected to: https://localhost:${PORT}`);
});
