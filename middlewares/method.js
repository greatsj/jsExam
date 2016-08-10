// GET - GET Parameter ?page=2&per=5
// POST - HTTP Request body

function getPostDataMiddleware(){
	return function(req, res, next){

		var data = "";
		req.on("data", function(chunk) {
		// body...
		data += chunk;
		});

		req.on("end", function(){
			var postData = {};

			data.split("&").forEach(function(keyValue){
				var key = keyValue.split("=")[0];
				var value = keyValue.split("=")[1];

				postData[key] = value;

			});

			req.myPostData = postData;
			next(); // return 'function(req, res, next)'
		});
	};
	
};


module.exports.getPostDataMiddleware = getPostDataMiddleware;
