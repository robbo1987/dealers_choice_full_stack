const Sequelize = require("sequelize")
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_full_stack' )
const STRING = Sequelize.DataTypes.STRING

const Artist = db.define("artist", {
 name: {
     type:STRING,
     unique:true,
     allowNull: false,
     validate: {
         notEmpty: true
     }
 },
 period: {
     type: Sequelize.ENUM("High Renaissance","Late Renaissance", "Renaissance","Baroque","Modern")

 }   
})

const Museum = db.define("museum", {
    name: {
    type:STRING,
    unnique:true,
    allowNull:false,
    validate:{
        notEmpty:true
    }}



})

//express app

const express = require('express');
const app = express();
const path = require('path');


app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/artists', async(req,res,next) => {
    try{
        const artists = await Artist.findAll()
        res.send(artists)
    }
    catch(ex) {
        next(ex)
    }
})

app.delete('/api/artists/:id', async(req,res,next) => {
    try{
        const artist = await Artist.findByPk(req.params.id)
        await artist.destroy()
        res.sendStatus(204)
    }
    catch(ex) {
        next(ex)
    }
})


app.get('/api/museums', async(req,res,next) => {
    try{
        const museums = await Museum.findAll()
        res.send(museums)

    }
    catch(ex) {
        next(ex)
    }
})

const port = process.env.PORT || 3000;

//initiate function

const init = async() => {
try{
    await db.sync({force:true})
    const [Leonardo, MichelAngelo ,Raphael, Botticelli,Caravaggio,Donatello,Bellin,Modigliani,Uffizi,Accademia,Borghese,Bargello,Vatican,Castel] = await Promise.all([
        Artist.create({name:"Leonardo DaVinci", period:"High Renaissance"}),
        Artist.create({name:"Michaelangelo", period:"High Renaissance"}),
        Artist.create({name:"Raphael", period:"High Renaissance"}),
        Artist.create({name:"Botticelli", period:"Late Renaissance"}),
        Artist.create({name:"Carvaggio", period:"Renaissance"}),
        Artist.create({name:"Donatello", period:"Renaissance"}),
        Artist.create({name:"Bellini", period:"Renaissance"}),
        Artist.create({name:"Modigliani", period:"Modern"}),
        Museum.create({name:"Uffizi"}),
        Museum.create({name:"Accademia"}),
        Museum.create({name:"Borghese"}),
        Museum.create({name:"Bargello"}),
        Museum.create({name:"Vatican"}),
        Museum.create({name:"Castel Sant-Angelo"})
    ] )

    app.listen(port, ()=> console.log(`listening on port ${port}`));
}
catch(ex) {
   console.log(ex)
}

}

init()