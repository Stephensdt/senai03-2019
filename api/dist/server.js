"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mysql_factory_1 = require("./mysql_factory");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
var port = 3000;
app.get('/cidades', function (req, res) {
    res.send([
        {
            "id": 1,
            "name": "Jaraguá do Sul"
        },
        {
            "id": 2,
            "name": "Joinville"
        },
        {
            "id": 3,
            "name": "Blumenau"
        },
        {
            "id": 4,
            "name": "Pomerode"
        },
    ]);
});
app.get('/bairros/:id', function (req, res) {
    var list = [];
    var values = [
        {
            "id": 1,
            "codCidade": 1,
            "name": "Jaraguá 99",
            "value": 1.5
        },
        {
            "id": 2,
            "codCidade": 1,
            "name": "BARRA",
            "value": 2.5
        },
        {
            "id": 3,
            "codCidade": 2,
            "name": "BJ01",
            "value": 3.5
        },
        {
            "id": 4,
            "codCidade": 2,
            "name": "BJ02",
            "value": 4.5
        },
        {
            "id": 5,
            "codCidade": 3,
            "name": "Bb01",
            "value": 5.5
        },
        {
            "id": 6,
            "codCidade": 3,
            "name": "Bb02",
            "value": 6.5
        },
        {
            "id": 7,
            "codCidade": 4,
            "name": "BP01",
            "value": 5.5
        },
        {
            "id": 8,
            "codCidade": 4,
            "name": "BP02",
            "value": 6.5
        }
    ];
    values.map(function (i) {
        if (i.codCidade == req.params.id) {
            list.push(i);
        }
    });
    res.send(list);
});
/*
app.get('/tamanhos', function (req, res) {
    res.send([
        {
            "id": 1,
            "name": "Pequeno",
            "quantidade_sabores": 1
        },
        {
            "id": 2,
            "name": "Médio",
            "quantidade_sabores": 2
        },
        {
            "id": 3,
            "name": "Grande",
            "quantidade_sabores": 3
        },
    ]);
});

app.get('/sabores/:id', function (req, res) {
    
    let sabores: any[] = [];

    if (req.params.id == 1){
        sabores = [ {
            "sabor": "Calabresa",
            "preco": 12
        },
        {
            "sabor": "Quatro Queijos",
            "preco": 15
        },
        {
            "sabor": "Bacon",
            "preco": 13
        },
        {
            "sabor": "Chocolate",
            "preco": 14
        },
        {
            "sabor": "Brocolis",
            "preco": 16
        }];
    }

    if (req.params.id == 2){
        sabores = [ {
            "sabor": "Calabresa",
            "preco": 14
        },
        {
            "sabor": "Quatro Queijos",
            "preco": 18
        },
        {
            "sabor": "Bacon",
            "preco": 15
        },
        {
            "sabor": "Chocolate",
            "preco": 16
        },
        {
            "sabor": "Brocolis",
            "preco": 19
        }];
    }

    if (req.params.id == 3){
        sabores = [ {
            "sabor": "Calabresa",
            "preco": 19
        },
        {
            "sabor": "Quatro Queijos",
            "preco": 21
        },
        {
            "sabor": "Bacon",
            "preco": 17
        },
        {
            "sabor": "Chocolate",
            "preco": 19
        },
        {
            "sabor": "Brocolis",
            "preco": 20
        }];
    }
    

    res.send(sabores);
});
*/
//app.post("/logon", function(req, res){
//if (req.body.userName == 'admin' && req.body.password == '1234'){
//console.log("entrou sucesso");
//res.status(200).send(
//      {
//            userName : req.body.userName,
//              password : req.body.password
//            }
//            );
//} else {
//  console.log("entrou 401");
//    res.status(401).send({});
//  }
//});
app.post("/logon", function (req, res) {
    var sql = 'select * from login where login.usuario = \'' + req.body.userName + '\' and login.senha = \'' + req.body.password + '\'';
    console.log(sql);
    new mysql_factory_1.MySQLFactory().getConnection().select(sql).subscribe(function (data) {
        console.log(data);
        if (!data.length || data.length != 1) {
            res.status(401).send('fodeuse');
            return;
        }
        res.send({
            userName: req.body.userName,
            password: req.body.password
        });
    }, function (error) {
        console.log(error);
        res.status(404).send('Ferrou');
    });
});
app.post("/usuario", function (req, res) {
    var sql = 'insert into usuario(nome, senha) values(\'' + req.body.userName + '\', \'' + req.body.password + '\')';
    console.log(sql);
    new mysql_factory_1.MySQLFactory().getConnection().select(sql).subscribe(function (data) {
        console.log(data);
        res.send({
            isvalid: true,
        });
    }, function (error) {
        console.log(error);
        res.status(404).send('Ferrou');
    });
});
app.get("/tamanhos", function (req, res) {
    var sql = 'select * from tamanhos';
    console.log(sql);
    new mysql_factory_1.MySQLFactory().getConnection().select(sql).subscribe(function (data) {
        console.log(data);
        res.send(data);
    }, function (error) {
        console.log(error);
        res.status(404).send('Ferrou');
    });
});
app.get("/sabores/:idTamanho", function (req, res) {
    var sql = 'select sabores.sabor, sabores.preco from sabores where sabores.idTamanho = \'' + req.params.idTamanho + '\';';
    console.log(sql);
    new mysql_factory_1.MySQLFactory().getConnection().select(sql).subscribe(function (data) {
        console.log(data);
        res.send(data);
    }, function (error) {
        console.log(error);
        res.status(404).send('Ferrou');
    });
});
app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
});
