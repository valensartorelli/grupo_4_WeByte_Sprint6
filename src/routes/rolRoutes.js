const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');

router.get('/', rolController.list);
router.get('/detail/:id', rolController.detail);

// CRUD 
router.get('/add', rolController.add);
router.post('/create', rolController.create);

router.get('/edit/:id', rolController.edit);
router.put('/update/:id', rolController.update);

//router.get('/delete/:id', rolController.delete);
router.delete('/destroy/:id', rolController.destroy);


module.exports = router;