// Phone Numbers:
//  customer_id : string
//  name : string 
//  number : string
//  
// Relations:
//  Belongs to customer.

PhoneNumbers = new Meteor.Collection("phone_numbers");

PhoneNumbers.allow({
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