// Customers:
//  parent_id : string
//  is_company : boolean
//  name : string 
//  notes : text
//  
// Relations:
//  Addresses, Phone Numbers, Email addresses
//  Optionally customers can have customers as parents

Customers = new Meteor.Collection("customers");

Customers.allow({
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