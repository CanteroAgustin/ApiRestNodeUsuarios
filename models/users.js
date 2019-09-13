var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var usuarios = new Schema({
  nombre:    { type: String },
  apellido:     { type: String },
  userName:  { type: String },
  password:   { type: String },
  rol:  { type: String },
  foto:  { type: String }
});

module.exports = mongoose.model('Usuarios', usuarios);