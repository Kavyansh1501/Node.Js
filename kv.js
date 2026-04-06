var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2743',
    database: 'hello'
});
connection.connect();
app.post('/data', function (req, res) {

    var name = req.body.name;
    var department = req.body.department;
    var salary = req.body.salary;

    connection.query("INSERT INTO `emp` (name,department,salary) VALUES (?,?,?)", [name, department, salary], function (err, result) {
        if (err) throw err;

        console.log("1 record inserted");
    });

    res.send({ name: name, department: department, salary: salary, status: "success" });

});
app.listen(5000, function () {
    console.log("listening");
});