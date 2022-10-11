var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:"Lab 04", h1:"Me superbe Apllication Express", p:"Les membre de l\'équipe est : felix alberto"});
});

module.exports = router;
