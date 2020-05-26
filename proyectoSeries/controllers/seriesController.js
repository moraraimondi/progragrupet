let db = require('../database/models/index'); // la base de datos
let bcrypt = require('bcryptjs');
let op = db.Sequelize.Op;

let seriesController = {
    home: function(req, res){
        res.render('home') //lleva a home
    },
    generos: function(req, res){
        res.render('seriesGenres')//lleva al listado de generos
    },
    buscador: function(req,res){
        res.render('buscador')// lleva al buscador
    },
    resultado: function(req,res){
        res.render('resultadoBusqueda')// lleva a los resultados de la busqueda
    },
    detalle: function(req, res){
        res.render('detalle') // lleva al detalle de una serie
    },
    porGenero: function(req,res){
        res.render('seriesByGenre')// lleva a las series por genero
    },
    login: function(req,res){
        res.render('login') // lleva al login
    },
    validar: function(req, res){ // crea el usuario con lo que se llena en el form
        let encriptada = bcrypt.hashSync(req.body.password, 10); //encripta los datos de la password
        let usuario ={ //toma los datos del form
            usuario: req.body.usuario,
            email: req.body.email,
            password: encriptada,
            birthday: req.body.birthday
        }
        db.Usuarios.create(usuario) // crea los usuarios en la bd
        res.redirect('/series/home') // te lleva a home cuando apretas el boton
    }
}

module.exports = seriesController;