Meteor.Router.add({
	 '/': function(){
		  return 'home'
	 },

  	'/customers/:id': function(id) {
    	console.log('we are at ' + this.canonicalPath);
    	console.log("our parameters: " + this.params);
    	Session.set('currentCustomerId', id);
    	return 'customer_view'
  	},

  	'*': 'not_found'
});