var path = require("path");
var express = require("express");
// var request = require("request");
var morgan = require("morgan");
var bodyParser = require("body-parser");

var homeRouter = require("./routes/home");
var zigbangRouter = require("./routes/zigbang");
var aboutRouter = require("./routes/about");
var watchaRouter = require("./routes/watcha");
var methodsRouter = require("./routes/methods");
var contactsRouter = require("./routes/contacts")

var methodMiddleware = require("./Middlewares/method");

var app = express();


// Application Settings
//app.set("_____","_________________");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


// 1. logger
// 2. router = Middleware (request ... response)
// 3. renderer

// 3rd Party Middlewares
app.use(morgan("combined"));
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}));

// app.use(______) => function(req, res, next) (...)
// logger - morgan ('npm install --save morgan')

// app.use(methodMiddleware.getPostDataMiddleware());

//routers
app.use("/", homeRouter);
app.use("/zigbang/", zigbangRouter);
app.use("/about/", aboutRouter);
app.use("/watcha/", watchaRouter);
app.use("/methods/", methodsRouter);
app.use("/contacts", contactsRouter);
// 'function(req, res, next)'
// app.use("/posts/", postsRouter); // posts/:postId, posts/, posts/new/ ...

// app.get("/", function(req, res, next){
// 	// res.write(...)
// 	// res.end();
// 	// return res.send("hello world"); // plain/text
// 	return res.json({name : "seokjin"}); // json
// });

// app.get("/about/", function(req, res, next){
// 	return res.send("about");
// });

// Error Handling Middleware
app.use(function(error, req, res, next){
	res.status(error.status || 500);
	return res.render("error", {error: error});
	next();
});

// app.get("/zigbang/:roomId/", function(req, res, next){
// 	var roomId = req.params.roomId;
// 	var apiUrl = "https://api.zigbang.com/v1/items?detail=true&item_ids=" + roomId;
	
// 	request.get(apiUrl, function(error, response, body){
// 		var data = JSON.parse(body); // data => javascript Object
// 		return res.json(data);
// 	});
// });

app.listen(3000, function(){
	console.log("Server is listening");
});

