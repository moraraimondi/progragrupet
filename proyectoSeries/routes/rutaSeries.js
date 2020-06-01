var express = require('express');
var router = express.Router();
let seriesController = require('../controllers/seriesController'); 
let reseniasController = require('../controllers/reseniasController');
/* GET home page. */
router.get('/home', seriesController.home);
router.get('/generos', seriesController.generos);
router.get('/buscador', seriesController.buscador);
router.get('/resultado', seriesController.resultado);
router.get('/detalle', seriesController.detalle);
router.post('/detalle', seriesController.nuevaReview);
router.get('/porGenero', seriesController.porGenero);
router.get('/login', seriesController.login); //MUESTRA el login
router.post('/login', seriesController.crearUsuario);
router.get('/perfil', seriesController.perfil);

//router.get('/usuarios', seriesController.usuarios);
//router.get('/buscadorUsuarios', seriesController.resultadoUsuarios);

router.get('/misResenias', seriesController.misReseniasLogin);
router.post('/misResenias', seriesController.misResenias);

router.get('/lista', reseniasController.listaResenias);
router.get('/mejores', reseniasController.mejores);
router.get('peores', reseniasController.peores);
router.get('recientes', reseniasController.recientes);

module.exports = router;
