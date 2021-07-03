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
router.post('/create', upload.single('image'), validations, productController.create);

router.get('/edit/:id', productController.edit);
router.put('/update/:id', upload.single('image'), productController.update);

router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.destroy);

module.exports = router;