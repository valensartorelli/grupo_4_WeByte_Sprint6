const express = require('express');
const router = express.Router();
const visibilityController = require('../controllers/visibilityController');

router.get('/', visibilityController.list);
router.get('/detail/:id', visibilityController.detail);
router.post('/buscar', visibilityController.search);

// CRUD 
router.get('/add', visibilityController.add);
router.post('/create', visibilityController.create);

router.get('/edit/:id', visibilityController.edit);
router.put('/update/:id', visibilityController.update);

//router.get('/delete/:id', brandController.delete);
router.delete('/destroy/:id', visibilityController.destroy);

module.exports = router;