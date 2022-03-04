var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');
const { body } = require('express-validator');

/** Validacion */
const validation = [
  body('nombre').notEmpty().withMessage('Debe ingresar un nombre'),
  body('color').notEmpty().withMessage('Debe ingresar un color'),
  body('email').notEmpty().withMessage('El Email debe ser valido'),
  body('edad').notEmpty().withMessage('Debe ingresar una edad'),
]

/* GET home page. */
router.get('/', mainController.index);

/* POST home page. */
router.post('/', validation, mainController.create);

module.exports = router;
