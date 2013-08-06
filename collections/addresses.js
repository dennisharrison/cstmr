// Addresses:
//  customer_id : string
//  name : string 
//  address : text
//  
// Relations:
//  Belongs to customer.

Addresses = new Meteor.Collection("addresses");

Addresses.allow({
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