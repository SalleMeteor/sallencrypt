Meteor.publish("allWords" , function() {
  return Dictionary.find();
});

Meteor.publish("oneWord", function(text) {
  return Dictionary.find({text: text});
});