// GET - GET Parameter ?page=2&per=5
// POST - HTTP Request body

var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
	// GET = request.query
	return res.json(req.query);
});

router.post("/", function(req, res, next){
	return res.json(req.body);
	
});

// watcha 검색기능 - String.indexOf > -1 이용


// body-parser => json, html, form ...
// watcha search


module.exports = router;