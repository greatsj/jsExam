var express = require("express");
var router = express.Router(); // ==> 'function(req, res, next)'
var request = require("request");


// "/zigbang/:roomId"
router.get("/", function(req, res, next){
	

	// var maxRent = req.query.max_rent;
	// var minRent = req.query.min_rent;



	var apiUrl = "https://api.zigbang.com/v1/items?detail=true&item_ids=4917090&item_ids=4571707&item_ids=5404075&item_ids=5570186&item_ids=5549561&item_ids=5556144&item_ids=5589215&item_ids=5466049";
	
	request.get(apiUrl, function(error, response, body){
		var data = JSON.parse(body); // data => javascript Object

		
		data = data.items
			.map(function(item){return item.item;});
		

		var maxDeposit = req.query.max_deposit || data.reduce(function(a, b) { 
			return a.deposit > b.deposit ? {deposit: a.deposit} : {deposit: b.deposit}}).deposit;
		var minDeposit = req.query.min_deposit || data.reduce(function(a, b) {
			return a.deposit < b.deposit ? {deposit: a.deposit} : {deposit: b.deposit}}).deposit;
		

		console.log(maxDeposit);
		console.log(minDeposit);

		data = data.filter(function(room){
				return room.deposit <= maxDeposit && room.deposit >= minDeposit;
		});
		return res.render("zigbang/list", {rooms: data});
		// var roomItems = data["items"];
		// return res.render("zigbang/list", {roomItems: roomItems});
	});
});

module.exports = router;
