
function listings(){
	this.collection = {};
	this.email : null;
	this.message : null;
	this.pictures : []
};


listings.prototype.init = function(mymvc, $, request, nodemailer) {
	this.collection = {};
};


listings.prototype.setListing = function(id, title, body, email, images) {
	this.collection[id] = {
		 id : id
		,title : title
		,body : body
		,email : email
		,images : images
	};
};


listings.prototype.save = function() {
	//writes to disk
};
listings.prototype.load = function() {
	//reads from disk
};



module.exports = new listings;