const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

const upload = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateCreateProducts');

router.get('/', productController.list);
router.get('/cart', productController.cart);
router.get('/detail/:id', productController.detail);
router.get('/search', productController.search);



// CRUD 
router.get('/add', productController.add);
router.post('/create', upload.fields([{name: 'image1'}, {name: 'image2'}, {name: 'image3'}, {name: 'image4'}, {name: 'image5'}]), validations, productController.create);

router.get('/edit/:id', productController.edit);
router.put('/update/:id', upload.fields([{name: 'image1'}, {name: 'image2'}, {name: 'image3'}, {name: 'image4'}, {name: 'image5'}]), productController.update);

router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.destroy);

router.get('/:category', productController.list);

module.exports = router;