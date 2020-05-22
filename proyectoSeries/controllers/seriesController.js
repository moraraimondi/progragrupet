let seriesController = {
    home: function(req, res){
        res.render('home')
    },
    generos: function(req, res){
        res.render('seriesGenres')
    },
    buscador: function(req,res){
        res.render('buscador')
    },
    resultado: function(req,res){
        res.render('resultadoBusqueda')
    },
    detalle: function(req, res){
        res.render('detalle')
    },
    porGenero: function(req,res){
        res.render('seriesByGenre')
    },
}

module.exports = seriesController;