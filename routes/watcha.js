var express = require("express");
var request = require("request");
var router = express.Router();

router.get("/", function(req, res, next){

	var search = req.query.search;

	var apiUrl = "https://watcha.net/home/news.json?page=1&per=100";

	request.get(apiUrl, function(error, response, body){
		var data = JSON.parse(body);
		var newsItems = data["news"];

		if (search) {
			newsItems = newsItems.filter(function(newsItem){
				return newsItem.content.indexOf(search) > -1
			});
			// var matchedNewsItems = [];

			// newsItems.forEach(function(newsItem){
			// 	if (newsItem.title.indexOf(search) > -1){
			// 		matchedNewsItems.push(newsItem);
			// 	};
			// });
		};
		return res.render("watcha", {newsItems: newsItems, search: search});
	});
});



module.exports = router;
