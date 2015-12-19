
function parsers(){
	this.$ = null;
	this.requests = null;
};

parsers.prototype.init = function(mymvc, $, request, nodemailer) {
	this.$ = $;
	this.requests = mymvc.controllers.requests;
};

parsers.prototype.parseListingPage = function(htmlBody) {
	var rows = this.$(htmlBody).find("#toc_rows .content>.row .i");
	for (var i = rows.length - 1; i >= 0; i--) {
		this.requests.requestDetailPage(rows[i].attribs.href);
		return;
	};
};

parsers.prototype.parseDetailPage = function(htmlBody) {
	var $htmlBody = this.$(htmlBody);
	var title = this.$(htmlBody).find(".postingtitle").text();
	var body = this.$(htmlBody).find("#postingbody").text();
	var email = this.$(htmlBody).find(".anonemail");
	var images = this.$(htmlBody).find(".userbody img");
	console.log(email);
};


module.exports = new parsers();