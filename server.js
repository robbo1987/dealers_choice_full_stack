const Sequelize = require("sequelize")
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_full_stack' )

const Artist = db.define("artist", {
 name: {
     type: Sequelize.DataTypes.STRING,
     unique:true,
     allowNull: false,
     validate: {
         notEmpty: true
     }
 }   
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

const port = process.env.PORT || 3000;

//initiate function

const init = async() => {
try{
    await db.sync({force:true})
    const artists = ['Leonardo daVinci', 'MichelAngelo' , 'Raphael', 'Botticelli','Caravaggio','Donatello', 'Bellin','Modigliani'] 
    await Promise.all(artists.map(name => Artist.create({name}) ))
    app.listen(port, ()=> console.log(`listening on port ${port}`));
}
catch(ex) {
    console.log(ex)
}

}

init()