var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "sql124.main-hosting.eu",
  user: "u933428110_agus",
  password: "SANiSZULC8cs",
  database: "u933428110_apies"
});

setInterval(function () {
  con.query('SELECT 1');
}, 5000);

/* GET users listing. */
router.get('/', function (req, res, next) {
  var sql = "SELECT * from usuarios";

  con.query(sql, function (err, result) {
    if (err) {
      next(err);
    }
    console.log("Invocacion por Get, Result: " + JSON.stringify(result));
    res.send(result);
  });
});

/* GET users listing. */
router.post('/', function (req, res, next) {
  var body = {
    nombre: req.body.nombre, apellido: req.body.apellido, userName: req.body.userName, password: req.body.password,
    rol: req.body.rol, documento: req.body.documento, foto: req.body.foto
  }

  con.query('INSERT INTO usuarios SET ?', body, function (err, result) {
    if (err) {
      next(err);
    }
    console.log("Result: " + JSON.stringify(result));
    res.send(result);
  });
});

module.exports = router;
