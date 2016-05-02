"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventsSchema = new Schema({
    startTime: String,
    endTime: String,
    title: String,
    description: String,
    type: String,
    address: String
});

module.exports = mongoose.model("Events", EventsSchema);