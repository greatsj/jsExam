var express = require("express");
var router = express.Router(); // ==> 'function(req, res, next)'

var zigbangDetailRouter = require("./detail");
var zigbangListRouter = require("./list");


router.use("/", zigbangListRouter);
router.use("/", zigbangDetailRouter);

module.exports = router;