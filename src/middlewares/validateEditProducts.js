const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('category').notEmpty().withMessage('Tienes que elegir una categoria'),
	body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('price').notEmpty().withMessage('Tienes que escribir un precio'),
    body('description').notEmpty().withMessage('Tienes que escribir una descripcion'),
    body('extended').notEmpty().withMessage('Tienes que escribir una descripcion Ampliada')

	
]