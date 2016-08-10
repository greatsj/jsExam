var express = require("express");
var router = express.Router(); // ==> 'function(req, res, next)'


router.get("/", function(req, res, next){
	return res.render("about");
});


module.exports = router;
