const express = require('express');
const router = express.Router();
const sizeController = require('../controllers/sizeController');

router.get('/', sizeController.list);
router.get('/detail/:id', sizeController.detail);
router.post('/buscar', sizeController.search);

// CRUD 
router.get('/add', sizeController.add);
router.post('/create', sizeController.create);

router.get('/edit/:id', sizeController.edit);
router.put('/update/:id', sizeController.update);

//router.get('/delete/:id', brandController.delete);
router.delete('/destroy/:id', sizeController.destroy);

module.exports = router;