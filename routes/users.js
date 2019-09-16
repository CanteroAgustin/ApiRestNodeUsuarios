var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "sql124.main-hosting.eu",
  user: "u933428110_agus",
  password: "SANiSZULC8cs",
  database: "u933428110_apies"
});

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

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
