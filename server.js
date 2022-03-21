const {Artist, Museum, db} = require ("./db")

//express app

const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use("/dist", express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/api/artists", async (req, res, next) => {
  try {
    const artists = await Artist.findAll();
    res.send(artists);
  } catch (ex) {
    next(ex);
  }
});

app.delete("/api/artists/:id", async (req, res, next) => {
  try {
    const artist = await Artist.findByPk(req.params.id);
    await artist.destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/museums", async (req, res, next) => {
  try {
    const museums = await Museum.findAll();
    res.send(museums);
  } catch (ex) {
    next(ex);
  }
});



//initiate function

const init = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all([
      Artist.create({ name: "Leonardo DaVinci", period: "High Renaissance", birthday:"April 15, 1452" }),
      Artist.create({ name: "Michaelangelo", period: "High Renaissance",birthday:"March 6, 1475" }),
      Artist.create({ name: "Raphael", period: "High Renaissance",birthday:"April 15, 1452" }),
      Artist.create({ name: "Botticelli", period: "Late Renaissance",birthday:"Unknown Date, 1483"}),
      Artist.create({ name: "Carvaggio", period: "Renaissance",birthday:"September 29, 1571" }),
      Artist.create({ name: "Donatello", period: "Renaissance",birthday:"December 13, 1466" }),
      Artist.create({ name: "Bellini", period: "Renaissance",birthday:"Unknown Date, 1430" }),
      Artist.create({ name: "Modigliani", period: "Modern",birthday:"Jul 12, 1884" }),
      Museum.create({ name: "Uffizi" }),
      Museum.create({ name: "Accademia" }),
      Museum.create({ name: "Borghese" }),
      Museum.create({ name: "Bargello" }),
      Museum.create({ name: "Vatican" }),
      Museum.create({ name: "Castel Sant-Angelo" }),
    ]);

    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
