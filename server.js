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

app.post("/api/artists", async (req,res,next) => {
  try{
        res.status(201).send( await Artist.Create({name:req.body.name}))
  }
  catch(ex){
    next(ex)
  }
})

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
      Museum.create({ name: "Uffizi", address:"Piazzale degli Uffizi, 6, 50122 Firenze FI, Italy" }),
      Museum.create({ name: "Accademia",address:"Via Ricasoli, 58/60, 50129 Firenze FI, Italy" }),
      Museum.create({ name: "Borghese", address:'Piazzale Scipione Borghese, 5, 00197 Roma RM, Italy'}),
      Museum.create({ name: "Bargello",address:'Via del Proconsolo, 4, 50122 Firenze FI, Italy' }),
      Museum.create({ name: "Vatican", address: "Vatican City, Vatican" }),
      Museum.create({ name: "Castel Sant-Angelo", address:'Lungotevere Castello, 50, 00193 Roma RM, Italy' }),
    ]);

    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
