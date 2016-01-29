var Contact = Backbone.Model.extend({
    defaults:{
         name:"",
         mobile:"",
         imgUrl:"",
         order:0,
         lastSeen:"",
         status:"",
    }
	});

var ContactList = Backbone.Collection.extend({
	model: Contact,

	localStorage: new Backbone.LocalStorage("contacts-backbone"),
	
	nextOrder:function(){
		if(!this.length)return 1;
		return this.last().get('order')+1;
	},

	comparator:'order'
});
