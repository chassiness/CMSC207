/**
 * Created by chassiness on 3/11/16.
 */

/*
 Employee Number - textbox
 • First Name (s) – textbox
 • Middle Initial - textbox
 • Last Name – textbox
 • Username – textbox
 • Password – password field
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Employee', {
    firstName : {type : String, default: ''},
    middleInitial : {type : String, default: ''},
    lastName : {type : String, default: ''},
    userName : {type : String, default: ''},
    password : {type : String, default: ''}
    //,role: { type: String, default: "USER" }
});
