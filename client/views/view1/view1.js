Template.view1.helpers({

  words: function () {
   return Dictionary.find();
  }
  
});

Template.addWord.events({
	'click button': function () {
		    var texto;
        var encrypted;
        var sReturn;
   
        texto = document.getElementById("texto").value;
        encrypted = CryptoJS.MD5(texto).toString();
    
        sReturn = Meteor.call('insertWord', texto, encrypted);
        document.getElementById("texto").value = encrypted;
	}
});
  
Template.reset.events({
  
  'click button': function () {
      document.getElementById("texto").value = "";
  }
  
});

Template.view1.greeting = function () {
    return "Welcome to myfirstapp.";
};
  
Template.view1.players = function () {
    var player = Players.findOne("alex");
    return player.name;
    //return "alex";
};