var express = require('express');
const { response } = require('../app');

var router = express.Router();


var database = require('../views/db')



router.get('/', function(req, res, next) {

  database.query("Select * from voitures", function(error, data){
    
    if(error){
      throw error
    }else{
      console.log(data)
      res.render('info', { title: 'Liste des voitures', action: 'list', infoVoitures:data});
    }
  })

});

/* GET data */
router.get('/ajouter', function(req, res, next) {
  res.render('info', { title:"Ajouter une voiture dans la liste", action: 'ajouter'});
});

router.post("/ajouterVoiture", function(request,res,next){
  var nom = request.body.nomVoiture
  var annee = request.body.anneVoiture
  var modele = request.body.modeleVoiture
  console.log(nom)
  console.log(annee)
  console.log(modele)


  var requete = "insert into voitures(nom,annee,modele) values("+"'"+nom+"'"+","+"'"+annee+"'"+","+"'"+modele+"'"+")";
  database.query(requete, function(error, data){
    
    if(error){
      throw error
    }else{
      
          res.redirect('index', { title: 'Bienvenue dans le repertoire des voitures'});
        
    }});

  });



module.exports = router;