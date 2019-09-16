var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "sql124.main-hosting.eu",
  user: "u933428110_agus",
  password: "SANiSZULC8cs",
  database: "u933428110_apies"
});

var disconnect = function() {
  con.on('error', function(err) {
      if (!err.fatal) {
          return;
      }
      if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
          console.log("PROTOCOL_CONNECTION_LOST");
          throw err;
      }
      log.error("The database is error:" + err.stack);

      kfdb = mysql.createConnection({
        host: "sql124.main-hosting.eu",
        user: "u933428110_agus",
        password: "SANiSZULC8cs",
        database: "u933428110_apies"
      });
      disconnect();
  });
 };
 disconnect();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var sql = "SELECT * from usuarios";

  con.query(sql, function (err, result) {
    if (err) {
      next(err);
    }
    console.log("Result: " + JSON.stringify(result));
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
