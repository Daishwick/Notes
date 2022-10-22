var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require("body-parser");

var MongoClient = require("mongodb").MongoClient;
var mongo_url = "mongodb://localhost:27017/bluefish";

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(mongo_url, function (err, database) {
    if (err) {
        throw err;
    }

    const db = database.db("bluefish")

    app.post("/check_username", function (req, res) {
        var query = {
            $where: "this.username == '" + req.body.username + "'"
        };
    
        db.collection("users").findOne(query, function (err, user) {
            if (err) {
                return res.json({status: "ERR"});
            }
            if (user) {
                res.json({status: "OK", username: user.username});
            } else {
                res.json({status: "FAIL"});
            }
        }); 
    });

    app.post("/check_password", function (req, res) {
        var query = {
            username: req.body.username,
            password: req.body.password
        };
    
        db.collection("passwords").findOne(query, function (err, user) {
            if (err) {
                return res.json({status: "ERR"});
            }
            if (user) {
                res.json({status: "OK"});
            } else {
                res.json({status: "FAIL"});
            }
        }); 
    });

    app.post("/check_code", function (req, res) {
        db.collection("users").find({}).toArray(function(err, users) {
            if (err) {
                return res.json({status: "ERR"});
            }
            var found = false;
            users.forEach(function(user) {
                if (user.username == req.body.username && user.code == parseInt(req.body.code)) {
                    found = true;
                }
            });
            if (found) {
                return res.json({status: "OK"});
            } else {
                return res.json({status: "FAIL"});
            }
        }); 
    });

    app.listen(port);
    console.log("listening to port " + port);
});
