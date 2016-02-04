var ChatItem = Backbone.View.extend({
	tagName:"li",

	template:_.template($('#chat-item').html()),

	events:{
	},

	render:function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

    clear:function(){
    	this.model.destroy();
    }

});