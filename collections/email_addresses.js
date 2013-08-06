// Email Addresses:
//  customer_id : string
//  name : string 
//  email_address : string
//  
// Relations:
//  Belongs to customer.

EmailAddresses = new Meteor.Collection("email_addresses");

EmailAddresses.allow({
  insert: function(userId, doc) {
    var user;
 
    user = Meteor.users.findOne({
      _id: userId
    });
    return Roles.userIsInRole(user, ['admin', 'manage-customers']);
  },
  update: function(userId, doc) {
    var user;
 
    user = Meteor.users.findOne({
      _id: userId
    });
    return Roles.userIsInRole(user, ['admin', 'manage-customers']);
  },
  remove: function(userId, doc) {
    var user;
 
    user = Meteor.users.findOne({
      _id: userId
    });
    return Roles.userIsInRole(user, ['admin', 'manage-customers']);
  }
});