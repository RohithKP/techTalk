var ContactView = Backbone.View.extend({
	tagName:"li",

	template:_.template($('#item-template').html()),

	events:{
    "click":"open",
    "change":"save",
    "click .destroy":"clear"
	},

	render:function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

    save:function(){
      this.model.save({title:  $(".editing #title").val(),email:$(".editing #email").val(),mobile:$(".editing #mobile").val()});
    },

    clear:function(){
    	this.model.destroy();
    }

});