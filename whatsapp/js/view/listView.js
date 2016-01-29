var ListView = Backbone.View.extend({
	tagName:"ul",

	events:{
    
	},
initialize:function(){
this.Contacts = this.collection;	
this.listenTo(this.Contacts,'add',this.addOne);
this.listenTo(this.Contacts,'reset',this.addAll);
this.render();
},

render:function(){
      this.addAll();
},

addOne:function(contact){
var view = new ContactView({model:contact});
this.$el.append(view.render().el);
console.log(contact.get('order'));
$('#container').append(this.$el);
},

addAll:function(){
	this.Contacts.each(this.addOne,this);
},

});