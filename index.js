var fs = require("fs");
var customSettings = JSON.parse(fs.readFileSync("./customSettings.json"));
var mymvc = require("mymvc")
mymvc.init(
	[
		 require("cheerio")
		,require("request")
		,require("nodemailer")
	]
	,["./controllers", "./views"]
);
mymvc.references.controllers.requests.requestListingPage(customSettings.startPath);

