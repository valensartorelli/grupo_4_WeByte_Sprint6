const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');

router.get('/', brandController.list);
router.get('/detail/:id', brandController.detail);
router.post('/buscar', brandController.search);

// CRUD 
router.get('/add', brandController.add);
router.post('/create', brandController.create);

router.get('/edit/:id', brandController.edit);
router.put('/update/:id', brandController.update);

//router.get('/delete/:id', brandController.delete);
router.delete('/destroy/:id', brandController.destroy);

module.exports = router;