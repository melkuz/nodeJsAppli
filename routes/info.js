var express = require('express');
const { response } = require('../app');

var router = express.Router();


var database = require('../views/db')



router.get('/', function(req, res, next) {
  var select = "Select * from voitures";
  database.query(select, function(error, data){
    if(error){
      throw error
    }else{
      res.render('info', { title: 'Liste des voitures', action: 'list', sampleData:data})
    }
  })
  res.render('info', { title:"NodeJs", h1:"Les voitures sur place", p:"Un site pour voir des voitures et ses characteristiques"});
});

/* GET data */
router.get('/ajouter', function(req, res, next) {
  res.render('index', { title:"NodeJs", h1:"Les voitures sur place", p:"Un site pour voir des voitures et ses characteristiques"});
});

module.exports = router;1