var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs'
})

connection.connect()

connection.query('SELECT * from voitures', (err, result, fields) => {
  if (err) throw err

  console.log(result)
})

connection.end()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:"NodeJs", h1:"Les voitures sur place", p:"Un site pour voir des voitures et ses characteristiques"});
});

module.exports = router;
