const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middlewares/multerMiddlewareUser');

router.get('/', userController.list);
router.get('/detail/:id', userController.detail);

// CRUD 
router.get('/add', userController.add); // Muestra el formulario de alta
router.post('/create', upload.single('avatar'), userController.create); // Guarda el usuario

router.get('/edit/:id', userController.edit); // Muestra el formulario de edicion
router.put('/update/:id', upload.single('avatar'), userController.update); // Edita el usuario

router.delete('/delete/:id', userController.destroy); // Borra el usuario


module.exports = router;