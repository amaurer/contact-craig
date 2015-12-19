
function requests(){
	this.request = null;
	this.host = null;
	this.headers = {
		 "User-Agent" : "user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36"
		,"accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
		,"accept-language" : "en-US,en;q=0.8"
	};
};

requests.prototype.init = function(mymvc, $, request, nodemailer) {
	this.request = request;
	this.parser = mymvc.controllers.parsers;
};

requests.prototype.setHost = function(protocol, domain) {
	this.url = protocol + "://" + domain;
};

requests.prototype.setHeaders = function(headerObject) {
	this.headers = headerObject || {};
};

requests.prototype.requestPage = function(url, cb) {
	
	var self = this;

	this.request({
		url : this.url + url,
		headers : this.headers,
	}, function(e, res){
		if(e != null){
			throw e;
		};
		if(res.statusCode === 200){
			if(cb){
				cb(res.body.toString())
			};
		} else {
			throw res.statusText;
		};
	});

};



module.exports = new requests();