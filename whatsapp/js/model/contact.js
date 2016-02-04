var Contact = Backbone.Model.extend({
    defaults:function() {
      return {
         name:"",
         mobile:"",
         imgUrl:"",
         order:contacts.nextOrder(),
         lastSeen:"",
         status:"",
     };
    }
	});

var ContactList = Backbone.Collection.extend({
	model: Contact,

	localStorage: new Backbone.LocalStorage("ContactsCollection"),
	
	nextOrder:function(){
		if(!this.length){return 1
		}else{
			console.log(parseInt(this.last().get('order')));
		return parseInt(this.last().get('order'))+1;
		}	
	},

	comparator:'order'
});

var contacts = new ContactList;