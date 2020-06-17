var PORT=3000;
var express = require('express');
var app = express();
var mysql = require('./mysql');
app.use(express.json()); // para parsear application/json
app.use(express.static('.')); // para servir archivos estaticos


// Tipo = 0 -> nada
// Tipo = 1 -> lamparas (en el json figuran como tipo 0)
// Tipo = 2 -> persianas (n el json figuran como tipo 1)


app.get('/devices', function(req, res, next) {
    mysql.query('SELECT * FROM Devices', function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta).status(200);
    });
});
app.get('/devices/:id', function(req, res, next) {
    mysql.query('SELECT * FROM Devices WHERE id=?', [req.params.id], function(error, respuesta, field) {
        if (error) {
            res.send(error).status(400);
            return;
        }
        res.send(respuesta);
    });
});

app.get('/lamparas', function (req, res, next) {
    mysql.query('SELECT * FROM Devices WHERE type=0', function (err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta).status(200);
    });
});

app.get('/persianas', function (req, res, next) {
    mysql.query('SELECT * FROM Devices WHERE type=1', function (err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta).status(200);
    });
});

app.get('/veladores', function (req, res, next) {
    mysql.query('SELECT * FROM Devices WHERE type=2', function (err, rta, field) {
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
            res.send(err).status(400);
            return;
        }
        res.send(JSON.stringify(req.body));
    });
});


app.listen(PORT, function(req, res) {
    console.log("API funcionando en el puerto "+PORT);
});