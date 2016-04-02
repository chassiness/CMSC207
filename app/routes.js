/**
 * Created by chassiness on 3/11/16.
 */
var Employee = require('./models/employee');

module.exports = function(app) {

    /******EMPLOYEES*******/

    //GET all employees
    app.get('/api/employees', function(req, res) {
        // use mongoose to get all nerds in the database
        Employee.find(function(err, employees) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(employees); // return all nerds in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};