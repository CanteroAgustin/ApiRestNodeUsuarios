"# ApiRestNodeUsuarios" 

ObtenerUsuarios:
GET http://localhost:3000/users

Insertar Usuario
POST http://localhost:3000/users
header: "Content-Type" "application/x-www-form-urlencoded"
body: {"key":"name","value":[name],"description":"","type":"text","enabled":true},{"key":"apellido","value":"[apellido]","description":"","type":"text","enabled":true},{"key":"userName","value":"[userName]","description":"","type":"text","enabled":true},{"key":"password","value":"[password]","description":"","type":"text","enabled":true},{"key":"rol","value":"[rol]","description":"","type":"text","enabled":true},{"key":"documento","value":"[documento]","description":"","type":"text","enabled":true},{"key":"foto","value":"\"\"","description":"","type":"text","enabled":true}
