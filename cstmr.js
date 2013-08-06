if (Meteor.isClient) {
  Meteor.startup(function () {
    Hooks.init();
  });

  Template.home.customers = function() {
    return Customers.find();
  }

  Template.customer_view.customer = function(){
    return Customers.findOne(Session.get('currentCustomerId'));
  }

  Template.customer_view.events({
    'keyup .customer_name' : function (event, template) {
      $(template.find(".customer_save_button")).removeClass('hide');
    },

    'tap, click .customer_save_button' : function (event, template) {
      var customer = Customers.findOne(Session.get('currentCustomerId'));
      var new_name = $(template.find(".customer_name")).text().trim();
      var changes = {$set: {name: new_name}}
      Customers.update(customer._id, changes);
    }

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("CSTMR Started.");
  });
}
