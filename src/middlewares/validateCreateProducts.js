const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('categoryId').notEmpty().withMessage('Tienes que elegir una categoria'),
	body('brandId').notEmpty().withMessage('Tienes que elegir una marca'),
	body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('description').notEmpty().withMessage('Tienes que escribir una descripcion'),
	body('extended_description').notEmpty().withMessage('Tienes que escribir una descripcion Ampliada'),
    body('price').notEmpty().withMessage('Tienes que escribir un precio'),
    body('colorId').notEmpty().withMessage('Tienes que elegir un color'),
	body('sizeId').notEmpty().withMessage('Tienes que elegir un talle'),
	body('stock').notEmpty().withMessage('Tienes que escribir una cantidad'),
	// body('image1').custom((value, { req }) => {
	// 	let file = req.file;
	// 	let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
	// 	if (!file) {
	// 		throw new Error('Tienes que subir una imagen');
	// 	} else {
	// 		let fileExtension = path.extname(file.originalname);
	// 		if (!acceptedExtensions.includes(fileExtension)) {
	// 			throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
	// 		}
	// 	}

	// 	return true;
	// }),
	body('visibilityId').notEmpty().withMessage('Tienes que elegir un estado')
]