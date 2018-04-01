var express = require('express');
var router = express.Router();
// Make sure to Google mongoose when looking for resources
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({ github: String });
// Mongoose gives us an object that has properties we
// can use to talk to the database.
var Student = mongoose.model('Student', StudentSchema, 'students');

// POST Route
router.post('/', function (req, res) {
    console.log(req.body);
    var studentToAdd = new Student(req.body);
    studentToAdd.save(function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    }); // END SAVE
}); // END POST Route

// GET Route
router.get('/', function (req, res) {
    Student.find({}, function (err, foundStudents) {
        if (err) {
            console.log("ERROR! : ", err);
            res.sendStatus(500);
        } else {
            res.send(foundStudents);
        }
    }); // END FIND
}); // END GET Route

// DELETE Route
router.delete('/:studentId', function (req, res) {
    Student.remove({_id: req.params.studentId}, function(err, data) {
        if (err) {
            console.log('err', err);
            res.sendStatus(500);
        } else {
            console.log('deleted');
            res.sendStatus(200);
        }
    });
});

module.exports = router;