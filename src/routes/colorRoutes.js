const express = require('express');
const router = express.Router();
const colorController = require('../controllers/colorController');

router.get('/', colorController.list);
router.get('/detail/:id', colorController.detail);
router.post('/buscar', colorController.search);

// CRUD 
router.get('/add', colorController.add);
router.post('/create', colorController.create);

router.get('/edit/:id', colorController.edit);
router.put('/update/:id', colorController.update);

router.get('/delete/:id', colorController.delete);
router.delete('/delete/:id', colorController.destroy);

module.exports = router;