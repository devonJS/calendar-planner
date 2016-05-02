"use strict";
var Events = require("./eventsModel");
var _ = require('lodash');

exports.getEvents = function(req, res) {
    var to = req.query.to ? req.query.to : null;
    var from = req.query.from ? req.query.from : null;
    var query = {};
    
    if(to && from) {
      query = {'startTime': {$gt: from, $lt: to}};
    }
    
    Events.find(query, function(err, docs) {
        if(err) res.status(500).json({message: "Error: Did not read anything from database"});
        res.status(200).json(docs)
    });
};

exports.getEventType = function(req, res) {
    Events.find({"type": req.params.type}, function(err, docs) {
        if(err) res.status(500).json({message: "Error: Did not read anything from database"});
        res.status(200).json(docs)
    });
};