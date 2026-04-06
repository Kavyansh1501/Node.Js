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
app.post('/update', function (req, res) {

    var name = req.body.name;
    var department = req.body.department;
    var salary = req.body.salary;

    if (!name || !department || !salary) {
        return res.status(304).json({
            status: "error",
            message: "Missing required fields"
        });
    }
    connection.query(
        "UPDATE emp SET department=?, salary=? WHERE name=?",
        [department, salary, name],
        function (err, result) {
            if (err) {
                return res.status(500).json({
                    status: "error",
                    message: err.message
                });
            }
            res.status(200).json({
                status: "success",
                name,
                department,
                salary
            });
        }
    );
});

app.post('/delete', function (req, res) {

    var name = req.body.name;
    var department = req.body.department;
    var salary = req.body.salary;

    connection.query("DELETE FROM `emp` WHERE name=?", [name], function (err, result) {
        if (err) throw err;

        console.log("1 record deleted");
    });

    res.send({ name: name, department: department, salary: salary, status: "success" });

});

app.post('/read', function (req, res) {

    var name = req.body.name;
    var department = req.body.department;
    var salary = req.body.salary;

    connection.query("SELECT * FROM `emp` WHERE name=?", [name], function (err, result) {
        if(err){
            return res.send("error occurred");
        }
        if (result.length === 0) {
           console.log("No record found");
           return res.send("no record found");

        }
        console.log("1 record found");

    res.send({ name: name, department: department, salary: salary, input: "success" });
    });

});


app.listen(3000, function () {
    console.log("listening");
});