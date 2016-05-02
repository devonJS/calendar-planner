"use strict";

var express = require("express");
var eventController = require("./eventsController");
var router = express.Router();

router.get("/", eventController.getEvents);
router.get("/:type", eventController.getEventType);

module.exports = router;