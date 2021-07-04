const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middlewares/multerMiddlewareUser');
const authMiddleware = require('../middlewares/authMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const validationLogin = require('../middlewares/validateLogin');
const guestMiddleware = require('../middlewares/guestMiddleware');

router.get('/', userController.list);

router.get('/login', guestMiddleware, userController.login);
// Procesar el login
router.post('/login', validationLogin, userController.loginProcess);
// Perfil de Usuario, 
router.get('/profile/', authMiddleware, userController.profile);
// Logout
router.get('/logout/', userController.logout);
router.get('/detail/:id', authMiddleware, userController.detail);  //  Profile

// CRUD 
router.get('/add', guestMiddleware, userController.add); // Muestra el formulario de registracion
router.post('/create', upload.single('avatar'), validations, userController.create); // Guarda el usuario

router.get('/edit/:id', authMiddleware, userController.edit); // Muestra el formulario de edicion 
router.put('/update/:id', upload.single('avatar'), userController.update); // Edita el usuario

router.delete('/delete/:id', userController.destroy); // Borra el usuario


module.exports = router;