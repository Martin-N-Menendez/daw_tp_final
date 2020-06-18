var PORT=3000;
var express = require('express');
var app = express();
var mysql = require('./mysql');
app.use(express.json()); // para parsear application/json
app.use(express.static('.')); // para servir archivos estaticos


// Tipo = 0 -> nada
// Tipo = 1 -> lamparas (en el json figuran como tipo 0)
// Tipo = 2 -> persianas (n el json figuran como tipo 1)
// Tipo = 3 -> persianas (n el json figuran como tipo 2)


app.get('/devices', function(req, res, next) {

    var tipo = '';

    switch (req.query.filter)       // De esta forma todos los botones particulares van a un caso y el "todos" termina en default que no agrega nada al query
    {
        case '0':
            tipo = ' WHERE type=0';     // Lamparas
            break;
        case '1':
            tipo = ' WHERE type=1';     // Persianas
            break;
        case '2':
            tipo = ' WHERE type=2';     // Veladores
            break;    
        default:                        // Todos
            break;
    }

    mysql.query('SELECT * FROM Devices ' + tipo , function (err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta).status(200);
    });
});

app.post('/devices', function(req, res, next) {

    console.log(req.body);

    st=0;
    if(req.body.state)
        st=1;

    id = req.body.id.split("_")[1]; // viene dev_xx

    mysql.query('UPDATE Devices SET state=? WHERE id=?', [st, id], function(err, rta, field) {
        if (err) {
            res.send(err).status(400);server
            return;
        }
        res.send(JSON.stringify(req.body));
    });
});


app.listen(PORT, function(req, res) {
    console.log("API funcionando en el puerto "+PORT);
});