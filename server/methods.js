Meteor.methods({
	insertWord: function (text, crypt) {
    	Dictionary.insert({ text: text, crypt: crypt});
    	return ("Inserted!");
  },	
	removeWord: function (text) {
    	Dictionary.remove(text);
    	return ("Removed!");
  }  
});