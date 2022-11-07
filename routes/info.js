var express = require('express');
const { response } = require('../app');

var router = express.Router();


var database = require('../views/db')



router.get('/', function(req, res, next) {

  database.query("Select * from voitures", function(error, data){
    console.log(data)
    if(error){
      throw error
    }else{
      
      res.render('info', { title: 'Liste des voitures', action: 'list', infoVoitures:data.rows});
    }
  })

});

/* GET data */
router.get('/ajouter', function(req, res, next) {
  res.render('info', { title:"Ajouter une voiture dans la liste", action: 'ajouter'});
});

router.post("/ajouterVoiture", function(request,res,next){
  console.log(request.body)
  var nom = request.body.nomVoiture
  var annee = request.body.anneeVoiture
  var modele = request.body.modeleVoiture
  console.log(nom)
  console.log(annee)
  console.log(modele)


  var requete = "insert into voitures(nom,annee,modele) values("+"'"+nom+"'"+","+"'"+annee+"'"+","+"'"+modele+"'"+")";
  database.query(requete, function(error, data){
    
    if(error){
      throw error
    }else{
      
          res.redirect('/');
        
    }});

  });



module.exports = router;