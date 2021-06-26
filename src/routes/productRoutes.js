const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../middlewares/multerMiddleware');

router.get('/', productController.list);
router.get('/detail/:id', productController.detail);
router.post('/buscar', productController.search);

// CRUD 
router.get('/add', productController.add);
router.post('/create', productController.create);

router.get('/edit/:id', productController.edit);
router.put('/update/:id', productController.update);

router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.destroy);

module.exports = router;