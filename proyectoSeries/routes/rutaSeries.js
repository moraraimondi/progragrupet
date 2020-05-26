var express = require('express');
var router = express.Router();
let seriesController = require('../controllers/seriesController'); 
/* GET home page. */
router.get('/home', seriesController.home);
router.get('/generos', seriesController.generos);
router.get('/buscador', seriesController.buscador);
router.get('/resultado', seriesController.resultado);
router.get('/detalle', seriesController.detalle);
router.get('/porGenero', seriesController.porGenero);
router.get('/login', seriesController.login); //MUESTRA el login
router.post('/login', seriesController.validar);

module.exports = router;
