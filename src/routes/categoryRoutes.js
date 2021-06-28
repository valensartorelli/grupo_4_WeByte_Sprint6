const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.list);
router.get('/detail/:id', categoryController.detail);
router.post('/buscar', categoryController.search);

// CRUD 
router.get('/add', categoryController.add);
router.post('/create', categoryController.create);

router.get('/edit/:id', categoryController.edit);
router.put('/update/:id', categoryController.update);

//router.get('/delete/:id', categoryController.delete);
router.delete('/destroy/:id', categoryController.destroy);

module.exports = router;