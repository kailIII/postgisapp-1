var express = require('express');
var router = express.Router();
var path = require('path');

var pgcrud = require('./pgcrud.js');

router.post('/api/v1/todos', function(req, res) {

    // Grab data from http request
    var data = {name: req.body.name, geog: req.body.geog};

    pgcrud.create(data,res);
});

router.get('/api/v1/todos', function(req, res) {

    pgcrud.read(res);

});

router.put('/api/v1/todos/:todo_id', function(req, res) {

    // Grab data from http request
    var data = {name: req.body.name, geog: req.body.geog, id: req.params.todo_id};

    pgcrud.update(data,res);

});

router.delete('/api/v1/todos/:todo_id', function(req, res) {

    // Grab data from the URL parameters
    var id = req.params.todo_id;

    pgcrud.delete(id,res);

});

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

module.exports = router;
