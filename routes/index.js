var express = require('express');
var router = express.Router();


const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'nodejs'
})

connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})
connection.query('SELECT * from voitures', (err, resultat, fields) => {
  if (err) throw err
  console.log(resultat)

})
connection.end()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
