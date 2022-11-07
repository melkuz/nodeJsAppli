var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:"NodeJs", h1:"Les voitures sur place", p:"Un site pour voir des voitures et ses characteristiques"});
});

module.exports = router;
