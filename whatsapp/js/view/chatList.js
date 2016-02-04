var ChatList = Backbone.View.extend({
    tagName:"ul",

    events:{
    
    },
	initialize:function(){  
		this.chats = [];
    this.collection;
    console.log(this.collection);
	this.listenTo(this.collection,'add',this.addOne);
	this.listenTo(this.collection,'reset',this.addAll);
	this.render();
	},

	render:function(col){
		  this.chats = new ChatColl(this.collection.where({threadId:app.id}));
	      this.addAll();
	      $('#chatbox').html(this.$el);
	},

	addOne:function(model){
	// console.log(model);	
	var view = new ChatItem({model:model});
	this.$el.append(view.render().el);
	},

	addAll:function(){
	    this.chats.each(this.addOne,this);
	},

});

console.log(app.id);