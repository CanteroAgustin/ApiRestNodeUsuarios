var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "sql124.main-hosting.eu",
  user: "u933428110_agus",
  password: "SANiSZULC8cs",
  database: "u933428110_apies"
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  var sql = "SELECT * from usuarios";

  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log("Result: " + JSON.stringify(result));
    res.send(result);
    res.end();
  });
  req.abort();
});

/* GET users listing. */
router.post('/', function (req, res, next) {
  var body = {
    nombre: req.body.nombre, apellido: req.body.apellido, userName: req.body.userName, password: req.body.password,
    rol: req.body.rol, documento: req.body.documento, foto: req.body.foto
  }

  con.query('INSERT INTO usuarios SET ?', body, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log("Result: " + JSON.stringify(result));
    res.send(result);
    res.end();
  });
  req.abort();
});

module.exports = router;
