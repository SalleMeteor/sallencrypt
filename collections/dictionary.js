Dictionary = new Meteor.Collection("Dictionary");

Dictionary.allow({
  
  insert: function() {
    return true;
  },
  
  update: function() {
    return true;
  },
  
  remove: function() {
    return true;
  }
});