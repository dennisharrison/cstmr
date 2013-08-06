// Add in an admin user if we don't have one.
if(!Meteor.users.findOne({username: 'admin'})){
  var id = Accounts.createUser({
		username: 'admin',
		email: 'dennisharrison@gmail.com',
		password: 'password',
		profile: {
			name: 'Administrator'
		}
	});
}