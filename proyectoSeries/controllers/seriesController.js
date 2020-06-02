let db = require('../database/models/index'); // la base de datos
let bcrypt = require('bcryptjs');
let op = db.Sequelize.Op;
let moduloLogin = require('../modulo-login');

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
    detalle: function(req,res){
        var id_serie = req.query.serieId
        db.reviews.findAll({
          where:{
              idseries: id_serie,
          },
          include: [{
           association: "usuarios"
          }]
        })
        .then(function(reviews){     
            console.log(reviews);
           
        
          var id_serie = req.query.serieId
        res.render("detalle", {reviews: reviews, id_serie: id_serie})
        })
      }, 
    porGenero: function(req,res){
        res.render('seriesByGenre')// lleva a las series por genero
    },
    login: function(req,res){
        res.render('login') // lleva al login
    },
    crearUsuario: function(req, res){ // crea el usuario con lo que se llena en el form
        let encriptada = bcrypt.hashSync(req.body.password, 10); //encripta los datos de la password
        let usuario ={ //toma los datos del form
            usuario: req.body.usuario,
            email: req.body.email,
            password: encriptada,
            birthday: req.body.birthday
        }
        console.log(usuario);
        
        db.usuarios.create(usuario) // crea los usuarios en la bd
        res.redirect('/series/home') // te lleva a home cuando apretas el boton
    },
    perfil: function(req, res){
        res.render('perfilResenias')
    },
    nuevaReview: function(req,res){
        moduloLogin.validar(req.body.email, req.body.password)
        .then(resultado=> {        
            if(resultado != null){
                let id_usuarios = resultado.id_usuarios
                let review = {
                    idseries: req.body.id_serie,
                    id_usuarios: id_usuarios,
                    rating: req.body.score,
                    texto: req.body.comment,
                    createdAt: db.sequelize.literal("CURRENT_DATE"),
                    updatedAt: db.sequelize.literal("CURRENT_DATE"),
                  }
                  console.log(review)
                  db.reviews.create(review)
                res.redirect('/series/detalle?serieId=' + req.body.id_serie)
          } else{
            return res.send("error")
          }
          })
    },
    misReseniasLogin: function(req,res){
        res.render('misReseniasLogin')
    },
    misResenias: function(req,res){
        moduloLogin.validar(req.body.email, req.body.password)
        .then(function(resultado){
            let id_usuarios = resultado.id_usuarios
            return id_usuarios
        }) 
        .then(function(id_usuarios){
            let reviews = db.reviews.findAll({
                where:{
                    id_usuarios: id_usuarios,
                },
             })
             return reviews
        })
        .then(function(reviews){
            res.render('misResenias', {reviews:reviews})
        })
    },
    editar: function(req,res){
        let idreviews = req.query.idReview
        res.render("editar", {idreviews: idreviews})
    },
    confirmarEdit: function(req,res){
        moduloLogin.validar(req.body.email, req.body.password)
        .then(function(resultado){
            if(resultado != null){
            id = req.body.idreviews;
            db.reviews.update({
            texto: req.body.texto,
            rating: req.body.rating,
            updatedAt: db.sequelize.literal("CURRENT_DATE"),
        },
        {
            where: {idreviews: id}
        })
        .then(function(){
            res.redirect("/series/misResenias")
        })
            }else{
                res.render("editar")
            }
        }) 
    },
    borrar: function(req,res){
        moduloLogin.validar(req.body.email, req.body.password)
        .then(function(resultado){
            if(resultado != null){
            id = req.body.idreviews;
            db.reviews.destroy(
        {
            where: {idreviews: id}
        })
        .then(function(){
            res.redirect("/series/misResenias")
        })
            }else{
                res.render("borrar")
            }
        }) 
    },
    borrarLogIn: function(req,res){
        let idreviews = req.query.idReview
        res.render("borrar", {idreviews: idreviews})
    },
    usuarios: function(req,res){
        res.render('buscadorUsuarios')
    },
    resultadoUsuarios: function(req,res){
        db.usuarios.findAll({
            where: {
                [op.or]: [
                    {email: {[op.like]: '%' + req.query.searchUser + '%'}},
                    {usuario: {[op.like]: '%' + req.query.searchUser + '%'}}
                ]
            }
        })
        .then(function(resultado){
            if (resultado.length >0) {
                console.log(resultado);
                
                res.render('resultadoUsuarios', {resultado:resultado})
            } else {
                res.render('resultadosFail')
            }
        })
    },
    detalleUsuarios: function(req,res){
        let id = req.query.userId
        db.usuarios.findOne({
            where:{
                id_usuarios: id,
            },
            include: [{
             association: "reviews"
            }]
          })
          .then(function(usuario){     
              console.log(usuario)         
          res.render("perfilResenias", {usuario: usuario})
          })
    },

    

}

module.exports = seriesController;