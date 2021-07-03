const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.get('/', addressController.list);
router.get('/detail/:id', addressController.detail);

// CRUD 
router.get('/add', addressController.add);
router.post('/create', addressController.create);

router.get('/edit/:id', addressController.edit);
router.put('/update/:id', addressController.update);

//router.get('/delete/:id', addressController.delete);
router.delete('/destroy/:id', addressController.destroy);

module.exports = router;