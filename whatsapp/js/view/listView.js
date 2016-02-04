var ListView = Backbone.View.extend({
	tagName:"ul",

	events:{
    
	},
initialize:function(){
this.contacts = this.collection;	
this.listenTo(this.contacts,'add',this.addOne);
this.listenTo(this.contacts,'reset',this.addAll);
this.render();
},

render:function(){
      this.addAll();
      $('#container').append(this.$el);
},

addOne:function(contact){
var view = new ContactView({model:contact});
this.$el.append(view.render().el);
},

addAll:function(){
	this.contacts.each(this.addOne,this);
},

});