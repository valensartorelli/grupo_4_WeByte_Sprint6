const express = require('express');
const router = express.Router();

//const controladorHome = require('../controller/homeController');

//router.get('/', controladorHome.listar);

router.get('/', function(req, res, next) {
    res.render('index');
  });
  router.get('/admin', function(req, res, next) {
    res.render('admin');
  });


module.exports = router;