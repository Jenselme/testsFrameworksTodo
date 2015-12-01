var express = require('express');
var bodyParser = require("body-parser");
var monk = require('monk');
var db = monk('localhost:27017/todos');
var todos = db.get('todos');

var app = express();
app.use(bodyParser.json());
app.use(allowCrossDomains);

function allowCrossDomains(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


app.get('/todo/:id', function (req, res) {
    var id = req.params.id.toString();

    if (isIdValid(id)) {
        todos.findById(id).then(function (todo) {
            if (todo) {
                res.send(todo);
            } else {
                res.send('No todo found with id: ' + id, 404);
            }
        }, function () {
            res.send('Server error', 500);
        });
    }
});

function isIdValid (id) {
    return typeof id === 'string' && id.length === 24;
}


app.get('/todos', function (req, res) {
    todos.find({}).then(function (todos) {
        res.send(todos);
    }, function (e) {
        res.send('Server error', 500);
    });
});


app.delete('/todo/:id', function (req, res) {
    var id = req.params.id;

    if (isIdValid(id)) {
        todos.remove({_id: id}).then(function () {
            res.send({result: 'Successfully removed ' + id});
        }, function () {
            res.send('Server error', 500);
        })
    } else {
        res.send('No todo found with id: ' + id, 404);
    }
});

app.post('/todo', function (req, res) {
    var todo = req.body;
    var now = Date.now();
    todo.modificationDate = now;
    todo.creationDate = now;

    if (!('title' in todo) || !('status' in todo)) {
        res.statusCode = 400;
        res.end('Invalid todo supplied. title and status field are mandatory.\n'
            + JSON.stringify(todo));
    } else {
        todos.insert(todo).then(function (todo) {
            res.send(todo);
        }, function () {
            res.send('Server error', 500);
        });
    }
});


app.post('/todo/:id', function (req, res) {
    var id = req.params.id;
    var todo = req.body;
    todo.modificationDate = Date.now();
    if (isIdValid(id)) {
        todos.updateById(id, {$set: todo}).then(function (code) {
            if (!code) {
                res.send('No todo found with id: ' + id, 404);
            } else {
                res.send({result: 'Updated ' + id});
            }
        }, function () {
            res.send('Server error', 500);
        });
    } else {
        res.send('No todo found with id: ' + id, 404);
    }
});


app.listen(8888);
